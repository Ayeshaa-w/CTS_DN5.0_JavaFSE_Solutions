import { useContext } from "react";
import UserContext from "../UserContext";

function Profile() {

  const username = useContext(UserContext);

  return (
    <div>
      <h2>Profile Component</h2>

      <h3>Welcome {username}</h3>

    </div>
  );
}

export default Profile;