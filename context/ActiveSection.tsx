"use client";
import React, { useState, useEffect, createContext, useContext } from "react";

import { links } from "@/lib/data";
type SectionName = (typeof links)[number]["name"];
type ActiveSectionContextProviderProps = { children: React.ReactNode };
type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
};
export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);
export default function ActiveSection({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      "UseActiveSectionContext must be used within a ActiveSectionContextProvider"
    );
  }
  return context;
}
