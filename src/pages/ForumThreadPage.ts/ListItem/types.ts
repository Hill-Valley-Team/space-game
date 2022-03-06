export type CommentListItem = {
  id: number;
  text: string;
  datatime: string;
  userName: string | undefined;
};
export type CommentListData = CommentListItem[];
