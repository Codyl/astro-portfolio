import React from "react";
import { Button } from "./ui/button";

const ScrollButton = ({
  id,
  children,
  variant = "default",
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  variant?: "link" | "default" | "outline";
  className?: string;
}) => {
  return (
    <Button
      variant={variant}
      className={className}
      onClick={() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }}
    >
      {children}
    </Button>
  );
};

export default ScrollButton;
