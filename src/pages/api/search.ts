import type { APIRoute } from "astro";
import {
  BedrockRuntimeClient,
  InvokeModelCommand,
} from "@aws-sdk/client-bedrock-runtime";
import { cosineSimilarity } from "../../lib/similarity";
import embeddings from "../../data/embeddings.json";

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

  const response = await client.send(command);

  const raw = new TextDecoder().decode(response.body as Uint8Array);
  const parsed = JSON.parse(raw);

  return parsed.embedding;
}

export const POST = (async ({ request }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let body: any;
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
      headers: { "Content-Type": "application/json" },
    });
  }

  const queryEmbedding = await getEmbedding(inputText);

  const scored = embeddings.map((item) => ({
    ...item,
    score: cosineSimilarity(queryEmbedding, item.embedding),
  }));

  scored.sort((a, b) => b.score - a.score);

  return new Response(JSON.stringify(scored.slice(0, 5)), {
    headers: { "Content-Type": "application/json" },
  });
}) satisfies APIRoute;
