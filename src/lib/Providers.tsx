import React, { ReactNode } from "react";
import { Toaster } from "sonner";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <div>
      <Toaster position="top-center" />
      {children}
    </div>
  );
}
