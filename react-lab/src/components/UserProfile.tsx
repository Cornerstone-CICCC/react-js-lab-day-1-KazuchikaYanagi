import { User } from "../types/user";

type Props = {
  viewUser: User;
};

const UserProfile = (viewUser: Props) => {
  const { age, bio, education, fullname, gender, skills } = viewUser.viewUser;
  return (
    <>
      {viewUser ? (
        <div>
          <p>Fullname: {fullname}</p>
          <p>Age: {age}</p>
          <p>Education: {education}</p>
          <p>Gender: {gender}</p>
          <p>Skills: {skills.length > 1 ? skills.join(" ,") : skills}</p>
          <p>Bio: {bio}</p>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default UserProfile;
