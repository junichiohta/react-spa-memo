import { useState, useEffect, useRef } from "react";
import { MemoList } from "./components/MemoList";
import { MemoEditor } from "./components/MemoEditor";
import { LoginButton } from "./components/LoginButton";
import { loadMemos, saveMemos } from "./utils/storage";

function App() {
  const [memos, setMemos] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const isInitialMount = useRef(true);

  useEffect(() => {
    const loadedMemos = loadMemos();
    setMemos(loadedMemos);
    if (loadedMemos.length > 0) {
      setSelectedId(loadedMemos[0].id);
    }
  }, []);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    saveMemos(memos);
  }, [memos]);

  const handleAdd = () => {
    const newMemo = {
      id: Date.now(),
      content: "新規メモ",
    };
    setMemos([newMemo, ...memos]);
    setSelectedId(newMemo.id);
  };

  const handleUpdate = (id, content) => {
    setMemos(
      memos.map((memo) => (memo.id === id ? { ...memo, content } : memo)),
    );
  };

  const handleDelete = (id) => {
    setMemos(memos.filter((memo) => memo.id !== id));
    setSelectedId(memos.length > 1 ? memos[0].id : null);
  };

  const selectedMemo = memos.find((memo) => memo.id === selectedId);

  return (
    <div>
      <LoginButton />
      <div style={{ display: "flex", height: "calc(100vh - 60px)" }}>
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
    </div>
  );
}

export default App;
