import {BrowserRouter, Routes, Route} from "react-router-dom";

import SignUp from "./pages/SignUp"
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home />}> </Route>
        <Route path="/register" element = {<SignUp />}></Route>
        <Route path="/login" element = {<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
