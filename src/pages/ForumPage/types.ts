export type ThreadListItem = {
  id: number;
  title: string;
  text: string;
  datatime: string;
  userName: string | undefined;
  comments: number | undefined;
};
export type ThreadListData = ThreadListItem[];
