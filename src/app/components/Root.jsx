import { Outlet } from "react-router";
import Navigation from "./Navigation";
import AudioPlayer from "./AudioPlayer";
import CursorFollower from "./CursorFollower";

export default function Root() {
  return (
    <div className="min-h-screen bg-slate-900">
      <CursorFollower />
      <Navigation />
      <AudioPlayer />
      <Outlet />
    </div>
  );
}
