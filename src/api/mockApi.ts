// src/api/mockApi.ts

export type User = {
  username: string;
  displayName: string;
};

export async function getCurrentUser(): Promise<User | null> {
  const user = localStorage.getItem("user");
  return user ? (JSON.parse(user) as User) : null;
}

export async function login(username: string, password: string): Promise<User | null> {
  if (username && password) {
    const user: User = { username, displayName: username };
    localStorage.setItem("user", JSON.stringify(user));
    return user;
  }
  return null;
}

export async function logout(): Promise<void> {
  localStorage.removeItem("user");
}
