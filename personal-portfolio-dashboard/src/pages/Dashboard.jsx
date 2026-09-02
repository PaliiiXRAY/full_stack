import { BrowserRouter, Link, Routes, Route, Outlet } from "react-router-dom";
import Profile from "./Profile";
import Settings from "./Settings";

function Dashboard() {
  return (
    <>
      <p> Welcome to your Dashboard</p>
      <p> Here you can access your profile and settings</p>
      {""}
      <nav>
        <Link to="/dashboard/profile">Profile</Link>{" "}
        <Link to="/dashboard/settings">Settings</Link>
      </nav>
      <Outlet />
    </>
  );
} 

export default Dashboard;
