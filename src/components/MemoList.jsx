import { useAuth } from "../contexts/AuthContext";

export const MemoList = ({ memos, selectedId, onSelect, onAdd }) => {
  const { user } = useAuth();

  return (
    <div
      style={{ width: "200px", borderRight: "1px solid #ccc", padding: "10px" }}
    >
      <h2>一覧</h2>
      {user && (
        <button onClick={onAdd} style={{ marginBottom: "10px", width: "100%" }}>
          +
        </button>
      )}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {memos.map((memo) => (
          <li key={memo.id}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onSelect(memo.id);
              }}
              style={{
                color: selectedId === memo.id ? "blue" : "black",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              {memo.content.split("\n")[0] || "新規メモ"}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
