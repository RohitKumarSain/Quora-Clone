import "./App.css";

import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Following from "./pages/Following";
import Answer from "./pages/Answer";
import Spaces from "./pages/Spaces";
import Notifications from "./pages/Notifications";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Error from "./components/Error";
import InterestsDetails from "./pages/InterestsDetails";
import { useTheme } from "./Context/ThemeContext";



function App() {

  // console.log(theme)
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/following" element={<Following />}></Route>
        <Route path="/answer" element={<Answer />}></Route>
        <Route path="/spaces" element={<Spaces />}></Route>
        <Route path="/notifications" element={<Notifications />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Register />}></Route>
        <Route path="/interests/:name" element={<InterestsDetails />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
