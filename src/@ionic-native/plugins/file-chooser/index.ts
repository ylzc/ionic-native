import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

/**
 * @name File Chooser
 * @description
 *
 * Opens the file picker on Android for the user to select a file, returns a file URI.
 *
 * @usage
 * ```typescript
 * import { FileChooser } from '@ionic-native/file-chooser/ngx';
 *
 * constructor(private fileChooser: FileChooser) { }
 *
 * ...
 *
 * this.fileChooser.open()
 *   .then(uri => console.log(uri))
 *   .catch(e => console.log(e));
 *
 * ```
 */
@Plugin({
  pluginName: 'FileChooser',
  plugin: 'cordova-plugin-filechooser',
  pluginRef: 'fileChooser',
  repo: 'https://github.com/ihadeed/cordova-filechooser',
  platforms: ['Android']
})
@Injectable({
  providedIn: 'root'
})
export class FileChooser extends IonicNativePlugin {

  /**
   * Open a file
   * @returns {Promise<string>}
   */
  @Cordova()
  open(): Promise<string> {
    return;
  }

}
