import { useAuth } from "../contexts/AuthContext";

export const LoginButton = () => {
  const { user, login, logout } = useAuth();

  if (user) {
    return (
      <div style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
        <span>ログイン済</span>
        <button onClick={logout} style={{ marginLeft: "10px" }}>
          ログアウト
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <span>未ログイン</span>
      <button onClick={() => login("user")} style={{ marginLeft: "10px" }}>
        ログイン
      </button>
    </div>
  );
};
