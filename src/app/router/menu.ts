import {
  Home,
  CircleArrowUp,
  Table,
  CircleAlert,
  ChevronsLeftRightEllipsis,
  Bell,
  Menu,
  Users,
  Shield,
  Layers,
} from "lucide-react";

// export const menuItems = [
//   { label: "Home", path: "/", icon: Home },
//   // { label: "Login", path: "/login" },
//   { label: "Button", path: "/button", icon: CircleArrowUp },
//   { label: "Table", path: "/table", icon: Table },
//   { label: "Alert", path: "/alert", icon: CircleAlert },
//   { label: "Input", path: "/input", icon: ChevronsLeftRightEllipsis },
// ];

export const menuGroups = [
  {
    label: "공통",
    icon: Home,
    items: [
      { label: "대시보드", path: "/dashboard", icon: Home },
      { label: "공지사항", path: "/notice", icon: Bell },
    ],
  },
  {
    label: "시스템 관리",
    icon: Shield,
    items: [
      { label: "메뉴 관리", path: "/system/menu", icon: Menu },
      { label: "사용자 관리", path: "/system/user", icon: Users },
    ],
  },
  {
    label: "컴포넌트",
    icon: Layers,
    items: [
      { label: "Button", path: "/button", icon: CircleArrowUp },
      { label: "Input", path: "/input", icon: ChevronsLeftRightEllipsis },
      { label: "Table", path: "/table", icon: Table },
      { label: "Alert", path: "/alert", icon: CircleAlert },
    ],
  },
];

export function getMenuLabelByPath(pathname: string) {
  return menuGroups
    .flatMap((group) => group.items)
    .find((item) => item.path === pathname)?.label;
}
