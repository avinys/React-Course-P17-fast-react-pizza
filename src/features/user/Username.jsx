import { useSelector } from "react-redux";

function Username() {
  const username = useSelector(state => state.user.username);
  console.log("Username: ", username)

  if(!username) {
    console.log("Username is null")
    return null;
  }
  

  return <div className="text-sm font-semibold md:block">{username}</div>;
}

export default Username;
