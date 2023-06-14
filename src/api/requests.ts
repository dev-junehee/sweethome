// const options = (method, param) => ({
//   method,
//   headers: {
//     'content-type': 'application/json',
//     'apikey': 'KDT5_nREmPe9B',
//     'username': 'KDT5_Team9'
//   },
//   body: JSON.stringify(param)
// })

// Sign-Up 회원가입
interface User {
  email: string;
  password: string;
}
interface RequestBody extends User {
  displayName: string;
}
const headers = {
  "content-type": "application/json",
  apikey: "KDT5_nREmPe9B",
  username: "KDT5_Team9"
};
const signUp = async (body: RequestBody) => {
  const res = await fetch(
    "https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/signup",
    {
      method: "POST",
      headers: { ...headers },
      body: JSON.stringify(body)
    }
  );
  const data = await res.json();
  console.log(data);
  return data;
};
const signIn = async (event: React.FormEvent, body: User) => {
  event.preventDefault();
  const res = await fetch(
    "https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/login",
    {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    }
  );
  const json = await res.json();
  console.log(json);
  localStorage.setItem("token", json.accessToken);
};
const signOut = async () => {
  const res = await fetch(
    "https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/logout",
    {
      method: "POST",
      headers: {
        ...headers,
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }
  );
  const json = await res.json();
  console.log(json);
};
export { signUp, signIn, signOut };
