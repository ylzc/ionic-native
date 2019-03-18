import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface NotificationData {
  /**
   * Determines whether the notification was pressed or not
   */

  wasTapped: boolean;

  /**
   * Notification data hash item
   */

  [name: string]: any;
}

/**
 * @name FCM
 * @description
 * Provides basic functionality for Firebase Cloud Messaging
 *
 * @usage
 * ```typescript
 * import { FCM } from '@ionic-native/fcm/ngx';
 *
 * constructor(private fcm: FCM) {}
 *
 * ...
 *
 * this.fcm.subscribeToTopic('marketing');
 *
 * this.fcm.getToken().then(token => {
 *   backend.registerToken(token);
 * });
 *
 * this.fcm.onNotification().subscribe(data => {
 *   if(data.wasTapped){
 *     console.log("Received in background");
 *   } else {
 *     console.log("Received in foreground");
 *   };
 * });
 *
 * this.fcm.onTokenRefresh().subscribe(token => {
 *   backend.registerToken(token);
 * });
 *
 * this.fcm.unsubscribeFromTopic('marketing');
 *
 * ```
 * @interfaces
 * NotificationData
 */
@Plugin({
  pluginName: 'FCM',
  plugin: 'cordova-plugin-fcm-with-dependecy-updated',
  pluginRef: 'FCMPlugin',
  repo: 'https://github.com/andrehtissot/cordova-plugin-fcm-with-dependecy-updated',
  platforms: ['Android', 'iOS']
})
@Injectable({
  providedIn: 'root'
})
export class FCM extends IonicNativePlugin {
  /**
   * Gets device's current registration id
   *
   * @returns {Promise<string>} Returns a Promise that resolves with the registration id token
   */
  @Cordova()
  getToken(): Promise<string> {
    return;
  }

  /**
   * Event firing on the token refresh
   *
   * @returns {Observable<string>} Returns an Observable that notifies with the change of device's registration id
   */
  @Cordova({
    observable: true
  })
  onTokenRefresh(): Observable<string> {
    return;
  }

  /**
   * Subscribes you to a [topic](https://firebase.google.com/docs/notifications/android/console-topics)
   *
   * @param {string} topic Topic to be subscribed to
   *
   * @returns {Promise<any>} Returns a promise resolving in result of subscribing to a topic
   */
  @Cordova()
  subscribeToTopic(topic: string): Promise<any> {
    return;
  }

  /**
   * Unsubscribes you from a [topic](https://firebase.google.com/docs/notifications/android/console-topics)
   *
   * @param {string} topic Topic to be unsubscribed from
   *
   * @returns {Promise<any>} Returns a promise resolving in result of unsubscribing from a topic
   */
  @Cordova()
  unsubscribeFromTopic(topic: string): Promise<any> {
    return;
  }

  /**
   * Watch for incoming notifications
   *
   * @returns {Observable<any>} returns an object with data from the notification
   */
  @Cordova({
    observable: true,
    successIndex: 0,
    errorIndex: 2
  })
  onNotification(): Observable<NotificationData> {
    return;
  }
}
