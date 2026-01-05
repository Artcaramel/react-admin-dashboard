import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "@/pages/LoginPage";
import { HomePage } from "@/pages/HomePage";
import { ButtonView } from "@/documents/elements/ButtonView";
import { TableView } from "@/documents/elements/TableView";
import { AlertView } from "@/documents/elements/AlertView";
import { InputView } from "@/documents/elements/InputView";
import { MenuAdminPage } from "@/pages/systemAdmin/MenuAdminPage";
import { AuthGuard } from "./guards";
import MainLayout from "./layout";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route
        element={
          <AuthGuard>
            <MainLayout />
          </AuthGuard>
        }
      >
        <Route path="/system/menu" element={<MenuAdminPage />} />

        <Route path="/" element={<HomePage />} />
        <Route path="/button" element={<ButtonView />} />
        <Route path="/table" element={<TableView />} />
        <Route path="/alert" element={<AlertView />} />
        <Route path="/input" element={<InputView />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
