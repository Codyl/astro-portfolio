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
    <nav className="bg-surface border-b border-border-default">
      <div className="mx-auto px-4 py-2 flex gap-x-8 items-center justify-between">
        <NavigationMenu className="tablet:hidden">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-primary">
                <Menu className="size-5" />
              </NavigationMenuTrigger>
              <NavigationMenuContent className="flex flex-col space-y-2 p-4 bg-elevated">
                <ul className="w-max">
                  <NavigationContentItem to="/">Home</NavigationContentItem>
                  <NavigationContentItem to="/projects">
                    Projects
                  </NavigationContentItem>
                  <NavigationContentItem to="/knowledge-base">
                    Knowledge Base
                  </NavigationContentItem>
                  <NavigationContentItem to="/about">
                    About
                  </NavigationContentItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <a href="/" className="text-lg font-bold text-primary">
          My Portfolio
        </a>
        <ul className="tablet:flex gap-4 hidden">
          <NavigationContentItem to="/about">About</NavigationContentItem>
          <NavigationContentItem to="/projects">Projects</NavigationContentItem>
          <NavigationContentItem to="/knowledge-base">
            Knowledge Base
          </NavigationContentItem>
          <NavigationContentItem to="/contact">Contact</NavigationContentItem>
        </ul>
        <Button onClick={() => window.open("/resume.pdf", "_blank")}>
          Download Resume
        </Button>
      </div>
    </nav>
  );
}
