import unipedal from "../assets/robots/unipedal.jpeg";
import bipedal from "../assets/robots/bipedal.jpeg";
import quadrupedal from "../assets/robots/quadrupedal.jpeg";
import arachnid from "../assets/robots/arachnid.jpeg";
import radial from "../assets/robots/radial.jpeg";
import aeronautical from "../assets/robots/aeronautical.jpeg";

// Robot types data
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
