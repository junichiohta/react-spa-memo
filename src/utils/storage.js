const STORAGE_KEY = "memos";

export const loadMemos = () => {
  const memos = localStorage.getItem(STORAGE_KEY);
  return memos ? JSON.parse(memos) : [];
};

export const saveMemos = (memos) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(memos));
};
