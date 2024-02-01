import {
  IonContent,
  IonHeader,
  IonMenu,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const MenuLaterale = () => {
  return (
    <IonMenu contentId="main-content">
      <IonHeader collapse="condense" >
        <IonToolbar>
          <IonTitle>Profilo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">This is the menu content.</IonContent>
    </IonMenu>
  );
};

export default MenuLaterale;
