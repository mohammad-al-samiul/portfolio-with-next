import Navbar from "@/components/navbar";
import Container from "@/components/ui/ui/Container";

import React, { ReactNode } from "react";

export default function CommonLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Container>
        <Navbar />
        {children}
      </Container>
    </div>
  );
}
