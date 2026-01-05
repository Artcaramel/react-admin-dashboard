import { BrowserRouter } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export function RouterProvider({ children }: Props) {
  return <BrowserRouter>{children}</BrowserRouter>;
}
