import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState({});

  const signIn = async ({ user, password }) => {
    let baseURL = "https://r3l2e3.sse.codesandbox.io";
    let myInitRequest = {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ user, password })
    };
    // console.log(user);
    // console.log(password);
    // console.table(user);
    // debugger;
    const page = await fetch(`${baseURL}/api/auth`, myInitRequest);
    if (parseInt(page.status, 10) !== 200) throw new Error("System error");

    const data = await page.json();

    if (data.length === 0) throw new Error("System error");
    setUser(data);
    // console.log(data)
    //setUser({ id: 1, user_nome: user });
  };
  const signOut = () => {
    setUser({});
  };

  return (
    <>
      <AuthContext.Provider value={{ user, signIn, signOut }}>
        {/* {user?.id ? "Logado" : "Não logado"}
        <button onClick={signIn}>Entrar</button>
        <button onClick={signOut}>Sair</button> */}
        {children}
      </AuthContext.Provider>
    </>
  );
}

export function useAuth() {
  const authContext = useContext(AuthContext);
  if (!authContext) throw new Error("useAuth must by sed AuthProvider");
  return authContext;
}
