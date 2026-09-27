import { useContext, useEffect, useState } from "react";
import UserContext from "../utils/UserContext";

const About = () => {
  const {loggedInUser} = useContext(UserContext);
  const [userInfo, setUserInfo] = useState({})
  useEffect(() => {
   const fetchUser = async () => {
    const data = await fetch(
      "https://api.github.com/users/akankshaGarg16"
    );

    const json = await data.json();

    setUserInfo(json);
  };

  fetchUser();
  },
[])
  return (
    <div className="py-25">
      <div className="user-card m-4 p-4 bg-gray-200 rounded-lg w-1/3">
        LoggedIn User
        <h1 className="text-xl font-bold">{loggedInUser}</h1>
         <h2>This is dummy Food ordering app</h2>
         <img src={userInfo.avatar_url} />
        <h2><b>Name: </b>{userInfo.name}</h2>
        <h3><b>Last updated at: </b>{userInfo.updated_at}</h3>
        <h3><b>No. of public repos: </b>{userInfo.public_repos}</h3>
        <h4><b>Contact: </b>@{userInfo.login}</h4>
      </div>
    </div>
  )
}

export default About