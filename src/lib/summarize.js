export async function summarizeContext(context, query) {
  const prompt = `
You are evaluating how well Cody Lillywhite fits a query based ONLY on provided context.

User question:
${query}

Context:
${context}

Rules (STRICT):
- You MUST base your evaluation ONLY on explicit evidence in the context.
- If a skill, technology, or experience is NOT clearly stated in the context, you MUST assume Cody Lillywhite does NOT have it.
- Do NOT infer, assume, generalize, or "fill in gaps".
- Similar or adjacent technologies do NOT count as a match.
- Absence of evidence = evidence of no experience.

Fit grading definitions:
- "great fit" = strong, direct, and repeated evidence of required skills/experience
- "good fit" = clear evidence of most required skills, minor gaps allowed
- "poor fit" = partial or indirect relevance, major gaps present
- "no fit" = little to no relevant evidence

Output format:
1. First line ONLY: one of
   "great fit", "good fit", "poor fit", or "no fit"

2. If (and only if) the fit is NOT "no fit", add a blank line, then:
   - A concise summary of ONLY the relevant experience
   - Include ONLY skills explicitly found in the context
   - Do NOT repeat phrases verbatim
   - Do NOT mention missing skills or speculate

Additional constraints:
- Be skeptical and conservative in grading
- When in doubt, choose the LOWER fit category
- Never exaggerate or embellish
`;

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
