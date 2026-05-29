import { cosineSimilarity } from "./similarity.js";

export function retrieveTopK(data, queryEmbedding, k = 5) {
  const scored = data.map((item) => ({
    ...item,
    score: cosineSimilarity(queryEmbedding, item.embedding),
  }));

  scored.sort((a, b) => b.score - a.score);

  return scored.slice(0, k);
}
