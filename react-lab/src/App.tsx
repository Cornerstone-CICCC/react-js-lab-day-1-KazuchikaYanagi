import { ChangeEvent, useState } from "react";
import UserForm from "./components/UserForm";
import { User } from "./types/user";
import UserList from "./components/UserList";
import UserProfile from "./components/UserProfile";

const App = () => {
  /* Your states here */
  const [users, setUsers] = useState<User[]>([]);
  const [formData, setFormData] = useState<Omit<User, "id">>({
    fullname: "",
    age: 0,
    education: false,
    gender: "",
    skills: [],
    bio: "",
  });
  const [viewUser, setViewUser] = useState<Omit<User, "id">>({
    fullname: "",
    age: 0,
    education: false,
    gender: "",
    skills: [],
    bio: "",
  });

  /* Your handlers here */
  const handleChangeForm = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prevState) => {
        const skills = checked
          ? [...prevState.skills, value]
          : prevState.skills.filter((level) => level !== value);
        return { ...prevState, skills };
      });
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmitForm = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    console.log(formData);

    setUsers((prevState) => [
      ...prevState,
      {
        id: prevState.length + 1,
        fullname: formData.fullname,
        age: formData.age,
        education: formData.education,
        gender: formData.gender,
        skills: formData.skills,
        bio: formData.bio,
      },
    ]);
  };

  const handleResetForm = () => {
    setFormData({
      fullname: "",
      age: 0,
      education: false,
      gender: "",
      skills: [],
      bio: "",
    });
  };

  const handleViewUser = (id: number) => {
    const user = users.find((user) => user.id === id);
    console.log("View user", user);
    setViewUser(user);
  };

  const handleEditUser = (id: number) => {
    const user = users.find((user) => user.id === id);
    if (user) {
      const { id: _, ...rest } = user;
      setFormData(rest);
    }
  };

  const handleDeleteUser = (id: number) => {
    handleResetForm();
    setUsers((prevState) => prevState.filter((user) => user.id !== id));
  };

  return (
    <>
      <UserForm
        formData={formData}
        onChangeForm={handleChangeForm}
        onSubmitForm={handleSubmitForm}
        onResetForm={handleResetForm}
      />
      <UserList
        users={users}
        onViewUser={handleViewUser}
        onEditUser={handleEditUser}
        onDeleteUser={handleDeleteUser}
      />
      <UserProfile viewUser={viewUser} />
    </>
  );
};

export default App;
