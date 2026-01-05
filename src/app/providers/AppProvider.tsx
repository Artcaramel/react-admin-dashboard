import type { ReactNode } from "react";
import { RouterProvider } from "./RouterProvider";

type Props = {
  children: ReactNode;
};

export function AppProvider({ children }: Props) {
  return (
    <>
      {/* 여기부터 전역 Provider */}
      <RouterProvider>{children}</RouterProvider>
      {/*  */}
    </>
  );
}
