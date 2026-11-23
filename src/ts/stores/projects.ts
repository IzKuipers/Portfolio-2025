import Sacruda from "../../assets/sacruda.png";
import CanvasScript from "../../assets/canvasscript.png";
import HackathonAward from "../../assets/dph24award.jpg";
import Inepta from "../../assets/inepta.png";
import InsType from "../../assets/instype.png";
import Masonville from "../../assets/masonville-project.png";
import vTDx from "../../assets/vtdx.png";
import type { Project } from "../../types/projects";

export const Projects: Project[] = [
  {
    name: "Sacruda",
    codeUrl: "https://github.com/Sacruda",
    htmlUrl: "https://sacruda.nl/",
    description: "projects.sacruda.description",
    date: "2020-11-04",
    image: Sacruda,
    longDescription: "projects.sacruda.longDescription",
    color: "#4db0ff",
    id: "sacruda",
  },
  {
    name: "Masonville",
    codeUrl: "https://github.com/Masonville-Project",
    description: "projects.masonville.description",
    date: "2024-06-27",
    image: Masonville,
    longDescription: "projects.masonville.longDescription",
    color: "#a675e2",
    id: "masonville",
    discontinued: true,
  },
  {
    name: "Digital Proof Hackathon",
    codeUrl: "https://github.com/Hackatjon-v2",
    description: "projects.hackathon-24.description",
    date: "2024-12-03",
    image: HackathonAward,
    longDescription: "projects.hackathon-24.longDescription",
    id: "hackathon",
  },
  {
    name: "Inepta",
    codeUrl: "https://github.com/IzKuipers/silly",
    htmlUrl: "https://inepta.izkuipers.nl",
    description: "projects.inepta.description",
    date: "2024-08-16",
    image: Inepta,
    longDescription: "projects.inepta.longDescription",
    color: "rgb(255, 152, 88)",
    id: "inepta",
  },
  {
    name: "InsType",
    codeUrl: "https://github.com/IzKuipers/Instype-Backend",
    htmlUrl: "https://instype.izkuipers.nl/",
    description: "projects.instype.description",
    date: "2024-08-10",
    image: InsType,
    longDescription: "projects.instype.longDescription",
    color: "#ffbb32",
    id: "instype",
  },
  {
    name: "vTDx",
    codeUrl: "https://github.com/vTDx",
    htmlUrl: "https://vtdx.github.io/",
    image: vTDx,
    date: "2021-12-03",
    description: "projects.vtdx.description",
    longDescription: "projects.vtdx.longDescription",
    discontinued: true,
    color: "#61afef",
    id: "vtdx",
  },
  {
    name: "CanvasScript",
    codeUrl: "https://github.com/IzKuipers/CanvasScript-v1",
    htmlUrl: "https://canvas.izkuipers.nl/",
    description: "projects.canvasscript.description",
    date: "2023-05-29",
    image: CanvasScript,
    discontinued: true,
    longDescription: "projects.canvasscript.longDescription",
    id: "canvasscript",
  },
];
