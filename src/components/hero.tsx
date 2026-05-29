import React, { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { Search, SendHorizontal, Rocket, Newspaper } from "lucide-react";
import ScrollButton from "./scroll-button";
import Backdrop from "./backdrop";
import { Button } from "./ui/button";
import "./hero.css";

const Hero = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<
    { id: string; title: string; description: string; url: string }[]
  >([]);
  const hasStarted = React.useRef(false);

  async function handleSearch() {
    const res = await fetch("http://localhost:4321/api/search", {
      method: "POST",
      body: JSON.stringify({
        inputText: query,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (!res.ok) {
      const errText = await res.text();
      throw new Error(errText);
    }

    const data = await res.json();
    setResults(data);
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
          <form className="tablet:w-xl w-md">
            <div className="relative">
              <Input
                aria-label="Search projects, articles, or videos"
                placeholder="Search projects, articles, or videos..."
                className="bg-elevated h-12 pl-12"
                onChange={(e) => setQuery(e.target.value)}
                value={query}
              />
              <Search className="text-tertiary absolute top-1/2 left-3 -translate-y-1/2" />

              <Button
                type="button"
                className="text-background absolute top-1/2 right-3 -translate-y-1/2"
                onClick={() => {
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
