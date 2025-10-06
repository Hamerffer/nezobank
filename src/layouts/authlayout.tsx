import { Outlet } from "@tanstack/react-router";
import ScrollToTop from "../hooks/ScrollToTop";

export default function AuthLayout() {
  return (
    <div className="h-full m-auto  px-3 ">
      <ScrollToTop />
      <Outlet />
    </div>
  );
}
