import { BrowserRouter, Routes, Route, Link } from "react-router";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Tasks from "./pages/Tasks";
import StudentContext from "./StudentContext";
import { useContext } from "react";

function App() {
  const student = {
    name: "Priya Nair",
    email: "priya@gmail.com",
    year: "3rd Year",
  };

  return (
    <>
      <p>------------------------------------------------------------------</p>
      <p> STUDY HUB </p>
      <p>------------------------------------------------------------------</p>

      <BrowserRouter>
        <nav>
          <Link to="/home">Home</Link> <Link to="/login">Login</Link>{" "}
          <Link to="/tasks">Tasks</Link>
          <Link to="/profile">Profile</Link>
        </nav>

        <hr />

        <Routes>
          <Route path="/home" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route path="/tasks" element={<Tasks />} />
          <Route
            path="/profile"
            element={
              <StudentContext.Provider value={student}>
                <Profile />
              </StudentContext.Provider>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
