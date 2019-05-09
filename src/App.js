import React, { Component } from "react";
import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";
import {
  IonApp,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle
} from "@ionic/react";

class App extends Component {
  render() {
    return (
      <IonApp>
        <IonContent>
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Welcome to Ionic</IonCardSubtitle>
              <IonCardTitle>Running on React</IonCardTitle>
            </IonCardHeader>
          </IonCard>
        </IonContent>
      </IonApp>
    );
  }
}

export default App;
