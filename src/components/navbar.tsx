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
              <NavigationMenuContent className="bg-elevated flex flex-col space-y-2 p-4">
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
        <a href="/" className="text-primary text-lg font-bold">
          Cody Lillywhite
        </a>
        <ul className="tablet:flex hidden gap-4">
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
