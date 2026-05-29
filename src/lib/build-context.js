export function buildContext(chunks) {
  return chunks
    .map((c, i) => {
      return `(${i + 1}) ${c.content}`;
    })
    .join("\n\n");
}
