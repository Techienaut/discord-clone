import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "../../../Constants/vars.css";
import styles from "./styles.module.css";
import { DMPage } from "../DMPage";
import { GuildNavbar } from "../GuildNavBar";

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/projects">
            <div className={styles.App}>
              <div style={{ height: "200px", backgroundColor: "red" }}></div>
            </div>
          </Route>
          <Route path="/">
            <div className={`${styles.App} ${styles.appGrid}`}>
              <GuildNavbar gridClassName={styles.guildNavbarArea} />
              <Switch>
                <Route path="/channels/@me">
                  <DMPage gridClassName={styles.dmPageArea} />
                </Route>
                <Route path="/">
                  <Redirect to="/channels/@me" />
                </Route>
              </Switch>
            </div>
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
