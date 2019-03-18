import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Injectable } from '@angular/core';

/**
 * @name App Minimize
 * @description
 * AppMinimize is a plugin to minimize the application on android devices
 *
 * @usage
 * ```typescript
 * import { Platfrom } from '@ionic/angular';
 * import { AppMinimize } from '@ionic-native/app-minimize/ngx';
 *
 *
 * constructor(private platform: Platform, private appMinimize: AppMinimize) { }
 *
 * ...
 *
 * this.platform.registerBackButtonAction(() => {
 *    this.appMinimize.minimize();
 * });
 *
 * ```
 */
@Plugin({
  pluginName: 'AppMinimize',
  plugin: 'cordova-plugin-appminimize',
  pluginRef: 'plugins.appMinimize',
  repo: 'https://github.com/tomloprod/cordova-plugin-appminimize',
  platforms: ['Android']
})
@Injectable({
  providedIn: 'root'
})
export class AppMinimize extends IonicNativePlugin {

  /**
   * Minimizes the application
   * @return {Promise<any>}
   */
  @Cordova()
  minimize(): Promise<any> {
    return;
  }

}
