import {
  BedrockRuntimeClient,
  InvokeModelCommand,
} from "@aws-sdk/client-bedrock-runtime";
import fs from "fs";

const client = new BedrockRuntimeClient({
  region: "us-east-1",
});

async function getEmbedding(text) {
  const command = new InvokeModelCommand({
    modelId: "amazon.titan-embed-text-v1",
    contentType: "application/json",
    accept: "application/json",
    body: JSON.stringify({
      inputText: text,
    }),
  });

  const response = await client.send(command);
  const body = JSON.parse(new TextDecoder().decode(response.body));

  return body.embedding;
}

async function main() {
  const data = JSON.parse(fs.readFileSync("./src/data/content.json"));

  const embedded = [];

  for (const item of data) {
    const embedding = await getEmbedding(item.content);

    embedded.push({
      ...item,
      embedding,
    });
  }

  fs.writeFileSync(
    "./src/data/embeddings.json",
    JSON.stringify(embedded, null, 2),
  );
}

main();
