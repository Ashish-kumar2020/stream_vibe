import type { JSX } from "react";

export interface Option {
  title: string;
  icon: JSX.Element;
  default: boolean;
}
