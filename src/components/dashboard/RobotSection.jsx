import { useContext, useState } from "react";
import Modal from "../modal/Modal";
import RobotModal from "../modal/RobotModal";
import PrimaryButton from "../buttons/PrimaryButton";
import EmptyMessage from "./EmptyMessage";
import AppContext from "../../context/AppProvider";
import { ROBOT_TYPES } from "../../utils/Robot";
import { Robot } from "../../utils/Robot";

const RobotSection = () => {
  const { user, setUser } = useContext(AppContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [inputName, setInputName] = useState("");
  const [robotSelected, setRobotSelected] = useState(ROBOT_TYPES["UNIPEDAL"]);

  const handleChange = (event) => {
    const currentRobotSelect = event.target.value.toUpperCase();
    setRobotSelected(ROBOT_TYPES[currentRobotSelect]);
  };

  const handleSubmit = () => {
    const newRobot = new Robot(
      inputName,
      robotSelected.type,
      robotSelected.taskCapacity,
      robotSelected.description,
      robotSelected.image,
      robotSelected.speedModifier
    );

    user.robots.push(newRobot);
    const updateUser = { ...user };
    setUser(updateUser);
    setModalOpen(false);
  };

  return (
    <div className="flex justify-center flex-col items-center gap-10">
      {/* Check if the user has any robot */}
      {user?.robots.length < 1 && (
        <EmptyMessage
          message="You don't have any Robot"
          buttonContent="Add a Robot"
          buttonClick={() => setModalOpen(true)}
        />
      )}

      {/* Open Modal */}
      {modalOpen && (
        <Modal onSubmit={handleSubmit}>
          <RobotModal
            robotSelected={robotSelected}
            handleChange={handleChange}
            handleInput={(event) => setInputName(event.target.value)}
          />
          <PrimaryButton>Add Robot</PrimaryButton>
        </Modal>
      )}

      <div className="flex gap-10 flex-wrap items-center justify-center">
        {user?.robots.map((robot) => (
          <article
            className="flex flex-col gap-5 w-[300px] min-h-[490px] h-fit bg-primary-50 p-3 rounded-lg"
            key={robot.id}
          >
            <div>
              <img className=" rounded-lg" src={robot.image} alt={robot.name} />
            </div>
            <div>
              <h6 className=" font-bold text-primary-900">{robot.name}</h6>
              <p className="font-medium text-primary-950">
                {robot.description}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-bold text-primary-950">
                Task capacity: <span>{robot.taskCapacity}</span>
              </p>
              <p className="text-sm font-bold text-primary-950">
                Speed: <span>{robot.speedModifier}</span>
              </p>
            </div>
          </article>
        ))}
      </div>
      <div>
        {user?.robots.length >= 1 && (
          <PrimaryButton onClick={() => setModalOpen(true)}>
            Add new Robot
          </PrimaryButton>
        )}
      </div>
    </div>
  );
};

export default RobotSection;
