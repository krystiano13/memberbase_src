import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Account from "./views/Account";
import Contact from "./views/Contact";
import Terms from "./components/Terms";
import Error404 from "./views/Error404";
import Password from "./views/Password";
import Licenses from "./views/Licenses";
import Instructions from "./views/Instructions";
import Guide from "./views/Guide";

import "./styles/dist/app.css";

const App = () => {
  const [portrait, setPortrait] = React.useState<boolean>(false);
  React.useEffect(() => {
    const media = window.matchMedia("(orientation : portrait)");
    setPortrait(media.matches);
    window
      .matchMedia("(orientation : portrait)")
      .addEventListener("change", (e) => {
        setPortrait(e.matches);
      });
  }, []);
  return ( 
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/memberbase/"
            element={<Home portrait={portrait} route="home" />}
          />
          <Route
            path="/memberbase/resources"
            element={<Home portrait={portrait} route="resources" />}
          />
          <Route path="/memberbase/logIn" element={<Account type="login" />} />
          <Route
            path="/memberbase/register"
            element={<Account type="register" />}
          />
          <Route path="/memberbase/reset" element={<Account type="reset" />} />
          <Route
            path="/memberbase/contact"
            element={<Contact portrait={portrait} />}
          />
          <Route
            path="/memberbase/terms"
            element={<Terms portrait={portrait} title="Terms & Conditions" />}
          />
          <Route
            path="/memberbase/policy"
            element={<Terms portrait={portrait} title="Privacy Policy" />}
          />
          <Route
            path="/memberbase/404"
            element={<Error404 portrait={portrait} />}
          />
          <Route
            path="/memberbase/licenses"
            element={<Licenses portrait={portrait} />}
          />
          <Route
            path="/memberbase/password"
            element={<Password portrait={portrait} />}
          />
          <Route
            path="/memberbase/instructions"
            element={<Instructions portrait={portrait} />}
          />
          <Route
            path="/memberbase/guide"
            element={<Guide portrait={portrait} />}
          />
          <Route path="*" element={<Error404 portrait={portrait} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
