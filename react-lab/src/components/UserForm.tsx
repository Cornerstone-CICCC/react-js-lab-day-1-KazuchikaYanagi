import { ChangeEvent } from "react";
import { User } from "../types/user";

type Props = {
  formData: Omit<User, "id">;
  onChangeForm: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
  onSubmitForm: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onResetForm: () => void;
};

const UserForm = ({
  formData,
  onChangeForm,
  onSubmitForm,
  onResetForm,
}: Props) => {
  return (
    <div>
      <form>
        <label>
          Fullname:
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={onChangeForm}
          />
        </label>
        <br />

        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={onChangeForm}
          />
        </label>
        <br />

        <label>
          Education:
          <select
            name="education"
            id="education"
            onChange={onChangeForm}
            value={formData.education || ""}
          >
            <option value="">Select Education</option>
            <option value="Grade school">Grade school</option>
            <option value="high school">high school</option>
            <option value="college">college</option>
          </select>
        </label>
        <br />

        <label>
          <input
            type="radio"
            id="male"
            name="gender"
            value="Male"
            checked={formData.gender === "Male"}
            onChange={onChangeForm}
          />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="Female"
            checked={formData.gender === "Female"}
            onChange={onChangeForm}
          />
          <label htmlFor="female">Female</label>
          <input
            type="radio"
            id="other"
            name="gender"
            value="other"
            checked={formData.gender === "other"}
            onChange={onChangeForm}
          />
          <label htmlFor="other">other</label>
        </label>
        <br />

        <label>
          <input
            type="checkbox"
            name="TypeScript"
            id="typescript"
            value={"TypeScript"}
            onChange={onChangeForm}
            checked={formData.skills.includes("TypeScript")}
          />
          <label htmlFor="typescript">TypeScript</label>

          <input
            type="checkbox"
            name="React"
            id="react"
            value={"React"}
            onChange={onChangeForm}
            checked={formData.skills.includes("React")}
          />
          <label htmlFor="react">React</label>

          <input
            type="checkbox"
            name="Node"
            id="node"
            value={"Node"}
            onChange={onChangeForm}
            checked={formData.skills.includes("Node")}
          />
          <label htmlFor="node">Node</label>

          <input
            type="checkbox"
            name="NoSQL"
            id="nosql"
            value={"NoSQL"}
            onChange={onChangeForm}
            checked={formData.skills.includes("NoSQL")}
          />
          <label htmlFor="nosql">NoSQL</label>
        </label>
        <br />

        <label>
          <textarea
            name="bio"
            id="bio"
            value={formData.bio}
            placeholder="text anything..."
            onChange={onChangeForm}
          ></textarea>
        </label>
        <br />

        <button type="button" onClick={onSubmitForm}>
          Add/Save User
        </button>
        <button type="button" onClick={onResetForm}>
          Clear
        </button>
      </form>
    </div>
  );
};

export default UserForm;
