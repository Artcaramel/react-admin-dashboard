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
  Grid3x3
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
      { label: "대시보드", path: "/common/dashboard", icon: Home },
      { label: "공지사항", path: "/common/notice", icon: Bell },
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
      { label: "Select", path: "/select", icon: ChevronsLeftRightEllipsis },
      { label: "DataGrid", path: "/datagrid", icon: Grid3x3 },
    ],
  },
];

export interface RouteMeta {
  label: string;
  parent?: string;
}

export const routeMetaMap: Record<string, RouteMeta> = {
  /* ================= 공통 ================= */
  "/common/dashboard": {
    label: "대시보드",
  },

  "/common/notice": {
    label: "공지사항",
  },
  "/common/notice/new": {
    label: "공지사항 등록",
    parent: "/common/notice",
  },
  "/common/notice/edit": {
    label: "공지사항 수정",
    parent: "/common/notice",
  },

  /* ================= 시스템 관리 ================= */
  "/system/menu": {
    label: "메뉴 관리",
  },
  "/system/menu/new": {
    label: "메뉴 등록",
    parent: "/system/menu",
  },
  "/system/menu/edit": {
    label: "메뉴 수정",
    parent: "/system/menu",
  },

  "/system/user": {
    label: "사용자 관리",
  },
  "/system/user/new": {
    label: "사용자 등록",
    parent: "/system/user",
  },
  "/system/user/edit": {
    label: "사용자 수정",
    parent: "/system/user",
  },

  /* ================= 컴포넌트 ================= */
  "/button": { label: "Button" },
  "/input": { label: "Input" },
  "/table": { label: "Table" },
  "/alert": { label: "Alert" },
  "/select": { label: "Select" },
  "/datagrid": { label: "DataGrid" },

};

export function getMenuLabelByPath(pathname: string) {
  const crumbs: RouteMeta[] = [];

  let current: any = routeMetaMap[pathname];

  while (current) {
    crumbs.unshift(current);
    current = current.parent ? routeMetaMap[current.parent] : undefined;
  }

  return crumbs;
}
