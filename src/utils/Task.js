import { ROBOT_TYPES } from "./Robot.js";

export class Task {
  constructor(name, description, eta, allowedTypes) {
    this.name = name;
    this.description = description;
    this.eta = eta;
    this.allowedTypes = allowedTypes;
  }
}

export const ALL_TASKS = [
  new Task("dish", "do the dishes", 1000, [
    ROBOT_TYPES.BIPEDAL,
    ROBOT_TYPES.UNIPEDAL,
  ]),
  new Task("sweep", "sweep the house", 3000, [
    ROBOT_TYPES.BIPEDAL,
    ROBOT_TYPES.UNIPEDAL,
    ROBOT_TYPES.QUADRUPEDAL,
  ]),
  new Task("laundry", "do the laundry", 10000, [
    ROBOT_TYPES.BIPEDAL,
    ROBOT_TYPES.UNIPEDAL,
  ]),
  new Task("recycling", "take out the recycling", 4000, [
    ROBOT_TYPES.BIPEDAL,
    ROBOT_TYPES.UNIPEDAL,
    ROBOT_TYPES.QUADRUPEDAL,
    ROBOT_TYPES.ARACHNID,
  ]),
  new Task("sammich", "make a sammich", 7000, [
    ROBOT_TYPES.BIPEDAL,
    ROBOT_TYPES.UNIPEDAL,
  ]),
  new Task("mow", "mow the lawn", 20000, [
    ROBOT_TYPES.QUADRUPEDAL,
    ROBOT_TYPES.ARACHNID,
  ]),
  new Task("rake", "rake the leaves", 18000, [
    ROBOT_TYPES.QUADRUPEDAL,
    ROBOT_TYPES.BIPEDAL,
  ]),
  new Task("dog bath", "give the dog a bath", 14500, [
    ROBOT_TYPES.QUADRUPEDAL,
    ROBOT_TYPES.BIPEDAL,
  ]),
  new Task("bake", "bake some cookies", 8000, [
    ROBOT_TYPES.BIPEDAL,
    ROBOT_TYPES.UNIPEDAL,
  ]),
  new Task("wash car", "wash the car", 20000, [
    ROBOT_TYPES.BIPEDAL,
    ROBOT_TYPES.AERONAUTICAL,
  ]),
];
