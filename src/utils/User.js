export class User {
  constructor(name) {
    this.name = name;
    this.robots = [];
  }

  getName() {
    return this.name;
  }

  setName(newName) {
    if (typeof newName !== "string" || newName.length === 0) {
      throw new Error("Name must be a valid string!");
    }
    this._name = newName;
  }

  getRobots() {
    return this.robots;
  }

  getRobot(id) {
    return this.robots.find((robot) => id === robot.id);
  }

  addRobot(robot) {
    return this.robots.push(robot);
  }
}
