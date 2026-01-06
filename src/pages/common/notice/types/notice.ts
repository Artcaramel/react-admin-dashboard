export type Notice = {
  id: number;
  title: string;
  content: string;
  writer: string;
  date: string;
  views: number;
};

export type NoticeForm = {
  title: string;
  content: string;
  writer: string;
};

export type FormError = {
  title?: string;
  writer?: string;
};
