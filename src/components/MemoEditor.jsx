import { useState, useEffect } from "react";

export const MemoEditor = ({ memo, onUpdate, onDelete }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    if (memo) {
      setContent(memo.content);
    }
  }, [memo]);

  if (!memo) {
    return <div style={{ padding: "20px" }}>メモを選択してください</div>;
  }

  const handleUpdate = () => {
    onUpdate(memo.id, content);
  };

  const handleDelete = () => {
    if (window.confirm("このメモを削除しますか？")) {
      onDelete(memo.id);
    }
  };

  return (
    <div style={{ flex: 1, padding: "20px" }}>
      <h2>編集</h2>
      <div style={{ marginBottom: "10px", fontWeight: "bold" }}>
        {content.split("\n")[0] || "新規メモ"}
      </div>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{
          width: "100%",
          height: "300px",
          padding: "10px",
          fontSize: "14px",
          border: "1px solid #ccc",
        }}
      />
      <div style={{ marginTop: "10px" }}>
        <button onClick={handleUpdate} style={{ marginRight: "10px" }}>
          更新
        </button>
        <button onClick={handleDelete}>削除</button>
      </div>
    </div>
  );
};
