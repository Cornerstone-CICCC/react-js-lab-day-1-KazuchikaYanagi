import { User } from "../types/user";

type Props = {
  users: User[];
  onViewUser: (id: number) => void;
  onEditUser: (id: number) => void;
  onDeleteUser: (id: number) => void;
};

const UserList = ({ users, onViewUser, onEditUser, onDeleteUser }: Props) => {
  return (
    <div>
      UserList
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id} - {user.fullname}
            <span>
              <button type="button" onClick={() => onViewUser(user.id)}>
                View
              </button>
              <button type="button" onClick={() => onEditUser(user.id)}>
                Edit
              </button>
              <button type="button" onClick={() => onDeleteUser(user.id)}>
                Delete
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
