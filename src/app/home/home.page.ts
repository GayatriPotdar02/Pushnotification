import { Component } from '@angular/core';
import { ActionPerformed, PushNotificationSchema, PushNotifications, Token } from '@capacitor/push-notifications';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  ngOnInit(){
        
PushNotifications.requestPermissions().then((result) => {
  if (result.receive === 'granted') {
    PushNotifications.register();
  } else {
  }
});

PushNotifications.addListener('registration', (token: Token) => {
  // alert('Push registration success, token: ' + token.value);
});

PushNotifications.addListener('registrationError', (error: any) => {
  // alert('Error on registration: ' + JSON.stringify(error));
});

PushNotifications.addListener(
  'pushNotificationReceived',
  (notification: PushNotificationSchema) => {
    //alert('Push received: ' + JSON.stringify(notification));
  }
);

PushNotifications.addListener(
  'pushNotificationActionPerformed',
  (notification: ActionPerformed) => {
    // alert('Push action performed: ' + JSON.stringify(notification));
  }
);
  }

}
