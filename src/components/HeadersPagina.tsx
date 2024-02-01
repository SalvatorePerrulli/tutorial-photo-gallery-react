import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import {personCircle,ellipsisHorizontal,ellipsisVertical} from "ionicons/icons";
import MenuLaterale from "./MenuLaterale";


const HeadersPagina = (props:any) => {

  console.log(props);
  return (
    <>
    <IonHeader collapse="fade">
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton slot="icon-only">
            <IonIcon icon={personCircle} size="large"></IonIcon>
          </IonMenuButton>
        </IonButtons>
        <IonButtons slot="end">
          <IonMenuButton slot="icon-only">
            <IonIcon md={ellipsisVertical} ios={ellipsisHorizontal} size="large"></IonIcon>
          </IonMenuButton>
        </IonButtons>
        <IonTitle>{props.title}</IonTitle>
      </IonToolbar>
    </IonHeader>
    </>
  );
};

export default HeadersPagina;
