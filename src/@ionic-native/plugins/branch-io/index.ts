import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

export interface BranchIoPromise {
  $identity_id?: number;
  $one_time_use?: boolean;
  '+click_timestamp'?: number;
  '+clicked_branch_link'?: boolean;
  '+is_first_session'?: boolean;
  '+match_guaranteed'?: boolean;
  contentMetadata?: string;
  source?: string;
  '~campaign'?: string;
  '~channel'?: string;
  '~creation_source'?: string;
  '~feature'?: string;
  '~id'?: number;
  '~referring_link:'?: string;
  [x: string]: any;
}

export interface BranchIoAnalytics {
  channel?: string;
  feature?: string;
  campaign?: string;
  stage?: string;
  tags?: string[];
  [x: string]: any;
}

export interface BranchIoProperties {
  contentMetadata?: {
    [x: string]: any;
  };
  [x: string]: any;
}

export interface BranchUniversalObject {
  generateShortUrl(
    analytics: BranchIoAnalytics,
    properties: BranchIoProperties
  ): Promise<any>;
  registerView(): Promise<any>;
  showShareSheet(
    analytics: BranchIoAnalytics,
    properties: BranchIoProperties,
    shareText: string
  ): Promise<any>;
  onShareSheetLaunched(callback: any): void;
  onShareSheetDismissed(callback: any): void;
  onLinkShareResponse(callback: any): void;
  onChannelSelected(callback: any): void;
  listOnSpotlight(): Promise<any>;
}

/**
 * @name BranchIo
 * @description
 * Branch.io is an attribution service for deeplinking and invitation links
 *
 * @usage
 * ```
 * import { BranchIo } from '@ionic-native/branch-io/ngx';
 *
 *
 * constructor(private branch: BranchIo) { }
 *
 * ```
 *
 * @interfaces
 * BranchIoPromise
 * BranchIoAnalytics
 * BranchIoProperties
 * BranchUniversalObject
 *
 */
@Plugin({
  pluginName: 'BranchIo',
  plugin: 'branch-cordova-sdk',
  pluginRef: 'Branch',
  repo:
    'https://github.com/BranchMetrics/cordova-ionic-phonegap-branch-deep-linking',
  platforms: ['iOS', 'Android']
})
@Injectable({
  providedIn: 'root'
})
export class BranchIo extends IonicNativePlugin {
  /**
   * for development and debugging only
   * @param {boolean} enable Enable debug
   * @return {Promise<any>}
   */
  @Cordova({ otherPromise: true })
  setDebug(enable: boolean): Promise<any> {
    return;
  }

  /**
   * Disable tracking
   * @param {boolean} disable disable tracking
   * @return {Promise<any>}
   */
  @Cordova({ otherPromise: true })
  disableTracking(disable: boolean): Promise<any> {
    return;
  }

  /**
   * Initializes Branch
   * @return {Promise<any>}
   */
  @Cordova({ otherPromise: true })
  initSession(): Promise<BranchIoPromise> {
    return;
  }

  /**
   * Set Request Metadata
   * @return {Promise<any>}
   */
  @Cordova({ otherPromise: true })
  setRequestMetadata(): Promise<any> {
    return;
  }

  /**
   * for better Android matching
   * @param {string} linkDomain LinkDomain at branch
   * @return {Promise<any>}
   */
  @Cordova({ otherPromise: true })
  setCookieBasedMatching(linkDomain: string): Promise<any> {
    return;
  }

  /**
   * First data
   * @return {Promise<any>}
   */
  @Cordova({ otherPromise: true })
  getFirstReferringParams(): Promise<any> {
    return;
  }

  /**
   * Latest data
   * @return {Promise<any>}
   */
  @Cordova({ otherPromise: true })
  getLatestReferringParams(): Promise<any> {
    return;
  }

  /**
   * Set identy of user
   * @param {string} userId
   * @return {Promise<any>}
   */
  @Cordova({ otherPromise: true })
  setIdentity(userId: string): Promise<any> {
    return;
  }

  /**
   * Logout user
   * @return {Promise<any>}
   */
  @Cordova({ otherPromise: true })
  logout(): Promise<any> {
    return;
  }

  /**
   * Registers a custom event
   * @param {string} eventName
   * @param {any} metaData
   * @return {Promise<any>}
   */
  @Cordova({ otherPromise: true })
  userCompletedAction(eventName: string, metaData: any): Promise<any> {
    return;
  }

  /**
   * Send Commerce Event
   * @param {string} event
   * @param {any} metaData
   * @return {Promise<any>}
   */
  @Cordova({ otherPromise: true })
  sendCommerceEvent(event: string, metaData: any): Promise<any> {
    return;
  }

  /**
   * create a branchUniversalObj variable to reference with other Branch methods
   * @param {BranchIoProperties} properties
   * @return {Promise<BranchUniversalObject>}
   */
  @Cordova({ otherPromise: true })
  createBranchUniversalObject(
    properties: BranchIoProperties
  ): Promise<BranchUniversalObject> {
    return;
  }

  /**
   * Load credits
   * @param {any} bucket
   * @return {Promise<any>}
   */
  @Cordova({ otherPromise: true })
  loadRewards(bucket: any): Promise<any> {
    return;
  }

  /**
   * Redeem Rewards
   * @param {string} value
   * @param {any} bucket
   * @return {Promise<any>}
   */
  @Cordova({ otherPromise: true })
  redeemRewards(value: string, bucket: any): Promise<any> {
    return;
  }

  /**
   * Show credit history
   * @return {Promise<any>}
   */
  @Cordova({ otherPromise: true })
  creditHistory(): Promise<any> {
    return;
  }
}
