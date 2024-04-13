"use client";

import { ReactNode } from "react";
import {C30WriteVersion} from "@tt/commands";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={() => {
        let res = C30WriteVersion()

        alert(`Hello from your ${res}  cccapp!`)
      }}
    >
      {children}
    </button>
  );
};
