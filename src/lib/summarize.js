export async function summarizeContext(context, query) {
  const prompt = `
You are summarizing my experience and knowledge based on the provided context which includes resources I created.

User question:
${query}

Context:
${context}

Instructions:
- Give a clear, concise summary of my experience and knowledge to fit the user question or statement.
- Focus on skills, tools, and experience
- Do NOT repeat chunks verbatim
- Synthesize into a single answer
- Refer to me as "Cody Lillywhite" rather than "you" or "the author"
- Emphasize strengths and relevant experience first
- Present gaps only as "growth opportunities" or "areas to learn"
- Never use discouraging or negative language about the candidate
- Do not say the candidate is "not a fit" or "poor fit"
`;
  console.log("API KEY LOADED:", !!import.meta.env.OPENAI_API_KEY);
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${import.meta.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o-mini", // or similar
      messages: [{ role: "user", content: prompt }],
    }),
  });

  const data = await response.json();
  return data.choices[0].message.content;
}
