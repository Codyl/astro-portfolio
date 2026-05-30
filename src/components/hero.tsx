import React, { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { Search, SendHorizontal, Rocket, Newspaper, Info } from "lucide-react";
import ScrollButton from "./scroll-button";
import Backdrop from "./backdrop";
import { Button } from "./ui/button";
import "./hero.css";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "./ui/tooltip";

const MONTHLY_SUMMARY_LIMIT = 15;

const Hero = () => {
  const [query, setQuery] = useState("");
  const [isSummaryMode, setIsSummaryMode] = useState(false);
  const [results, setResults] = useState<
    { id: string; title: string; description: string; url: string }[]
  >([]);
  const [summary, setSummary] = useState("");
  const hasStarted = React.useRef(false);

  let monthYearUsageCount = 0;
  try {
    monthYearUsageCount = parseInt(
      localStorage.getItem(
        new Date().getMonth().toString() +
          "-" +
          new Date().getFullYear().toString(),
      ) || "0",
    );
  } catch {
    // ignore parsing errors and default to 0
  }

  async function handleSearch() {
    if (
      query.length === 0 ||
      (isSummaryMode ? query.length >= 200 : query.length >= 100) ||
      monthYearUsageCount >= MONTHLY_SUMMARY_LIMIT
    ) {
      return;
    }

    const res = await fetch(import.meta.env.VITE_API_URL + "/api/search", {
      method: "POST",
      body: JSON.stringify({
        inputText: query,
        isGenerative: isSummaryMode,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) {
      const errText = await res.text();
      throw new Error(errText);
    }

    const data = await res.json();
    if (isSummaryMode) {
      setResults([]);
      setSummary(data.answer);
    } else {
      setSummary("");
      setResults(data);
    }
    const monthYearKey =
      new Date().getMonth().toString() +
      "-" +
      new Date().getFullYear().toString();
    localStorage.setItem(
      monthYearKey,
      localStorage.getItem(monthYearKey) || "0",
    );
  }

  const animate = () => {
    const typingSpeed = 120;
    const deletingSpeed = 60;
    const pauseDelay = 1200;
    const startDelay = 500;
    const typewriterTexts = [
      "Reliability-focused",
      "Frontend",
      "Quality Assurance",
      "Full-stack",
    ];

    const target = document.getElementById("capability");
    let textIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function updateText() {
      if (!target) return;

      const fullText = typewriterTexts[textIndex];

      if (deleting) {
        charIndex = Math.max(charIndex - 1, 0);
        target.textContent = fullText.slice(0, charIndex);
      } else {
        charIndex = Math.min(charIndex + 1, fullText.length);
        target.textContent = fullText.slice(0, charIndex);
      }

      let delay = deleting ? deletingSpeed : typingSpeed;

      if (!deleting && charIndex === fullText.length) {
        delay = pauseDelay;
        deleting = true;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        textIndex = (textIndex + 1) % typewriterTexts.length;
        delay = typingSpeed;
      }

      setTimeout(updateText, delay);
    }

    setTimeout(updateText, startDelay);
  };

  useEffect(() => {
    if (hasStarted.current) return;

    hasStarted.current = true;
    animate();
  }, []);

  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      <Backdrop />
      <div className="text-center">
        <h1 className="text-primary text-5xl leading-none font-extrabold tracking-tight md:text-6xl">
          <span id="capability"></span>
          <span className="typewriter-cursor text-tertiary">|</span>
          <span className="text-tertiary">Engineer</span>
        </h1>
        <p className="sr-only">
          Search projects, articles, and case studies — tools and writing about
          building reliable systems.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <form
            className="tablet:w-xl w-md"
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
          >
            <label className="mt-3 flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={isSummaryMode}
                onChange={() => setIsSummaryMode(!isSummaryMode)}
              />
              AI Summary mode
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="text-tertiary size-4" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-surface-container-highest text-primary w-md">
                    <p>
                      Use AI to generate a summary of Codys job fit for your
                      company based on the content he has created. Limit 15
                      summary requests per month.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </label>
            <div className="relative">
              <Input
                aria-label={
                  isSummaryMode
                    ? "Ask a question"
                    : "Search projects, articles, or videos"
                }
                placeholder={
                  isSummaryMode
                    ? "Ask about fit for job description..."
                    : "Search projects, articles, or videos..."
                }
                className="bg-surface-container h-12 truncate pr-20 pl-12"
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                maxLength={isSummaryMode ? 200 : 100}
              />
              <Search className="text-tertiary absolute top-1/2 left-3 -translate-y-1/2" />

              <Button
                disabled={
                  query.length === 0 ||
                  (isSummaryMode ? query.length >= 200 : query.length >= 100)
                }
                type="button"
                className={`text-background absolute top-1/2 right-3 -translate-y-1/2 ${
                  query.length === 0 ||
                  (isSummaryMode ? query.length >= 200 : query.length >= 100)
                    ? "cursor-not-allowed opacity-50"
                    : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleSearch();
                }}
              >
                Search
              </Button>
            </div>
          </form>
        </div>
        <div className="absolute left-1/2 mt-4 max-h-64 w-lg -translate-x-1/2 divide-y-2 overflow-auto">
          {results.map((item) => (
            <div
              key={item.id}
              className="bg-surface-container-high rounded border p-3"
            >
              <h2 className="font-bold">{item.title}</h2>
              <p>{item.description}</p>
              <Button
                onClick={() => {
                  window.open(item.url, "_blank");
                }}
                className="text-surface mt-1"
              >
                View
              </Button>
            </div>
          ))}
        </div>
        {monthYearUsageCount >= MONTHLY_SUMMARY_LIMIT && isSummaryMode && (
          <div className="absolute left-1/2 mt-4 w-full max-w-4xl -translate-x-1/2">
            <div className="bg-surface-container-high rounded border p-3">
              <h2 className="font-bold">Monthly Summary Limit Reached</h2>
              <p>
                You have reached the monthly limit of {MONTHLY_SUMMARY_LIMIT} AI
                summaries. Please try again next month.
              </p>
            </div>
          </div>
        )}
        {query.length > 199 && isSummaryMode && (
          <div className="absolute left-1/2 mt-4 w-full max-w-4xl -translate-x-1/2">
            <div className="bg-surface-container-high rounded border p-3">
              <h2 className="font-bold">Input Too Long</h2>
              <p>
                Your question exceeds the 200 character limit for summary mode.
                Please shorten your question and try again.
              </p>
            </div>
          </div>
        )}
        {query.length > 99 && !isSummaryMode && (
          <div className="absolute left-1/2 mt-4 w-full max-w-4xl -translate-x-1/2">
            <div className="bg-surface-container-high rounded border p-3">
              <h2 className="font-bold">Input Too Long</h2>
              <p>
                Your question exceeds the 100 character limit. Please shorten
                your question and try again.
              </p>
            </div>
          </div>
        )}
        {summary && (
          <div className="absolute left-1/2 mx-4 mt-4 max-h-64 w-full max-w-4xl -translate-x-1/2 divide-y-2 overflow-auto">
            <div className="bg-surface-container-high rounded border p-3">
              <h2 className="font-bold">AI Summary</h2>
              <p>{summary}</p>
            </div>
          </div>
        )}

        <div className="mt-6 flex items-center justify-center gap-3">
          <ScrollButton variant="outline" className="text-primary" id="contact">
            <SendHorizontal className="mr-2 size-4" />
            Contact Me
          </ScrollButton>
          <ScrollButton
            variant="outline"
            className="text-primary"
            id="projects"
          >
            <Rocket className="mr-2 size-4" />
            Featured Projects
          </ScrollButton>
          <ScrollButton
            variant="outline"
            className="text-primary"
            id="knowledge-base"
          >
            <Newspaper className="mr-2 size-4" />
            Latest Articles
          </ScrollButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;
export const prerender = false;
