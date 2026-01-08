import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "@/pages/LoginPage";
import { HomePage } from "@/pages/HomePage";
import { ButtonView } from "@/documents/elements/ButtonView";
import { TableView } from "@/documents/elements/TableView";
import { AlertView } from "@/documents/elements/AlertView";
import { InputView } from "@/documents/elements/InputView";
import { SelectView } from "@/documents/elements/SelectView";
import { DataGridView } from "@/documents/elements/DataGridView";
import { MenuAdminPage } from "@/pages/system/MenuAdminPage";
import { DashBoardPage } from "@/pages/common/DashBoardPage";
import { NoticePage } from "@/pages/common/notice/NoticePage";
import { UserAdminPage } from "@/pages/system/UserAdminPage";
import { AuthGuard } from "./guards";
import MainLayout from "./layout";
import { NoticeCreatePage } from "@/pages/common/notice/NoticeCreatePage";
import { NoticeDetailPage } from "@/pages/common/notice/NoticeDetailPage";

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
        <Route path="/common/dashboard" element={<DashBoardPage />} />
        <Route path="/common/notice">
          <Route index element={<NoticePage />} />
          <Route path="new" element={<NoticeCreatePage />} />
          <Route path=":id" element={<NoticeDetailPage />} />
          <Route path=":id/edit" element={<NoticeCreatePage />} />
        </Route>
        <Route path="/system/menu" element={<MenuAdminPage />} />
        <Route path="/system/user" element={<UserAdminPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/button" element={<ButtonView />} />
        <Route path="/table" element={<TableView />} />
        <Route path="/alert" element={<AlertView />} />
        <Route path="/input" element={<InputView />} />
        <Route path="/select" element={<SelectView />} />
        <Route path="/datagrid" element={<DataGridView />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
