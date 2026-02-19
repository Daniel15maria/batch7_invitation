import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Home from "./pages/Home";
import ChiefGuest from "./pages/ChiefGuest";
import Program from "./pages/Program";
import Graduates from "./pages/Graduates";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "home", Component: Home },
      { path: "chief-guest", Component: ChiefGuest },
      { path: "program", Component: Program },
      { path: "graduates", Component: Graduates },
    ],
  },
]);
