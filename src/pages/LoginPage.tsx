import { Button } from "@/components/ui/button";

export function LoginPage() {
  return (
    <div className="p-5">
      <h3>Login Page</h3>
      <p>여기는 로그인 페이지입니다.</p>

      <Button
        onClick={() => {
          alert("로그인 처리");
        }}
      >
        Login
      </Button>
    </div>
  );
}
