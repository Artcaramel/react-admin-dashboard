import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

// 일단 현 상태는 무조건 로그인 페이지로 보내는 상태
// isAuthenticated 를 이용해서 이게 true 가 되면 이제 / 로 보내는 형식으로 작업 예정
export function AuthGuard({ children }: Props) {
  const isAuthenticated = false; // TODO: 나중에 auth store 연결

  if (isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
