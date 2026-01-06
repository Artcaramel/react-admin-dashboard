import type { Notice } from "@/pages/common/notice/types/notice";

const STORAGE_KEY = "notices";

export function getNotices(): Notice[] {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];

  try {
    const notices: Notice[] = JSON.parse(raw);

    return notices.sort((a, b) => a.id - b.id);
  } catch {
    return [];
  }
}

export function saveNotices(notices: Notice[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notices));
}

export function addNotice(notice: Omit<Notice, "id" | "date" | "views">) {
  const notices = getNotices();

  const nextId =
    notices.length > 0 ? Math.max(...notices.map((n) => n.id)) + 1 : 1;

  const newNotice: Notice = {
    ...notice,
    id: nextId,
    date: new Date().toISOString().slice(0, 10),
    views: 0,
  };

  const updatedNotices = [newNotice, ...notices];
  localStorage.setItem("notices", JSON.stringify(updatedNotices));

  return newNotice;
}

export function getNoticeById(id: number): Notice | undefined {
  return getNotices().find((n) => n.id === id);
}

export function updateNotice(
  id: number,
  form: Omit<Notice, "id" | "date" | "views">
) {
  const notices = getNotices();

  const next = notices.map((n) => (n.id === id ? { ...n, ...form } : n));

  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
}

export function deleteNotice(id: number) {
  const next = getNotices().filter((n) => n.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
}
