import React from "react";

export function layout({ children }: { children: React.ReactNode }) {
  return <main className="auth">{children}</main>;
}
