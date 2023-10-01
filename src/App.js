import React from "react";
import {Routes, Route} from "react-router-dom";
import  Todo from "./pages/Todo";
// import Error from "./pages/Error";

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Todo/>}/>
        <Route path={'*'} element={<div className={'noPage'}><h1>404</h1></div>}/>
        {/* <Route path={'*'} element={<Navigate to={<Error/>}/>}/> */}
      </Routes> 
    </>
  );
}

export default App;
