export const ROBOT_TYPES = {
  UNIPEDAL: {
    type: "Unipedal",
    taskCapacity: 1,
  },
  BIPEDAL: {
    type: "Bipedal",
    taskCapacity: 2,
  },
  QUADRUPEDAL: {
    type: "Quadrupedal",
    taskCapacity: 4,
  },
  ARACHNID: {
    type: "Arachnid",
    taskCapacity: 6,
  },
  RADIAL: {
    type: "Radial",
    taskCapacity: 0,
  },
  AERONAUTICAL: {
    type: "Aeronautical",
    taskCapacity: 8,
  },
};

export class Robot {
  constructor(name, type, taskCapacity) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.type = type;
    this.taskCapacity = taskCapacity;
    this.tasks = [];
  }

  //   getAvailableTasks() {
  //     return ALL_TASKS.filter((task) => task.allowedTypes.includes(this.type));
  //   }

  getName() {
    return this.name;
  }

  setName(newName) {
    if (typeof newName !== "string" || newName.length === 0) {
      throw new Error("Name must be a valid string!");
    }
    this._name = newName;
  }

  getType() {
    return this.type;
  }

  getTasks() {
    return this.tasks;
  }

  addTask(task) {
    this.tasks.push(task);
  }
}
