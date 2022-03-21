export type CommentListItem = {
  id: number;
  text: string;
  datatime: string;
  userName: string | undefined;
  parentId?: number; // для древовидности
  level?: number;
  comments?: CommentListItem[];
};
export type CommentListData = CommentListItem[];
