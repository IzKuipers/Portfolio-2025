import ArcOS from "../../assets/arcos.png";
import CanvasScript from "../../assets/canvasscript.png";
import Donut from "../../assets/donut.png";
import Inepta from "../../assets/inepta.png";
import InsType from "../../assets/instype.png";
import Sacruda from "../../assets/sacruda.png";
import vTDx from "../../assets/vtdx.png";
import HackathonAward from "../../assets/dph24award.jpg";
import type { Project } from "../../types/projects";

export const Projects: Project[] = [
  {
    name: "Digital Proof Hackathon",
    codeUrl: "https://github.com/Hackatjon-v2",
    discontinued: true,
    description: "projects.hackathon-24.description",
    date: "2024-12-03",
    image: HackathonAward,
    longDescription: "projects.hackathon-24.longDescription",
  },
  {
    name: "ArcOS",
    codeUrl: "https://github.com/IzK-ArcOS",
    discontinued: true,
    description: "projects.arcos.description",
    date: "2020-05-17",
    image: ArcOS,
    longDescription: "projects.arcos.longDescription",
    color: "#4db0ff",
  },
  {
    name: "Sacruda",
    htmlUrl: "https://sacruda.nl/",
    codeUrl: "https://github.com/Sacruda",
    description: "projects.sacruda.description",
    date: "2024-06-27",
    image: Sacruda,
    longDescription: "projects.sacruda.longDescription",
    color: "#a675e2",
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
  },
  {
    name: "CanvasScript",
    codeUrl: "https://github.com/IzKuipers/CanvasScript-v1",
    htmlUrl: "https://canvas.izkuipers.nl/",
    description: "projects.canvasscript.description",
    date: "2023-05-29",
    image: CanvasScript,
    longDescription: "projects.canvasscript.longDescription",
  },
  {
    name: "Donut.c-TS",
    codeUrl: "https://github.com/IzKuipers/Donut.c-TS",
    description: "projects.donut.description",
    date: "2023-04-13",
    image: Donut,
    longDescription: "projects.donut.longDescription",
  },
];
