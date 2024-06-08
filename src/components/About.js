import { useState, useEffect } from "react";

const About = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://api.github.com/users");

    const json = await response.json();

    console.log(json);

    setUsers(json);
  };

  return (
    <div>
      <h1 className="text-3xl flex justify-center p-4 m-4">About Us!!</h1>
      <div>
        {users.map((user) => (
          <div
            className="flex justify-start items-center p-4 m-4 border-2 border-gray-300 "
            key={user.id}
          >
            <h2 className="text-xl uppercase underline p-4 ">{user.login}</h2>
            <img
              className="w-20 rounded-xl p-2 m-2 border-1 border-slate-300"
              src={user.avatar_url}
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
