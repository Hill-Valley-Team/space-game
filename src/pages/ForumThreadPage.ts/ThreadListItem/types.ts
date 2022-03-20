export type CommentListItem = {
  id: number;
  text: string;
  datatime: string | Date;
  userName: string | undefined;
  parentId: number | null; // для древовидности
  comments?: CommentListItem[];
  level?: number;
};
export type CommentListData = CommentListItem[];
