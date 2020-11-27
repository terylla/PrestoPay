import React, {useState} from 'react';
import {IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import {NFC} from "@ionic-native/nfc";


const Tab1: React.FC = () => {
    const [values, setvalues] = useState('waiting to scan');

    function startScan(){
        NFC.scanTag().then(
            tag => {
                console.log(JSON.stringify(tag))
                if (tag.id) {
                    let test = NFC.bytesToHexString(tag.id);
                    setvalues(test)
                }
            },
            err => console.log(err)
        );
    }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
          <IonButton onClick={() => startScan()}> click here to scan</IonButton>
          <p>{values}</p>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
