import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Injectable } from '@angular/core';

/**
 * @name Intercom
 * @description
 * This is a plugin that allows your Ionic app to use Intercom for iOS and/or Intercom for Android.
 * Follow the offical documentation to setup this plugin correctly: https://developers.intercom.com/docs/cordova-phonegap-configuration
 *
 * @usage
 * ```typescript
 * import { Intercom } from '@ionic-native/intercom/ngx';
 *
 *
 * constructor(private intercom: Intercom) { }
 *
 * ...
 *
 * this.intercom.registerUnidentifiedUser();
 * ...
 * this.intercom.registerForPush();
 *
 * ```
 */
@Plugin({
  pluginName: 'Intercom',
  plugin: 'cordova-plugin-intercom',
  pluginRef: 'intercom',
  repo: 'https://github.com/intercom/intercom-cordova',
  platforms: ['Android', 'iOS'],
})
@Injectable({
  providedIn: 'root'
})
export class Intercom extends IonicNativePlugin {

  /**
   * Register a identified user
   * @param options {any} Options
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  registerIdentifiedUser(options: any): Promise<any> {
    return;
  }

  /**
   * Register a unidentified user
   * @param options {any} Options
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  registerUnidentifiedUser(options: any): Promise<any> {
    return;
  }

  /**
   * This resets the Intercom integration's cache of your user's identity and wipes the slate clean.
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  reset(): Promise<any> {
    return;
  }

  /**
   *
   * @param secureHash {string}
   * @param secureData {any}
   * @return {Promise<any>} Returns a promise
   * @deprecated Use setUserHash instead as of Intercom Cordova 4.0.0 and higher https://github.com/intercom/intercom-cordova/blob/master/CHANGELOG.md#400-2017-08-29
   */
  @Cordova()
  setSecureMode(secureHash: string, secureData: any): Promise<any> {
    return;
  }

  /**
   *
   * @param secureHash {string}
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  setUserHash(secureHash: string): Promise<any> {
    return;
  }

  /**
   *
   * @param attributes {any}
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  updateUser(attributes: any): Promise<any> {
    return;
  }

  /**
   *
   * @param eventName {string}
   * @param metaData {any}
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  logEvent(eventName: string, metaData: any): Promise<any> {
    return;
  }

  /**
   *
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  displayMessenger(): Promise<any> {
    return;
  }

  /**
   *
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  displayMessageComposer(): Promise<any> {
    return;
  }

  /**
   *
   * @param initialMessage {string}
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  displayMessageComposerWithInitialMessage(initialMessage: string): Promise<any> {
    return;
  }

  /**
   *
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  displayConversationsList(): Promise<any> {
    return;
  }

  /**
   *
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  unreadConversationCount(): Promise<any> {
    return;
  }

  /**
   *
   * @param visibility {string}
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  setLauncherVisibility(visibility: string): Promise<any> {
    return;
  }

  /**
   *
   * @param visibility {string}
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  setInAppMessageVisibility(visibility: string): Promise<any> {
    return;
  }

  /**
   *
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  hideMessenger(): Promise<any> {
    return;
  }

  /**
   *
   * @return {Promise<any>} Returns a promise
   */
  @Cordova()
  registerForPush(): Promise<any> {
    return;
  }

}
