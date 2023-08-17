import {connect} from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { LinearProgress } from "@mui/material";
import './assets/app.css'

const Chat = lazy(() => import("./routes/Chat"));

const App = () => {


  return (
    <BrowserRouter>
      <Suspense fallback={<LinearProgress />}>
        <Routes>
          <Route path="/chat" element={<Chat />} />
          <Route path="/" element={<Chat />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
