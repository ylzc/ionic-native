import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

/**
 * @name File Opener
 * @description
 * This plugin will open a file on your device file system with its default application.
 *
 * @usage
 * ```typescript
 * import { FileOpener } from '@ionic-native/file-opener/ngx';
 *
 * constructor(private fileOpener: FileOpener) { }
 *
 * ...
 *
 * this.fileOpener.open('path/to/file.pdf', 'application/pdf')
 *   .then(() => console.log('File is opened'))
 *   .catch(e => console.log('Error opening file', e));
 *
 * ```
 */
@Plugin({
  pluginName: 'FileOpener',
  plugin: 'cordova-plugin-file-opener2',
  pluginRef: 'cordova.plugins.fileOpener2',
  repo: 'https://github.com/pwlin/cordova-plugin-file-opener2',
  platforms: ['Android', 'iOS', 'Windows', 'Windows Phone 8']
})
@Injectable({
  providedIn: 'root'
})
export class FileOpener extends IonicNativePlugin {
  /**
   * Open an file
   * @param {string} filePath File Path
   * @param {string} fileMIMEType File MIME Type
   * @returns {Promise<any>}
   */
  @Cordova({
    callbackStyle: 'object',
    successName: 'success',
    errorName: 'error'
  })
  open(filePath: string, fileMIMEType: string): Promise<any> {
    return;
  }

  /**
   * Uninstalls a package
   * @param {string} packageId Package ID
   * @returns {Promise<any>}
   */
  @Cordova({
    callbackStyle: 'object',
    successName: 'success',
    errorName: 'error'
  })
  uninstall(packageId: string): Promise<any> {
    return;
  }

  /**
   * Check if an app is already installed
   * @param {string} packageId Package ID
   * @returns {Promise<any>}
   */
  @Cordova({
    callbackStyle: 'object',
    successName: 'success',
    errorName: 'error'
  })
  appIsInstalled(packageId: string): Promise<any> {
    return;
  }
}
