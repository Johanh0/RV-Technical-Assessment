import { useState } from "react";

const LeaderBoard = ({ userData }) => {
  const sortBots = userData?.robots.sort(
    (x, y) => y.tasks.length - x.tasks.length
  );

  return (
    <div className="flex-1 flex flex-col gap-2 bg-primary-100 p-5 rounded-lg h-[200px] w-full overflow-scroll min-h-[300px] ">
      <div>
        <p className="text-lg font-bold text-primary-950">Leader Board</p>
      </div>
      <div>
        <table className=" h-fit w-full">
          <tr className=" text-xs md:text-md">
            <th>Ranking</th>
            <th>Robot name</th>
            <th>Robot type</th>
            <th>Tasks Completed</th>
          </tr>
          {sortBots?.map((robot, index) => (
            <tr>
              <th className="font-normal">{index + 1}</th>
              <th className=" font-normal">{robot.name}</th>
              <th className=" font-normal">{robot.type}</th>
              <th className=" font-normal">{robot.tasks.length}</th>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default LeaderBoard;
