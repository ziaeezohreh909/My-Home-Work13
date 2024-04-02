import { Footer } from "../componets/footer/footer";
import { Header } from "../componets/header/header";
import { Tasks } from "../componets/tasks/tasks";

export const Home = () => {
  const home = document.createElement("div");
  home.appendChild(Header());
  home.appendChild(Tasks());
  home.appendChild(Footer());

  return home;
};
