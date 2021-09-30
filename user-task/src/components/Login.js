import axios from "axios";
import React, {useState } from "react";
import { useHistory } from "react-router";
export default function Login() {
  const [name, setUsername] = useState("");
  let history = useHistory();
  const onChangeUsername = (e) => {
    const user = e.target.value;
    setUsername(user);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const list = { name };
    axios
      .post("http://localhost:3000/user/create", list)
      .then((res)=>(res));
      setUsername("");
      history.push("/add");
  };

  return (
    <form>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="user"
            type="text"
            placeholder="Username"
            value={name}
            onChange={onChangeUsername}
          />
        </div>
        <div className="grid grid-cols-1">
          <button
            type="button"
            onClick={handleLogin}
            className="bg-transparent  hover:bg-green-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Signin
          </button>
        </div>
      </div>
    </form>
  );
}
