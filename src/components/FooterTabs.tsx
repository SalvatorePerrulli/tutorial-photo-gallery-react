import {
  IonIcon,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonRouterOutlet,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { images, square, triangle } from "ionicons/icons";
import React from "react";
import { Redirect, Route } from "react-router-dom";
import Tab1 from "../pages/Tab1";
import Tab2 from "../pages/Tab2";
import Tab3 from "../pages/Tab3";
import "./FooterTabs.css";
import image from "../image/icona.svg";

const FooterTabs = () => {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1" component={Tab1} />
          <Route exact path="/tab2" component={Tab2} />
          <Route path="/tab3" component={Tab3} />
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom" className="luca">
          <IonTabButton tab="tab1" href="/tab1" className="icona">
            <div className="round-button">
              <div className="round-button-circle">
                <IonIcon src={image} />
              </div>
            </div>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2" className="icona">
            <div className="round-button">
              <div className="round-button-circle">
                <IonIcon src={image} />
              </div>
            </div>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3" className="icona">
            <div className="round-button">
              <div className="round-button-circle">
                <IonIcon src={image} />
              </div>
            </div>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};

export default FooterTabs;
