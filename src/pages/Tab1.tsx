import {
  IonContent,
  IonHeader,
  IonMenu,
  IonButtons,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton,
  IonIcon,
} from "@ionic/react";
import "./Tab1.css";
import { useState } from "react";
import HeadersPagina from "../components/HeadersPagina";
import { calendar } from "ionicons/icons";

interface negozio {
  name: String;
  address: String;
  phone: String;
}
interface CardNegozioProps {
  negozi: negozio[];
}
const negozi = [
  {
    name: "lava cuccioli",
    address: "via vicinale cardellina, 7",
    phone: "080321321",
  },
  {
    name: "pizzeria la mamma",
    address: "piazza del duomo, 45",
    phone: "089654321",
  },
  {
    name: "bar bianco",
    address: "viale dei fiori, 35",
    phone: "0899999999",
  },
];

const CardNegozio: React.FC<CardNegozioProps> = (props) => {
  const { negozi } = props;
  const [status, setStatus] = useState(0);

  const myButtonStyle = {
    color: "white",
    backgroundColor: "blue",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    marginLeft: "110px",
  };

  console.log(status + 1);
  return (
    <>
      {negozi.map((negozio, index) => (
        <IonCard key={index} slot="">
          <img
            alt="Silhouette of mountains"
            src="https://ionicframework.com/docs/img/demos/card-media.png"
          />
          <IonCardHeader>
            <IonCardTitle>{negozio.name}</IonCardTitle>
            <IonCardSubtitle>{negozio.address}</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            {negozio.phone}
            <button style={myButtonStyle}>
              <IonIcon slot="start" icon={calendar}></IonIcon>
              Prenota
            </button>
          </IonCardContent>
        </IonCard>
      ))}
    </>
  );
};
const Tab1: React.FC = () => {
  const [hidden, setHidden] = useState(false);

  return (
    <>
      <IonPage id="main-content">
        <HeadersPagina title="Negozi" />
        <IonContent fullscreen={true}>
          <CardNegozio negozi={negozi} />
        </IonContent>
      </IonPage>
    </>
  );
};

export default Tab1;
