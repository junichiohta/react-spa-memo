import { useState, useEffect } from "react";

export const MemoEditor = ({ memo, onUpdate, onDelete }) => {
  const [content, setContent] = useState("");

  // memoが変わったらcontentをリセット
  useEffect(() => {
    setContent(memo?.content || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [memo?.id]); // memo.idが変わったときのみ実行

  if (!memo) {
    return <div style={{ padding: "20px" }}>メモを選択してください</div>;
  }

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
        <button
          onClick={() => onUpdate(memo.id, content)}
          style={{ marginRight: "10px" }}
        >
          更新
        </button>
        <button
          onClick={() =>
            window.confirm("このメモを削除しますか？") && onDelete(memo.id)
          }
        >
          削除
        </button>
      </div>
    </div>
  );
};
