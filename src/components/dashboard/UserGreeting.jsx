import React from "react";

const UserGreeting = ({ username }) => {
  return (
    <section className="flex flex-col gap-1">
      <div>
        <h1 className="text-5xl font-bold text-primary-950">
          Welcome <span className="text-primary-800">{username}</span>.
        </h1>
      </div>
      <div>
        <p className="text-primary-700 text-2xl font-medium">
          It's good to see you again.
        </p>
      </div>
    </section>
  );
};

export default UserGreeting;
