import { useContext, useState } from "react";
import AppContext from "../../context/AppProvider";
import { User } from "../../utils/User";
import { ALL_TASKS } from "../../utils/Task";
import Modal from "./Modal";
import InputModal from "./InputModal";
import PrimaryButton from "../buttons/PrimaryButton";

const UserModal = () => {
  const { setUser } = useContext(AppContext);
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Create a new user object with the name and default tasks
    const newUser = new User(userInput, ALL_TASKS);
    // Add new user to the global state user
    setUser(newUser);
  };

  return (
    <Modal onSubmit={() => handleSubmit(event)}>
      <InputModal
        onInput={(event) => setUserInput(event.target.value)}
        inputTitle="username"
        inputType="text"
        isDescription={true}
        inputDescription="Please add a username"
      />
      <PrimaryButton>Submit username</PrimaryButton>
    </Modal>
  );
};

export default UserModal;
