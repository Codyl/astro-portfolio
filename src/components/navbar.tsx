import React from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuList,
  NavigationContentItem,
} from "./ui/navigation-menu";

export default function Navbar() {
  return (
    <nav className="bg-surface border-border-default border-b">
      <div className="mx-auto flex items-center justify-between gap-x-8 px-4 py-2">
        <NavigationMenu className="tablet:hidden">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-primary">
                <Menu className="size-5" />
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-surface-container-high flex flex-col space-y-2 p-4">
                <ul className="w-max">
                  <NavigationContentItem elementId="about">
                    About
                  </NavigationContentItem>
                  <NavigationContentItem elementId="projects">
                    Projects
                  </NavigationContentItem>
                  <NavigationContentItem elementId="contact">
                    Contact
                  </NavigationContentItem>
                  <NavigationContentItem elementId="knowledge-base">
                    Knowledge Base
                  </NavigationContentItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <a href="/" className="text-primary text-lg font-bold">
          Cody Lillywhite
        </a>
        <ul className="tablet:flex hidden gap-4">
          <Button
            variant="link"
            onClick={() => {
              document.getElementById("about")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            About
          </Button>
          <Button
            variant="link"
            onClick={() => {
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            Projects
          </Button>
          <Button
            variant="link"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            Contact
          </Button>
          <Button
            variant="link"
            onClick={() => {
              document.getElementById("knowledge-base")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            Knowledge Base
          </Button>
        </ul>
        <Button
          className="text-background"
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/cody-lillywhite.2026.edited.pdf";
            link.download = "cody-lillywhite.2026.edited.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        >
          Download Resume
        </Button>
      </div>
    </nav>
  );
}
