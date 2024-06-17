import nodejsicon from "../assets/icons/nodejsicon.svg";
import reactjsicon from "../assets/icons/reactjsicon.svg";
import redux from "../assets/icons/redux.svg";
import scss from "../assets/icons/scss.svg";
import github from "../assets/icons/github.svg";
import git from "../assets/icons/git.svg";
import angular from "../assets/icons/angularicon.svg";
import python from "../assets/icons/python.svg";
import docker from "../assets/icons/docker.svg";
import mongo from "../assets/icons/mongo.svg";
import vscode from "../assets/icons/visual-studio-code.svg";

export const techStack = [
  {
    name: "Backend",
    values: [
      {
        name: "NodeJs",
        img: nodejsicon,
      },
      {
        name: "Python",
        img: python,
      },
      {
        name: "MongoDB",
        img: mongo,
      },
    ],
  },
  {
    name: "Frontend",
    values: [
      {
        name: "ReactJs",
        img: reactjsicon,
      },
      {
        name: "Redux",
        img: redux,
      },
      {
        name: "Angular",
        img: angular,
      },
      {
        name: "Scss",
        img: scss,
      },
    ],
  },
  {
    name: "Tools",
    values: [
      {
        name: "Git",
        img: git,
      },
      {
        name: "Docker",
        img: docker,
      },
      {
        name: "VS code",
        img: vscode,
      },
      {
        name: "Github",
        img: github,
      },
    ],
  },
];
