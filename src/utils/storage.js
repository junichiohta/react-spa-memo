const STORAGE_KEY = "memos";

export const loadMemos = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveMemos = (memos) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(memos));
};
