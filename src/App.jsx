import { useState, useEffect } from "react";
import { MemoList } from "./components/MemoList";
import { MemoEditor } from "./components/MemoEditor";
import { loadMemos, saveMemos } from "./utils/storage";

function App() {
  const [memos, setMemos] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    const loadedMemos = loadMemos();
    setMemos(loadedMemos);
    if (loadedMemos.length > 0) {
      setSelectedId(loadedMemos[0].id);
    }
  }, []);

  const handleAdd = () => {
    const newMemo = {
      id: Date.now(),
      content: "新規メモ",
    };
    const updatedMemos = [newMemo, ...memos];
    setMemos(updatedMemos);
    saveMemos(updatedMemos);
    setSelectedId(newMemo.id);
  };

  const handleUpdate = (id, content) => {
    const updatedMemos = memos.map((memo) =>
      memo.id === id ? { ...memo, content } : memo,
    );
    setMemos(updatedMemos);
    saveMemos(updatedMemos);
  };

  const handleDelete = (id) => {
    const updatedMemos = memos.filter((memo) => memo.id !== id);
    setMemos(updatedMemos);
    saveMemos(updatedMemos);
    setSelectedId(updatedMemos.length > 0 ? updatedMemos[0].id : null);
  };

  const selectedMemo = memos.find((memo) => memo.id === selectedId);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <MemoList
        memos={memos}
        selectedId={selectedId}
        onSelect={setSelectedId}
        onAdd={handleAdd}
      />
      <MemoEditor
        memo={selectedMemo}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
