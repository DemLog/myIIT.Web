import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/"/>
      <Route path="login" element={<LoginPage/>}/>
    </Routes>
  );
}

export default App;
