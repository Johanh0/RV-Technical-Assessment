import unipedal from "../assets/robots/unipedal.jpeg";
import bipedal from "../assets/robots/bipedal.jpeg";
import quadrupedal from "../assets/robots/quadrupedal.jpeg";
import arachnid from "../assets/robots/arachnid.jpeg";
import radial from "../assets/robots/radial.jpeg";
import aeronautical from "../assets/robots/aeronautical.jpeg";

export const ROBOT_TYPES = {
  UNIPEDAL: {
    type: "Unipedal",
    taskCapacity: 1,
    description:
      "A robot with a single leg, agile but with limited task capacity.",
    image: unipedal,
    speedModifier: 1.0, // Base speed
  },
  BIPEDAL: {
    type: "Bipedal",
    taskCapacity: 2,
    description:
      "A two-legged robot, balanced and capable of handling multiple tasks.",
    image: bipedal,
    speedModifier: 0.9, // 10% faster
  },
  QUADRUPEDAL: {
    type: "Quadrupedal",
    taskCapacity: 4,
    description:
      "A four-legged robot, excellent for stability and carrying loads.",
    image: quadrupedal,
    speedModifier: 0.8, // 20% faster
  },
  ARACHNID: {
    type: "Arachnid",
    taskCapacity: 6,
    description:
      "A spider-like robot with great mobility and multitasking ability.",
    image: arachnid,
    speedModifier: 0.7, // 30% faster
  },
  RADIAL: {
    type: "Radial",
    taskCapacity: 7,
    description:
      "A robot with a symmetrical structure, specialized in rotations and precision.",
    image: radial,
    speedModifier: 0.6, // 40% faster
  },
  AERONAUTICAL: {
    type: "Aeronautical",
    taskCapacity: 8,
    description:
      "A robot designed for aerial exploration, fast and highly task-capable.",
    image: aeronautical,
    speedModifier: 0.5, // 50% faster
  },
};

export class Robot {
  constructor(name, type, taskCapacity, description, image, speedModifier) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.type = type;
    this.taskCapacity = taskCapacity;
    this.description = description;
    this.image = image;
    this.speedModifier = speedModifier;
    this.tasks = [];
  }
}

export const initialRobots = [
  new Robot(
    "MonoBot",
    ROBOT_TYPES.UNIPEDAL,
    ROBOT_TYPES.UNIPEDAL.taskCapacity,
    ROBOT_TYPES.UNIPEDAL.description,
    ROBOT_TYPES.UNIPEDAL.image,
    ROBOT_TYPES.UNIPEDAL.speedModifier
  ),
  new Robot(
    "DuoWalker",
    ROBOT_TYPES.BIPEDAL,
    ROBOT_TYPES.BIPEDAL.taskCapacity,
    ROBOT_TYPES.BIPEDAL.description,
    ROBOT_TYPES.BIPEDAL.image,
    ROBOT_TYPES.BIPEDAL.speedModifier
  ),
  new Robot(
    "QuadroStrider",
    ROBOT_TYPES.QUADRUPEDAL,
    ROBOT_TYPES.QUADRUPEDAL.taskCapacity,
    ROBOT_TYPES.QUADRUPEDAL.description,
    ROBOT_TYPES.QUADRUPEDAL.image,
    ROBOT_TYPES.QUADRUPEDAL.speedModifier
  ),
  new Robot(
    "SpiderMech",
    ROBOT_TYPES.ARACHNID,
    ROBOT_TYPES.ARACHNID.taskCapacity,
    ROBOT_TYPES.ARACHNID.description,
    ROBOT_TYPES.ARACHNID.image,
    ROBOT_TYPES.ARACHNID.speedModifier
  ),
  new Robot(
    "RadiaX",
    ROBOT_TYPES.RADIAL,
    ROBOT_TYPES.RADIAL.taskCapacity,
    ROBOT_TYPES.RADIAL.description,
    ROBOT_TYPES.RADIAL.image,
    ROBOT_TYPES.RADIAL.speedModifier
  ),
  new Robot(
    "SkyCruiser",
    ROBOT_TYPES.AERONAUTICAL,
    ROBOT_TYPES.AERONAUTICAL.taskCapacity,
    ROBOT_TYPES.AERONAUTICAL.description,
    ROBOT_TYPES.AERONAUTICAL.image,
    ROBOT_TYPES.AERONAUTICAL.speedModifier
  ),
];
