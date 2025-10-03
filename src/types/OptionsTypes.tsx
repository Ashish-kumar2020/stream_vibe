import type { JSX } from "react";

export interface Option {
  title: string;
  icon: JSX.Element;
  default: boolean;
}

export interface YouOptions {
  title: string;
  icon: JSX.Element;
}