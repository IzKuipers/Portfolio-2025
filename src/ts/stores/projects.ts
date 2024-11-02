import ArcOS from "../../assets/arcos.png";
import CanvasScript from "../../assets/canvasscript.png";
import Donut from "../../assets/donut.png";
import Inepta from "../../assets/inepta.png";
import InsType from "../../assets/instype.png";
import Sacruda from "../../assets/sacruda.png";
import vTDx from "../../assets/vtdx.png";
import type { Project } from "../../types/projects";

export const Projects: Project[] = [
  {
    name: "Sacruda",
    htmlUrl: "https://sacruda.nl/",
    codeUrl: "https://github.com/Sacruda",
    description: "projects.sacruda.description",
    date: "2024-06-27",
    image: Sacruda,
    longDescription: "projects.sacruda.longDescription",
  },
  {
    name: "ArcOS",
    codeUrl: "https://github.com/IzK-ArcOS",
    discontinued: true,
    description: "projects.arcos.description",
    date: "2020-05-17",
    image: ArcOS,
    longDescription: "projects.arcos.longDescription",
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
    name: "InsType",
    codeUrl: "https://github.com/IzKuipers/Instype-Backend",
    htmlUrl: "https://instype.izkuipers.nl/",
    description: "projects.instype.description",
    date: "2024-08-10",
    image: InsType,
    longDescription: "projects.instype.longDescription",
  },
  {
    name: "Inepta",
    codeUrl: "https://github.com/IzKuipers/silly",
    htmlUrl: "https://inepta.izkuipers.nl",
    description: "projects.inepta.description",
    date: "2024-08-16",
    image: Inepta,
    longDescription: "projects.inepta.longDescription",
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
