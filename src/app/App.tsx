import { GlobalAlert } from "@/components/ui/common/Alert/GlobalAlert";
import { AppRoutes } from "./router/routes";

export function App() {
  return (
    <>
      <GlobalAlert />
      <AppRoutes />;
    </>
  );
}
