import { useContext } from "react";
import StudentContext from "../StudentContext";

function Profile() {
  const { name, email, year } = useContext(StudentContext);
  return (
    <div>
      <p>Student Details </p>
      <p>--------------------------------</p>
      <p> Name: {name}</p>
      <p> Email: {email}</p>
      <p> Year: {year}</p>
    </div>
  );
}

export default Profile;
