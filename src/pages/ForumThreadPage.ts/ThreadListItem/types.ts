export type CommentListItem = {
  id: number | string;
  text: string;
  datatime: string | Date;
  userName: string | undefined;
  parentId: number | string | null; // для древовидности
  level?: number;
  comments?: CommentListItem[];
};
export type CommentListData = CommentListItem[];
