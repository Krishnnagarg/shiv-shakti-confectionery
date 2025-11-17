import { useState } from "react";

export default function AdminLogin({ setLoggedIn }) {
  const [pass, setPass] = useState("");

  const login = () => {
    if (pass === "12345") {
      localStorage.setItem("admin", "yes");
      setLoggedIn(true);
    } else {
      alert("Wrong password");
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
      <input
        type="password"
        placeholder="Enter Password"
        className="border p-2 w-full"
        onChange={(e) => setPass(e.target.value)}
      />
      <button onClick={login} className="bg-black text-white px-4 py-2 mt-3">
        Login
      </button>
    </div>
  );
}
