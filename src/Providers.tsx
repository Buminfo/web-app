"use client";
import { ReactNode } from "react";
import AppStore from "@/dataContext";

export function Providers({ children }: { children: ReactNode }) {
  return <AppStore>{children}</AppStore>;
}
