<template>
    <ion-page>
        <ion-header>
            <IonToolbar>
                <ion-buttons slot="start">
                    <ion-back-button :default-href="pageDefaultBackLink"></ion-back-button>
                </ion-buttons>
                <ion-title>{{ pageTitle }}</ion-title>
            </IonToolbar>
        </ion-header>
        <ion-content>
            <slot />
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton,IonButtons} from'@ionic/vue';

export default {
    props: ["pageTitle", "pageDefaultBackLink"],
    components: {
        IonPage,
        IonToolbar,
        IonHeader, 
        IonTitle, 
        IonContent,
        IonBackButton,
        IonButtons
    }
}
</script>