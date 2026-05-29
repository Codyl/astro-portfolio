import { c as createComponent } from './astro-component_Dohnnj0M.mjs';
import 'piccolore';
import { u as renderSlot, v as renderTemplate, p as maybeRenderHead, w as spreadAttributes, j as addAttribute, s as renderComponent, t as renderHead } from './server_BWfx3Eg3.mjs';
import { clsx } from 'clsx';
import { jsx, jsxs } from 'react/jsx-runtime';
import React, { useState, useRef, useEffect } from 'react';
import { cva } from 'class-variance-authority';
import { Slot, NavigationMenu as NavigationMenu$1, Tooltip as Tooltip$1 } from 'radix-ui';
import { twMerge } from 'tailwind-merge';
import { ChevronDownIcon, Menu, Info, Search, SendHorizontal as SendHorizontal$1, Rocket, Newspaper as Newspaper$1 } from 'lucide-react';

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderSlot($$result, $$slots["default"])}`;
}, "/home/runner/work/astro-portfolio/astro-portfolio/src/layouts/Layout.astro", void 0);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-tertiary text-primary-foreground [a]:hover:bg-primary/80",
        outline: "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot.Root : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      "data-variant": variant,
      "data-size": size,
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    NavigationMenu$1.Root,
    {
      "data-slot": "navigation-menu",
      "data-viewport": viewport,
      className: cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        className
      ),
      ...props,
      children: [
        children,
        viewport && /* @__PURE__ */ jsx(NavigationMenuViewport, {})
      ]
    }
  );
}
function NavigationMenuList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    NavigationMenu$1.List,
    {
      "data-slot": "navigation-menu-list",
      className: cn(
        "group flex flex-1 list-none items-center justify-center gap-0",
        className
      ),
      ...props
    }
  );
}
function NavigationMenuItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    NavigationMenu$1.Item,
    {
      "data-slot": "navigation-menu-item",
      className: cn("relative", className),
      ...props
    }
  );
}
const navigationMenuTriggerStyle = cva(
  "group/navigation-menu-trigger inline-flex h-9 w-max items-center justify-center rounded-lg px-2.5 py-1.5 text-sm font-medium transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-popup-open:bg-muted/50 data-popup-open:hover:bg-muted data-open:bg-muted/50 data-open:hover:bg-muted data-open:focus:bg-muted"
);
function NavigationMenuTrigger({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    NavigationMenu$1.Trigger,
    {
      "data-slot": "navigation-menu-trigger",
      className: cn(navigationMenuTriggerStyle(), "group", className),
      ...props,
      children: [
        children,
        " ",
        /* @__PURE__ */ jsx(
          ChevronDownIcon,
          {
            className: "relative top-px ml-1 size-3 transition duration-300 group-data-open/navigation-menu-trigger:rotate-180 group-data-popup-open/navigation-menu-trigger:rotate-180",
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
}
function NavigationMenuContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    NavigationMenu$1.Content,
    {
      "data-slot": "navigation-menu-content",
      className: cn(
        "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:ring-foreground/10 data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 data-[motion^=from-]:animate-in data-[motion^=from-]:fade-in data-[motion^=to-]:animate-out data-[motion^=to-]:fade-out group-data-[viewport=false]/navigation-menu:data-open:animate-in group-data-[viewport=false]/navigation-menu:data-open:fade-in-0 group-data-[viewport=false]/navigation-menu:data-open:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-closed:animate-out group-data-[viewport=false]/navigation-menu:data-closed:fade-out-0 group-data-[viewport=false]/navigation-menu:data-closed:zoom-out-95 top-0 left-0 w-full p-1 ease-[cubic-bezier(0.22,1,0.36,1)] group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-lg group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:ring-1 group-data-[viewport=false]/navigation-menu:duration-300 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none md:absolute md:w-auto",
        className
      ),
      ...props
    }
  );
}
function NavigationMenuViewport({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "absolute top-full left-0 isolate z-50 flex justify-center"
      ),
      children: /* @__PURE__ */ jsx(
        NavigationMenu$1.Viewport,
        {
          "data-slot": "navigation-menu-viewport",
          className: cn(
            "origin-top-center bg-popover text-popover-foreground ring-foreground/10 data-open:animate-in data-open:zoom-in-90 data-closed:animate-out data-closed:zoom-out-90 relative mt-1.5 h-(--radix-navigation-menu-viewport-height) w-full overflow-hidden rounded-lg shadow ring-1 duration-100 md:w-(--radix-navigation-menu-viewport-width)",
            className
          ),
          ...props
        }
      )
    }
  );
}
function NavigationContentItem({
  className,
  to,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "li",
    {
      className: cn(
        "text-primary focus:bg-tertiary data-[state=open]:bg-tertiary hover:bg-primary-hover block cursor-pointer rounded-sm px-3 py-1.5 text-sm outline-none select-none",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx("a", { href: to, className: "block w-full", children })
    }
  );
}

function Navbar() {
  return /* @__PURE__ */ jsx("nav", { className: "bg-surface border-border-default border-b", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex items-center justify-between gap-x-8 px-4 py-2", children: [
    /* @__PURE__ */ jsx(NavigationMenu, { className: "tablet:hidden", children: /* @__PURE__ */ jsx(NavigationMenuList, { children: /* @__PURE__ */ jsxs(NavigationMenuItem, { children: [
      /* @__PURE__ */ jsx(NavigationMenuTrigger, { className: "text-primary", children: /* @__PURE__ */ jsx(Menu, { className: "size-5" }) }),
      /* @__PURE__ */ jsx(NavigationMenuContent, { className: "bg-elevated flex flex-col space-y-2 p-4", children: /* @__PURE__ */ jsxs("ul", { className: "w-max", children: [
        /* @__PURE__ */ jsx(NavigationContentItem, { to: "/", children: "Home" }),
        /* @__PURE__ */ jsx(NavigationContentItem, { to: "/projects", children: "Projects" }),
        /* @__PURE__ */ jsx(NavigationContentItem, { to: "/knowledge-base", children: "Knowledge Base" }),
        /* @__PURE__ */ jsx(NavigationContentItem, { to: "/about", children: "About" })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("a", { href: "/", className: "text-primary text-lg font-bold", children: "Cody Lillywhite" }),
    /* @__PURE__ */ jsxs("ul", { className: "tablet:flex hidden gap-4", children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "link",
          onClick: () => {
            document.getElementById("about")?.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
          },
          children: "About"
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "link",
          onClick: () => {
            document.getElementById("projects")?.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
          },
          children: "Projects"
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "link",
          onClick: () => {
            document.getElementById("knowledge-base")?.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
          },
          children: "Knowledge Base"
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "link",
          onClick: () => {
            document.getElementById("contact")?.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
          },
          children: "Contact"
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      Button,
      {
        className: "text-background",
        onClick: () => {
          const link = document.createElement("a");
          link.href = "/cody-lillywhite.2026.edited.pdf";
          link.download = "cody-lillywhite.2026.edited.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        },
        children: "Download Resume"
      }
    )
  ] }) });
}

function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "border-input text-primary file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 disabled:bg-input/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 h-8 w-full min-w-0 rounded-lg border bg-transparent px-2.5 py-1 transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-3 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-3 md:text-sm",
        className
      ),
      ...props
    }
  );
}

const ScrollButton = ({
  id,
  children,
  variant = "default",
  className = ""
}) => {
  return /* @__PURE__ */ jsx(
    Button,
    {
      variant,
      className,
      onClick: () => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      },
      children
    }
  );
};

const Backdrop = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      draw(pos);
    };
    const spacing = 20;
    let dots = [];
    const generateDots = () => {
      const cols = Math.ceil(canvas.width / spacing);
      const rows = Math.ceil(canvas.height / spacing);
      dots = [];
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          dots.push({
            x: x * spacing,
            y: y * spacing
          });
        }
      }
    };
    const draw = (pos2) => {
      generateDots();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((dot) => {
        const dx = dot.x - pos2.x;
        const dy = dot.y - pos2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const strength = Math.max(0, 1 - dist / 350);
        const push = strength * 10;
        const angle = Math.atan2(dy, dx);
        const drawX = dot.x + Math.cos(angle) * push;
        const drawY = dot.y + Math.sin(angle) * push;
        const brightness = 68 + strength;
        ctx.beginPath();
        ctx.arc(drawX, drawY, 1 + strength * 5.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgb(${brightness}, ${brightness}, ${brightness})`;
        ctx.fill();
      });
      const gradient = ctx.createRadialGradient(
        pos2.x,
        pos2.y,
        0,
        pos2.x,
        pos2.y,
        150
      );
      gradient.addColorStop(0, "rgba(255,255,255,0.9)");
      gradient.addColorStop(1, "rgba(255,255,255,0)");
      ctx.save();
      ctx.globalCompositeOperation = "source-atop";
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.restore();
    };
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      setPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
      draw({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    });
    return () => window.removeEventListener("resize", resize);
  }, []);
  return /* @__PURE__ */ jsx("canvas", { ref: canvasRef, className: "absolute z-[-1] h-screen w-full" });
};

function TooltipProvider({
  delayDuration = 0,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Tooltip$1.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration,
      ...props
    }
  );
}
function Tooltip({
  ...props
}) {
  return /* @__PURE__ */ jsx(Tooltip$1.Root, { "data-slot": "tooltip", ...props });
}
function TooltipTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx(Tooltip$1.Trigger, { "data-slot": "tooltip-trigger", ...props });
}
function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(Tooltip$1.Portal, { children: /* @__PURE__ */ jsxs(
    Tooltip$1.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset,
      className: cn(
        "z-50 inline-flex w-fit max-w-xs origin-(--radix-tooltip-content-transform-origin) items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-xs text-background has-data-[slot=kbd]:pr-1.5 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-sm data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(Tooltip$1.Arrow, { className: "z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground" })
      ]
    }
  ) });
}

const MONTHLY_SUMMARY_LIMIT = 15;
const Hero = () => {
  const [query, setQuery] = useState("");
  const [isSummaryMode, setIsSummaryMode] = useState(false);
  const [results, setResults] = useState([]);
  const [summary, setSummary] = useState("");
  const hasStarted = React.useRef(false);
  let monthYearUsageCount = 0;
  try {
    monthYearUsageCount = parseInt(
      localStorage.getItem(
        (/* @__PURE__ */ new Date()).getMonth().toString() + "-" + (/* @__PURE__ */ new Date()).getFullYear().toString()
      ) || "0"
    );
  } catch {
  }
  async function handleSearch() {
    if (query.length === 0 || (isSummaryMode ? query.length >= 200 : query.length >= 100) || monthYearUsageCount >= MONTHLY_SUMMARY_LIMIT) {
      return;
    }
    const res = await fetch("http://localhost:4321/api/search", {
      method: "POST",
      body: JSON.stringify({
        inputText: query,
        isGenerative: isSummaryMode
      }),
      headers: { "Content-Type": "application/json" }
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
    const monthYearKey = (/* @__PURE__ */ new Date()).getMonth().toString() + "-" + (/* @__PURE__ */ new Date()).getFullYear().toString();
    localStorage.setItem(
      monthYearKey,
      localStorage.getItem(monthYearKey) || "0"
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
      "Full-stack"
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
  return /* @__PURE__ */ jsxs("section", { className: "relative flex h-screen items-center justify-center overflow-hidden", children: [
    /* @__PURE__ */ jsx(Backdrop, {}),
    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxs("h1", { className: "text-primary text-5xl leading-none font-extrabold tracking-tight md:text-6xl", children: [
        /* @__PURE__ */ jsx("span", { id: "capability" }),
        /* @__PURE__ */ jsx("span", { className: "typewriter-cursor text-tertiary", children: "|" }),
        /* @__PURE__ */ jsx("span", { className: "text-tertiary", children: "Engineer" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "sr-only", children: "Search projects, articles, and case studies — tools and writing about building reliable systems." }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 flex items-center justify-center gap-3", children: /* @__PURE__ */ jsxs(
        "form",
        {
          className: "tablet:w-xl w-md",
          onSubmit: (e) => {
            e.preventDefault();
            handleSearch();
          },
          children: [
            /* @__PURE__ */ jsxs("label", { className: "mt-3 flex items-center gap-2 text-sm", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "checkbox",
                  checked: isSummaryMode,
                  onChange: () => setIsSummaryMode(!isSummaryMode)
                }
              ),
              "AI Summary mode",
              /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsxs(Tooltip, { children: [
                /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Info, { className: "text-tertiary size-4" }) }),
                /* @__PURE__ */ jsx(TooltipContent, { className: "bg-surface-container-highest text-primary w-md", children: /* @__PURE__ */ jsx("p", { children: "Use AI to generate a summary of Codys job fit for your company based on the content he has created. Limit 15 summary requests per month." }) })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx(
                Input,
                {
                  "aria-label": isSummaryMode ? "Ask a question" : "Search projects, articles, or videos",
                  placeholder: isSummaryMode ? "Ask about fit for job description..." : "Search projects, articles, or videos...",
                  className: "bg-surface-container h-12 truncate pr-20 pl-12",
                  onChange: (e) => setQuery(e.target.value),
                  value: query,
                  maxLength: isSummaryMode ? 200 : 100
                }
              ),
              /* @__PURE__ */ jsx(Search, { className: "text-tertiary absolute top-1/2 left-3 -translate-y-1/2" }),
              /* @__PURE__ */ jsx(
                Button,
                {
                  disabled: query.length === 0 || (isSummaryMode ? query.length >= 200 : query.length >= 100),
                  type: "button",
                  className: `text-background absolute top-1/2 right-3 -translate-y-1/2 ${query.length === 0 || (isSummaryMode ? query.length >= 200 : query.length >= 100) ? "cursor-not-allowed opacity-50" : ""}`,
                  onClick: (e) => {
                    e.preventDefault();
                    handleSearch();
                  },
                  children: "Search"
                }
              )
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 mt-4 max-h-64 w-lg -translate-x-1/2 divide-y-2 overflow-auto", children: results.map((item) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-surface-container-high rounded border p-3",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "font-bold", children: item.title }),
            /* @__PURE__ */ jsx("p", { children: item.description }),
            /* @__PURE__ */ jsx(
              Button,
              {
                onClick: () => {
                  window.open(item.url, "_blank");
                },
                className: "text-surface mt-1",
                children: "View"
              }
            )
          ]
        },
        item.id
      )) }),
      isSummaryMode && /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 mt-4 w-full max-w-4xl -translate-x-1/2", children: /* @__PURE__ */ jsxs("div", { className: "bg-surface-container-high rounded border p-3", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-bold", children: "Monthly Summary Limit Reached" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "You have reached the monthly limit of ",
          MONTHLY_SUMMARY_LIMIT,
          " AI summaries. Please try again next month."
        ] })
      ] }) }),
      query.length > 199 && isSummaryMode && /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 mt-4 w-full max-w-4xl -translate-x-1/2", children: /* @__PURE__ */ jsxs("div", { className: "bg-surface-container-high rounded border p-3", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-bold", children: "Input Too Long" }),
        /* @__PURE__ */ jsx("p", { children: "Your question exceeds the 200 character limit for summary mode. Please shorten your question and try again." })
      ] }) }),
      query.length > 99 && !isSummaryMode && /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 mt-4 w-full max-w-4xl -translate-x-1/2", children: /* @__PURE__ */ jsxs("div", { className: "bg-surface-container-high rounded border p-3", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-bold", children: "Input Too Long" }),
        /* @__PURE__ */ jsx("p", { children: "Your question exceeds the 100 character limit. Please shorten your question and try again." })
      ] }) }),
      summary && /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 mx-4 mt-4 max-h-64 w-full max-w-4xl -translate-x-1/2 divide-y-2 overflow-auto", children: /* @__PURE__ */ jsxs("div", { className: "bg-surface-container-high rounded border p-3", children: [
        /* @__PURE__ */ jsx("h2", { className: "font-bold", children: "AI Summary" }),
        /* @__PURE__ */ jsx("p", { children: summary })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center justify-center gap-3", children: [
        /* @__PURE__ */ jsxs(ScrollButton, { variant: "outline", className: "text-primary", id: "contact", children: [
          /* @__PURE__ */ jsx(SendHorizontal$1, { className: "mr-2 size-4" }),
          "Contact Me"
        ] }),
        /* @__PURE__ */ jsxs(
          ScrollButton,
          {
            variant: "outline",
            className: "text-primary",
            id: "projects",
            children: [
              /* @__PURE__ */ jsx(Rocket, { className: "mr-2 size-4" }),
              "Featured Projects"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          ScrollButton,
          {
            variant: "outline",
            className: "text-primary",
            id: "knowledge-base",
            children: [
              /* @__PURE__ */ jsx(Newspaper$1, { className: "mr-2 size-4" }),
              "Latest Articles"
            ]
          }
        )
      ] })
    ] })
  ] });
};

const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};

const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};

const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Icon;
  const {
    color = "currentColor",
    size = 24,
    "stroke-width": strokeWidth = 2,
    absoluteStrokeWidth = false,
    iconNode = [],
    class: className,
    ...rest
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes({
    ...defaultAttributes,
    width: size,
    height: size,
    stroke: color,
    "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
    ...!hasA11yProp(rest) && { "aria-hidden": "true" },
    ...rest
  })}${addAttribute(["lucide", className], "class:list")}> ${iconNode.map(([Tag, attrs]) => renderTemplate`${renderComponent($$result, "Tag", Tag, { ...attrs })}`)} ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "/home/runner/work/astro-portfolio/astro-portfolio/node_modules/@lucide/astro/src/Icon.astro", void 0);

const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();

const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

const createLucideIcon = (iconName, iconNode) => {
  const Component = createComponent(
    ($$result, $$props, $$slots) => {
      const { class: className, ...restProps } = $$props;
      return renderTemplate`${renderComponent(
        $$result,
        "Icon",
        $$Icon,
        {
          class: mergeClasses(
            Boolean(iconName) && `lucide-${toKebabCase(iconName)}`,
            Boolean(className) && className
          ),
          iconNode,
          ...restProps
        },
        { default: () => renderTemplate`${renderSlot($$result, $$slots["default"])}` }
      )}`;
    },
    void 0,
    "none"
  );
  return Component;
};

const ArrowUpRight = createLucideIcon("arrow-up-right", [["path", { "d": "M7 7h10v10" }], ["path", { "d": "M7 17 17 7" }]]);

const CirclePlay = createLucideIcon("circle-play", [["path", { "d": "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z" }], ["circle", { "cx": "12", "cy": "12", "r": "10" }]]);

const ExternalLink = createLucideIcon("external-link", [["path", { "d": "M15 3h6v6" }], ["path", { "d": "M10 14 21 3" }], ["path", { "d": "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }]]);

const MoveRight = createLucideIcon("move-right", [["path", { "d": "M18 8L22 12L18 16" }], ["path", { "d": "M2 12H22" }]]);

const Newspaper = createLucideIcon("newspaper", [["path", { "d": "M15 18h-5" }], ["path", { "d": "M18 14h-8" }], ["path", { "d": "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2" }], ["rect", { "width": "8", "height": "4", "x": "10", "y": "6", "rx": "1" }]]);

const SendHorizontal = createLucideIcon("send-horizontal", [["path", { "d": "M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z" }], ["path", { "d": "M6 12h16" }]]);

const $$SelectedWorks = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Project Section (High Impact Project Cards) -->${maybeRenderHead()}<section id="projects" class="space-y-stack-lg mt-16"> <div class="gap-stack-sm border-outline-variant/20 pb-stack-sm flex flex-col justify-between border-b md:flex-row md:items-end"> <h2 class="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">
Selected Works
</h2> <p class="font-label-mono text-label-mono text-tertiary tracking-widest uppercase">
A Collection of Digital Architectures
</p> </div> <!-- Single Column Scroll of Impact Cards --> <div class="space-y-stack-lg"> <!-- Project 1 --> <div class="group glass-panel relative overflow-hidden rounded-xl"> <div class="flex h-full flex-col lg:flex-row"> <div class="h-64 w-full overflow-hidden lg:h-[500px] lg:w-2/3"> <img class="h-full w-full scale-100 object-cover grayscale transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:grayscale-0" data-alt="A detailed wide shot of a complex software development dashboard interface displayed on a high-resolution screen within a dark, modern studio setting. The UI features intricate data visualizations and code editors glowing in electric blue and crisp white against a deep obsidian background. The atmosphere is sophisticated and highlights a high-tier consultant's technical precision and minimalist aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPbrllafIg1S64ioM7QXfMoGumzre6S1xZeMLD1qWFRBrc2ZCZUSPe7eiapxZBsHdFocjGNI2YLlAYtg7InJCGWN9Tja1NmZYOOAmD0CWMjTnbF0pQ33s54uhU9bfFTOqrKMXLwjR8hONhmNQPZh-K-NOAyqZqnw3rV2XBl5lGEyRJHeB4pg5QBSSmTFabZ0i27fAC2YQh6WtgGEx2_BP2K74yE3FEjn7mlaiHK_VJCnnJLmTqEy6O57eJbnLVEenXbA0MOwqHgA"> </div> <div class="p-stack-lg flex w-full flex-col justify-between lg:w-1/3"> <div> <span class="font-label-mono text-label-mono text-on-surface-variant mb-2 block">2026 / FULL-STACK SYSTEM</span> <h3 class="font-headline-md text-headline-md text-on-surface mb-stack-sm">
Dragons Nest: SaaS Application
</h3> <p class="text-on-surface-variant mb-stack-md leading-relaxed">
A highly scalable platform for homeschool parents to manage
              curriculum, track progress, and connect with local resources,
              built with a focus on performance and user experience.
</p> <div class="flex flex-wrap gap-2"> <span class="border-tertiary/20 text-tertiary text-label-mono font-label-mono rounded border px-3 py-1">Tanstack-router</span> <span class="border-tertiary/20 text-tertiary text-label-mono font-label-mono rounded border px-3 py-1">MongoDB</span> <span class="border-tertiary/20 text-tertiary text-label-mono font-label-mono rounded border px-3 py-1">Cognito</span> </div> </div> <a class="mt-stack-lg text-on-surface group-hover:text-tertiary flex items-center gap-2 font-bold transition-colors" href="#">
View Demo
<span class="material-symbols-outlined transition-transform group-hover:translate-x-1" data-icon="arrow_forward">${renderComponent($$result, "MoveRight", MoveRight, {})}</span> </a> </div> </div> </div> <!-- Project 2 --> <div class="group glass-panel relative overflow-hidden rounded-xl"> <div class="flex h-full flex-col lg:flex-row-reverse"> <div class="h-64 w-full overflow-hidden lg:h-[500px] lg:w-2/3"> <img class="h-full w-full scale-100 object-cover grayscale transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:grayscale-0" data-alt="A clean and artistic top-down view of a network server rack illuminated by subtle electric blue LED strips in a darkened room. The lighting emphasizes the orderly cables and sleek metallic hardware, symbolizing robust back-end engineering and clean code. The scene captures a professional and authoritative technological environment with high contrast between deep shadows and bright accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTWItAky1rZGLgrAJJ1CTIfg1wQRLCj9wXE2HW-_l1yAWw4W4Hyog2vT0ymaJaditrAQqhX8zbiIhN0USl9uc7JJficgyxvHlvtT1AGbmc41QITIjHFEUyROp3dfM2bCjuRIgodrIFHnziQ54RD4HSG6JjG-vQH2ZuvMA8_uG7dNUaGQNDexyY604Xx6O32MGr2WZG4R8jORuy32awufUVICo4lQRFGDwi9zwnc04hWVfTY6U4l8Xy6Sw0e_DFuvXHF2tmIiDppg"> </div> <div class="p-stack-lg flex w-full flex-col justify-between lg:w-1/3"> <div> <span class="font-label-mono text-label-mono text-on-surface-variant mb-2 block">2026 / AI SYSTEM</span> <h3 class="font-headline-md text-headline-md text-on-surface mb-stack-sm">
Artificial Intelligence Example
</h3> <p class="text-on-surface-variant mb-stack-md leading-relaxed">
AWS Bedrock-based AI system for generating personalized learning
              plans for homeschool students, utilizing machine learning to adapt
              to individual learning styles and progress.
</p> <div class="flex flex-wrap gap-2"> <span class="border-tertiary/20 text-tertiary text-label-mono font-label-mono rounded border px-3 py-1">AWS Bedrock</span> <span class="border-tertiary/20 text-tertiary text-label-mono font-label-mono rounded border px-3 py-1">S3</span> <span class="border-tertiary/20 text-tertiary text-label-mono font-label-mono rounded border px-3 py-1">Cloudfront</span> </div> </div> <a class="mt-stack-lg text-on-surface group-hover:text-tertiary flex items-center gap-2 font-bold transition-colors" href="#">
View Demo
<span class="material-symbols-outlined transition-transform group-hover:translate-x-1" data-icon="arrow_forward">${renderComponent($$result, "MoveRight", MoveRight, {})}</span> </a> </div> </div> </div> </div> </section>`;
}, "/home/runner/work/astro-portfolio/astro-portfolio/src/components/selected-works.astro", void 0);

const $$KnowledgeBase = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="knowledge-base" class="text-primary mt-16"> <div class="gap-stack-sm border-outline-variant/20 pb-stack-sm flex flex-col justify-between border-b md:flex-row md:items-end"> <h2 class="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">
Knowledge base
</h2> <p class="font-label-mono text-label-mono text-tertiary tracking-widest uppercase">
Engineering Insights &amp; Resources
</p> </div> <!-- Technical Resources Section (Bento Grid) --> <div class="space-y-stack-lg"> <div class="gap-stack-sm grid min-h-150 grid-cols-1 md:grid-cols-4 md:grid-rows-2"> <!-- Resource 1 (Large) --> <div class="bg-surface-container-high glass-panel p-stack-md hover:border-tertiary/40 group flex flex-col justify-between rounded-xl transition-all md:col-span-2 md:row-span-2"> <div class="space-y-stack-sm"> <div class="flex items-start justify-between"> <span class="text-label-mono font-label-mono bg-tertiary/10 text-tertiary rounded px-2 py-1">GUIDE</span> </div> <h3 class="font-headline-md text-headline-md text-on-surface">
NodeJS Cybersecurity Best Practices
</h3> <p class="text-on-surface-variant text-body-md leading-relaxed">
A comprehensive guide covering essential security practices for
            Node.js applications, including secure coding techniques,
            vulnerability management, and best practices for authentication and
            data protection.
</p> </div> <div class="flex items-center justify-between"> <span class="text-label-mono font-label-mono text-on-surface-variant">Read time: 6 min</span> <a href="https://medium.com/@codylillyw/nodejs-cybersecurity-2022-best-practices-summarized-46580a303b2a" class="material-symbols-outlined group-hover:text-tertiary" data-icon="open_in_new">${renderComponent($$result, "ExternalLink", ExternalLink, {})}</a> </div> </div> <!-- Resource 2 (Medium) --> <div class="glass-panel bg-surface-container-high p-stack-md gap-stack-md hover:border-tertiary/40 group flex items-center rounded-xl transition-all md:col-span-2 md:row-span-1"> <div class="flex-1 space-y-2"> <span class="text-label-mono font-label-mono text-on-surface-variant">VIDEO TUTORIAL</span> <h3 class="font-headline-md text-headline-md text-on-surface text-lg">
Intro to React Formik
</h3> </div> <a href="https://youtu.be/k9Rod1Kk6H8" class="bg-surface-container-highest flex h-24 w-24 items-center justify-center rounded-lg"> <span class="material-symbols-outlined text-tertiary text-3xl" data-icon="play_circle">${renderComponent($$result, "CirclePlay", CirclePlay, {})}</span> </a> </div> <!-- Resource 3 (Small) --> <div class="glass-panel bg-surface-container-high p-stack-md hover:border-tertiary/40 group flex flex-col justify-between rounded-xl transition-all md:col-span-1 md:row-span-1"> <span class="material-symbols-outlined text-tertiary" data-icon="book">${renderComponent($$result, "Newspaper", Newspaper, {})}</span> <h3 class="font-headline-md text-on-surface text-base">
Good UX Design Principles
</h3> <div class="flex items-center justify-between"> <span class="text-label-mono font-label-mono text-on-surface-variant">Read time: 2 min</span> <a href="https://medium.com/@codylillyw/what-makes-good-ux-design-8af5b174d4d2" class="material-symbols-outlined group-hover:text-tertiary" data-icon="open_in_new">${renderComponent($$result, "ExternalLink", ExternalLink, {})}</a> </div> </div> <!-- Resource 4 (Small) --> <div class="glass-panel bg-surface-container-high p-stack-md hover:border-tertiary/40 group flex flex-col justify-between rounded-xl transition-all md:col-span-1 md:row-span-1"> <span class="material-symbols-outlined text-tertiary" data-icon="code_blocks">${renderComponent($$result, "Newspaper", Newspaper, {})}</span> <h3 class="font-headline-md text-on-surface text-base">
React Hooks Summarized
</h3> <div class="flex items-center justify-between"> <span class="text-label-mono font-label-mono text-on-surface-variant">Read time: 5 min</span> <a href="https://medium.com/@codylillyw/react-hooks-summarized-423cd799e653" class="material-symbols-outlined group-hover:text-tertiary" data-icon="open_in_new">${renderComponent($$result, "ExternalLink", ExternalLink, {})}</a> </div> </div> </div> </div> </section>`;
}, "/home/runner/work/astro-portfolio/astro-portfolio/src/components/knowledge-base.astro", void 0);

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="space-y-stack-lg relative mt-16"> <div class="bg-surface-container-lowest pointer-events-none absolute inset-0 opacity-20"> <div class="h-full w-full"></div> </div> <div class="relative z-10"> <div class="gap-stack-sm border-outline-variant/20 pb-stack-sm flex flex-col justify-between border-b md:flex-row md:items-end"> <h2 class="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">
Experience
</h2> <p class="font-label-mono text-label-mono text-tertiary tracking-widest uppercase">
Professional Trajectory &amp; Technical Growth
</p> </div> <div class="mt-stack-lg space-y-16"> <!-- Entry 1 --> <div class="flex flex-col gap-8 md:flex-row md:gap-16"> <div class="pt-1 md:w-1/4"> <span class="font-label-mono text-label-mono text-on-surface-variant/60">Sept 2022 – Mar 2026
</span> </div> <div class="space-y-4 md:w-3/4"> <div> <h3 class="font-headline-md text-headline-md text-on-surface group flex cursor-pointer items-center gap-2">
Full-Stack Developer · HireMySub
<a href="https://hiremysub.com" class="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" data-icon="north_east">${renderComponent($$result, "ArrowUpRight", ArrowUpRight, {})}</a> </h3> </div> <p class="text-on-surface-variant text-body-md leading-relaxed">
Ensured 100% automated coverage of critical user flows, replacing
            manual QA and enabling the team to ship features with high
            confidence in application stability. Eliminated the overhead of
            maintaining a separate documentation repository by automating API
            specs, ensuring the frontend team always had real-time access to
            backend contracts. Worked closely with leadership to ship systems
            and resolve bugs across fintech, communications, QA Implemented
            accessibility standards (a11y) in a React application, ensuring
            compliance with WCAG guidelines, which improved user experience and
            accessibility for all users. Assisted in creating E2E stripe signup
            system and created live Sendgrid/Twilio messaging system.
</p> <div class="flex flex-wrap gap-2"> <span class="bg-tertiary/10 text-tertiary text-label-mono font-label-mono rounded-full px-3 py-1 text-xs">JavaScript</span> <span class="bg-tertiary/10 text-tertiary text-label-mono font-label-mono rounded-full px-3 py-1 text-xs">TypeScript</span> <span class="bg-tertiary/10 text-tertiary text-label-mono font-label-mono rounded-full px-3 py-1 text-xs">React</span> <span class="bg-tertiary/10 text-tertiary text-label-mono font-label-mono rounded-full px-3 py-1 text-xs">Cypress</span> <span class="bg-tertiary/10 text-tertiary text-label-mono font-label-mono rounded-full px-3 py-1 text-xs">MongoDB</span> <span class="bg-tertiary/10 text-tertiary text-label-mono font-label-mono rounded-full px-3 py-1 text-xs">ExpressJS</span> <span class="bg-tertiary/10 text-tertiary text-label-mono font-label-mono rounded-full px-3 py-1 text-xs">Twilio</span> <span class="bg-tertiary/10 text-tertiary text-label-mono font-label-mono rounded-full px-3 py-1 text-xs">Stripe</span> </div> </div> </div> <!-- Entry 2 --> <div class="flex flex-col gap-8 md:flex-row md:gap-16"> <div class="pt-1 md:w-1/4"> <span class="font-label-mono text-label-mono text-on-surface-variant/60">Sept 2024 – Mar 2025
</span> </div> <div class="space-y-4 md:w-3/4"> <div class="space-y-1"> <h3 class="font-headline-md text-headline-md text-on-surface group flex cursor-pointer items-center gap-2">
Full-Stack Developer · Quikix
</h3> </div> <p class="text-on-surface-variant text-body-md leading-relaxed">
Co-authored a greenfield mobile application from concept to launch,
            architecting the core authentication flow, nested drawer navigation,
            and user-centric features using Expo Router. Accelerated
            time-to-market by delivering a production-ready MVP from concept to
            App Store submission within a 7-month part-time contract.
            Orchestrated a full-stack engagement engine, including a nested
            commenting system and voting logic, ensuring data consistency.
</p> <div class="flex flex-wrap gap-2"> <span class="bg-tertiary/10 text-tertiary text-label-mono font-label-mono rounded-full px-3 py-1 text-xs">JavaScript</span> <span class="bg-tertiary/10 text-tertiary text-label-mono font-label-mono rounded-full px-3 py-1 text-xs">TypeScript</span> <span class="bg-tertiary/10 text-tertiary text-label-mono font-label-mono rounded-full px-3 py-1 text-xs">React</span> <span class="bg-tertiary/10 text-tertiary text-label-mono font-label-mono rounded-full px-3 py-1 text-xs">React Native</span> <span class="bg-tertiary/10 text-tertiary text-label-mono font-label-mono rounded-full px-3 py-1 text-xs">Node.js</span> <span class="bg-tertiary/10 text-tertiary text-label-mono font-label-mono rounded-full px-3 py-1 text-xs">MongoDB</span> </div> </div> </div> </div> </div> </section>`;
}, "/home/runner/work/astro-portfolio/astro-portfolio/src/components/experience.astro", void 0);

const $$Linkedin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Linkedin;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(className, "class")} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>linkedin</title> <path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"></path> </g></svg>`;
}, "/home/runner/work/astro-portfolio/astro-portfolio/src/components/svg/linkedin.astro", void 0);

const $$Github = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Github;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(className, "class")} viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github [#142]</title> <desc>Created with Sketch.</desc> <defs></defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#fff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"></path> </g> </g> </g> </g></svg>`;
}, "/home/runner/work/astro-portfolio/astro-portfolio/src/components/svg/github.astro", void 0);

const $$Youtube = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Youtube;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 -3 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#fff"${addAttribute(className, "class")}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>youtube [#168]</title> <desc>Created with Sketch.</desc> <defs></defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7442.000000)" fill="#fff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289" id="youtube-[#168]"></path> </g> </g> </g> </g></svg>`;
}, "/home/runner/work/astro-portfolio/astro-portfolio/src/components/svg/youtube.astro", void 0);

const $$Medium = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Medium;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg fill="#fff"${addAttribute(className, "class")} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m24 24h-24v-24h24zm-8.986-15.006v7.326c0 .198 0 .234-.127.362l-1.302 1.264v.27h6.32v-.27l-1.257-1.234c-.091-.07-.148-.178-.148-.3 0-.022.002-.043.005-.064v.002-9.07c-.003-.019-.005-.04-.005-.062 0-.121.058-.229.148-.298l.001-.001 1.286-1.234v-.27h-4.456l-3.176 7.924-3.609-7.924h-4.675v.271l1.502 1.813c.127.115.207.281.207.466 0 .022-.001.043-.003.064v-.003 7.126c.007.041.011.088.011.136 0 .222-.088.423-.231.571l-1.69 2.054v.27h4.8v-.27l-1.691-2.054c-.149-.154-.241-.363-.241-.595 0-.04.003-.079.008-.117v.004-6.16l4.215 9.195h.49z"></path></g></svg>`;
}, "/home/runner/work/astro-portfolio/astro-portfolio/src/components/svg/medium.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-surface-container-lowest text-primary mt-20 pt-8 pb-12"> <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row"> <div> <p class="font-semibold">Cody Lillywhite | Full Stack Developer</p> <p class="text-muted-foreground text-sm">
© 2026 Cody. All rights reserved.
</p> </div> <nav class="tablet:flex-row flex flex-col items-center gap-4"> ${renderComponent($$result, "ScrollButton", ScrollButton, { "client:idle": true, "id": "about", "variant": "link", "client:component-hydration": "idle", "client:component-path": "/home/runner/work/astro-portfolio/astro-portfolio/src/components/scroll-button", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` About` })} ${renderComponent($$result, "ScrollButton", ScrollButton, { "client:idle": true, "id": "projects", "variant": "link", "client:component-hydration": "idle", "client:component-path": "/home/runner/work/astro-portfolio/astro-portfolio/src/components/scroll-button", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`
Projects` })} ${renderComponent($$result, "ScrollButton", ScrollButton, { "client:idle": true, "id": "contact", "variant": "link", "client:component-hydration": "idle", "client:component-path": "/home/runner/work/astro-portfolio/astro-portfolio/src/components/scroll-button", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`Contact` })} ${renderComponent($$result, "ScrollButton", ScrollButton, { "client:idle": true, "id": "knowledge-base", "variant": "link", "client:component-hydration": "idle", "client:component-path": "/home/runner/work/astro-portfolio/astro-portfolio/src/components/scroll-button", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`Knowledge Base` })} </nav> <nav class="flex items-center gap-4"> <a href="https://github.com/Codyl">${renderComponent($$result, "Github", $$Github, { "className": "text-primary size-5" })}</a> <a href="https://www.linkedin.com/in/cody-lillywhite/">${renderComponent($$result, "Linkedin", $$Linkedin, { "className": "text-primary size-5" })}</a> <a href="https://youtube.com/@codylillywhite4245">${renderComponent($$result, "Youtube", $$Youtube, { "className": "text-primary size-5" })}</a> <a href="https://medium.com/@codylillyw">${renderComponent($$result, "Medium", $$Medium, { "className": "text-primary size-5" })}</a> </nav> </div> </footer>`;
}, "/home/runner/work/astro-portfolio/astro-portfolio/src/components/footer.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contact" class="mt-16"> <h2 class="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-stack-md mt-16">
Contact
</h2> <div class="lg:col-span-7"> <form class="space-y-6" method="POST" action="https://formspree.io/f/xoqpbeaw"> <div class="grid grid-cols-1 gap-6 md:grid-cols-2"> <div class="space-y-2"> <label class="font-label-mono text-label-mono text-on-surface-variant block tracking-wider uppercase">Name</label> <input class="bg-surface-container-low border-outline-variant/30 text-on-surface focus:border-tertiary focus:ring-tertiary w-full rounded-lg border p-4 transition-all outline-none focus:ring-1" placeholder="John Doe" type="text"> </div> <div class="space-y-2"> <label class="font-label-mono text-label-mono text-on-surface-variant block tracking-wider uppercase">Email</label> <input class="bg-surface-container-low border-outline-variant/30 text-on-surface focus:border-tertiary focus:ring-tertiary w-full rounded-lg border p-4 transition-all outline-none focus:ring-1" placeholder="john@example.com" type="email"> </div> </div> <div class="space-y-2"> <label class="font-label-mono text-label-mono text-on-surface-variant block tracking-wider uppercase">Message</label> <textarea class="bg-surface-container-low border-outline-variant/30 text-on-surface focus:border-tertiary focus:ring-tertiary w-full resize-none rounded-lg border p-4 transition-all outline-none focus:ring-1" placeholder="Tell me about your project..." rows="5"></textarea> </div> <button class="bg-tertiary text-primary-container flex items-center gap-2 rounded-lg px-8 py-4 font-bold transition-all hover:brightness-110" type="submit">
Send Message
${renderComponent($$result, "SendHorizontal", SendHorizontal, { "class": "size-4" })} </button> </form> </div> </section>`;
}, "/home/runner/work/astro-portfolio/astro-portfolio/src/components/contact.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h2 id="about" class="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-stack-md mt-16">
About Me
</h2> <section class="glass-panel p-stack-lg border-l-tertiary rounded-xl border-l-4"> <div class="gap-stack-lg flex flex-col md:flex-row"> <div class="space-y-stack-sm flex-1"> <p class="text-on-surface-variant leading-relaxed">
Full-stack software engineer with 4 years of experience delivering
        end-to-end features in high-velocity startup environments. Specialized
        in architecting scalable React/Expo interfaces and Nest.js/Node APIs
        with a focus on system reliability through automated E2E testing and
        TypeScript migrations.
</p> <!-- <div class="flex flex-wrap gap-4 pt-4">
        <div class="flex flex-col">
          <span class="text-tertiary font-label-mono text-xl font-bold"
            >99.9%</span
          >
          <span
            class="text-on-surface-variant text-xs tracking-tighter uppercase"
            >System Uptime</span
          >
        </div>
        <div class="border-outline-variant/30 flex flex-col border-l pl-4">
          <span class="text-tertiary font-label-mono text-xl font-bold"
            >15ms</span
          >
          <span
            class="text-on-surface-variant text-xs tracking-tighter uppercase"
            >Avg Response</span
          >
        </div>
        <div class="border-outline-variant/30 flex flex-col border-l pl-4">
          <span class="text-tertiary font-label-mono text-xl font-bold"
            >10k+</span
          >
          <span
            class="text-on-surface-variant text-xs tracking-tighter uppercase"
            >Code Commits</span
          >
        </div>
      </div>
    </div>
    <div
      class="bg-surface-container-lowest p-stack-sm font-code text-code border-outline-variant/20 group relative flex-1 rounded-lg border"
    >
      <div class="mb-4 flex gap-1.5">
        <div class="bg-error/40 h-3 w-3 rounded-full"></div>
        <div class="bg-secondary/40 h-3 w-3 rounded-full"></div>
        <div class="bg-tertiary/40 h-3 w-3 rounded-full"></div>
      </div>

      <span class="text-outline"
        >/* Building for the future, one memory-safe block at a time */</span
      >
    </div>
  </div>
  <button
    class="hover:text-tertiary absolute top-4 right-4 p-2 opacity-0 transition-opacity group-hover:opacity-100"
  >
    <span class="material-symbols-outlined text-[20px]" data-icon="content_copy"
      >content_copy</span
    >
  </button> --> </div> </div> </section>`;
}, "/home/runner/work/astro-portfolio/astro-portfolio/src/components/about.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Cody Lillywhite | Portfolio</title>${renderHead()}</head> ${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` <body class="bg-background"> ${renderComponent($$result2, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/runner/work/astro-portfolio/astro-portfolio/src/components/navbar.tsx", "client:component-export": "default" })} <main> ${renderComponent($$result2, "Hero", Hero, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/runner/work/astro-portfolio/astro-portfolio/src/components/hero.tsx", "client:component-export": "default" })} <div class="mx-24"> ${renderComponent($$result2, "Experience", $$Experience, {})} ${renderComponent($$result2, "SelectedWorks", $$SelectedWorks, {})} ${renderComponent($$result2, "KnowledgeBase", $$KnowledgeBase, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} ${renderComponent($$result2, "About", $$About, {})} </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} </body> ` })} </html>`;
}, "/home/runner/work/astro-portfolio/astro-portfolio/src/pages/index.astro", void 0);

const $$file = "/home/runner/work/astro-portfolio/astro-portfolio/src/pages/index.astro";
const $$url = "/astro-portfolio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
