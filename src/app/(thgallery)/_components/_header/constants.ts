import { Nav_Menu } from "../../_model/menu";

export const nav_menu: Nav_Menu = [
  {
    id: 1,
    name: "보도/편집 전용",
    path: "/?path=report&page=1",
    pathname: "report",
  },
  { id: 2, name: "팔로잉", path: "/?path=follow&page=1", pathname: "follow" },
  {
    id: 3,
    name: "will Photo+",
    path: "/?path=photo&page=1",
    pathname: "photo",
  },
  { id: 4, name: "단색", path: "/?path=color&page=1", pathname: "color" },
  {
    id: 5,
    name: "배경 화면",
    path: "/?path=background&page=1",
    pathname: "background",
  },
  {
    id: 6,
    name: "3D 렌더링",
    path: "/?path=rendering&page=1",
    pathname: "rendering",
  },
  { id: 7, name: "자연", path: "/?path=nature&page=1", pathname: "nature" },
  {
    id: 8,
    name: "텍스쳐 및 패턴",
    path: "/?path=pattern&page=1",
    pathname: "pattern",
  },
];
