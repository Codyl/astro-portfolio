import { getEmbedding } from "./get-embedding.js";
import { retrieveTopK } from "./retrieve-top-k.js";
import { buildContext } from "./build-context.js";
import { summarizeContext } from "./summarize.js";

export async function ask(query, data) {
  // 1. embed query
  const queryEmbedding = await getEmbedding(query);

  // 2. retrieve
  const topK = retrieveTopK(data, queryEmbedding, 5);

  // 3. build context
  const context = buildContext(topK);

  // 4. summarize
  const answer = await summarizeContext(context, query);

  return {
    answer,
    sources: topK, // optional (great for debugging)
  };
}
