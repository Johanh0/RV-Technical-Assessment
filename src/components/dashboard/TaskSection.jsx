import { useContext, useState } from "react";
import AppContext from "../../context/AppProvider";
import EmptyMessage from "./EmptyMessage";
import Modal from "../modal/Modal";
import TaskModal from "../modal/TaskModal";
import PrimaryButton from "../buttons/PrimaryButton";
import { Task } from "../../utils/Task";

// Display all user tasks and also manage the modal task information
const TaskSection = () => {
  const { user, setUser } = useContext(AppContext);
  // States for task modal
  const [modalOpen, setModalOpen] = useState(false);
  const [titleInput, setTitleInput] = useState("");
  const [timeInput, setTimeInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");

  // Submit to handle adding a new task
  const handleSubmit = (event) => {
    event.preventDefault();
    // Create a new task
    const newTask = new Task(titleInput, descriptionInput, timeInput, null);

    user.tasks.push(newTask);
    // Updating the user state globally to render
    const updateUser = { ...user };
    setUser(updateUser);

    // Close the modal
    setModalOpen(false);

    // Clear the inputs
    setTitleInput("");
    setTimeInput("");
    setDescriptionInput("");
  };
  return (
    <div className="flex flex-col gap-5 ">
      {user?.tasks.length < 1 && (
        <div className=" max-w-[500px] mx-auto">
          <EmptyMessage
            message="You don't have any task"
            buttonContent="Add a Task"
            buttonClick={() => setModalOpen(true)}
          />
        </div>
      )}
      {user?.tasks.map((task, index) => (
        <div
          key={index}
          className="flex justify-between items-center p-3 bg-primary-50 rounded-lg"
        >
          <div>
            <p className=" text-primary-900 font-bold">
              {task.name.toUpperCase()}
            </p>
            <p className=" text-primary-950 text-md font-medium">
              {task.description}
            </p>
          </div>
          <div>
            <div className="text-center text-sm leading-4 font-bold">
              <p>{Math.floor(task.eta / 1000)}</p>
              <p>second/s</p>
            </div>
          </div>
        </div>
      ))}

      {user?.tasks.length >= 1 && (
        <PrimaryButton fitButton={true} onClick={() => setModalOpen(true)}>
          Add new Task
        </PrimaryButton>
      )}

      {/* Open Modal */}
      {modalOpen && (
        <Modal onSubmit={(event) => handleSubmit(event)}>
          <TaskModal
            titleInput={titleInput}
            timeInput={timeInput}
            descriptionInput={descriptionInput}
            setTitleInput={setTitleInput}
            setTimeInput={setTimeInput}
            setDescriptionInput={setDescriptionInput}
          />
          <PrimaryButton>Add Task</PrimaryButton>
        </Modal>
      )}
    </div>
  );
};

export default TaskSection;
