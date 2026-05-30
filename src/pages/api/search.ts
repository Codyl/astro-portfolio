import type { APIRoute } from "astro";
import {
  BedrockRuntimeClient,
  InvokeModelCommand,
} from "@aws-sdk/client-bedrock-runtime";
import { cosineSimilarity } from "../../lib/similarity";
import embeddings from "../../data/embeddings.json";
import { ask } from "../../lib/ask";

const client = new BedrockRuntimeClient({
  region: "us-east-1",
});

async function getEmbedding(inputText: string) {
  const command = new InvokeModelCommand({
    modelId: "amazon.titan-embed-text-v2:0",
    contentType: "application/json",
    accept: "application/json",
    body: JSON.stringify({ inputText }),
  });

  let response;
  try {
    response = await client.send(command);
  } catch (error) {
    console.error("Error invoking model:", error);
    throw error;
  }

  const raw = new TextDecoder().decode(response.body as Uint8Array);
  const parsed = JSON.parse(raw);

  return parsed.embedding;
}

export const POST = (async ({ request }) => {
  let body: { inputText?: string; isGenerative?: boolean } = {};
  if (request.headers.get("Content-Type") === "application/json") {
    try {
      body = await request.json();
    } catch (error) {
      return new Response(
        JSON.stringify({
          error: error instanceof Error ? error.message : String(error),
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }
  }
  const inputText = typeof body?.inputText === "string" ? body.inputText : "";
  if (!inputText) {
    return new Response(JSON.stringify({ error: "Missing inputText" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":
          "https://astro-portfolio-hazel-two.vercel.app",
      },
    });
  }

  if (body.isGenerative) {
    const result = await ask(inputText, embeddings);

    return new Response(JSON.stringify(result), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":
          "https://astro-portfolio-hazel-two.vercel.app",
      },
    });
  }

  const queryEmbedding = await getEmbedding(inputText);

  const scored = embeddings.map((item) => ({
    ...item,
    score: cosineSimilarity(queryEmbedding, item.embedding),
  }));

  scored.sort((a, b) => b.score - a.score);
  return new Response(
    JSON.stringify(scored.filter((val) => val.score > 0.03).slice(0, 5)),
    {
      headers: { "Content-Type": "application/json" },
    },
  );
}) satisfies APIRoute;
