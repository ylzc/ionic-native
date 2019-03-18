import { Cordova, CordovaProperty, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Injectable } from '@angular/core';

export interface Licenses {
  ios: string;
  android: string;
}

export enum BarcodeType {
  None = 1,
  QRCode = 2,
  DataMatrix = 3,
  UPCE = 4,
  UPCA = 5,
  EAN8 = 6,
  EAN13 = 7,
  Code128 = 8,
  Code39 = 9,
  ITF = 10,
  Aztec = 11,
  PDF417 = 12
}

export enum RecognizerResultState {
  empty = 1,
  uncertain = 2,
  valid = 3
}

export enum MrtdDocumentType {
  Unknown = 1,
  IdentityCard = 2,
  Passport = 3,
  Visa = 4,
  GreenCard = 5,
  MalaysianPassIMM13P = 6
}

export enum EudlCountry {
  UK = 1,
  Germany = 2,
  Austria = 3,
  Automatic = 4
}

export enum DocumentFaceDetectorType {
  TD1 = 1,
  TD2 = 2,
  PassportsAndVisas = 3
}

export enum UsdlKeys {
  DocumentType = 0,
  StandardVersionNumber = 1,
  CustomerFamilyName = 2,
  CustomerFirstName = 3,
  CustomerFullName = 4,
  DateOfBirth = 5,
  Sex = 6,
  EyeColor = 7,
  AddressStreet = 8,
  AddressCity = 9,
  AddressJurisdictionCode = 10,
  AddressPostalCode = 11,
  FullAddress = 12,
  Height = 13,
  HeightIn = 14,
  HeightCm = 15,
  CustomerMiddleName = 16,
  HairColor = 17,
  NameSuffix = 18,
  AKAFullName = 19,
  AKAFamilyName = 20,
  AKAGivenName = 21,
  AKASuffixName = 22,
  WeightRange = 23,
  WeightPounds = 24,
  WeightKilograms = 25,
  CustomerIdNumber = 26,
  FamilyNameTruncation = 27,
  FirstNameTruncation = 28,
  MiddleNameTruncation = 29,
  PlaceOfBirth = 30,
  AddressStreet2 = 31,
  RaceEthnicity = 32,
  NamePrefix = 33,
  CountryIdentification = 34,
  ResidenceStreetAddress = 35,
  ResidenceStreetAddress2 = 36,
  ResidenceCity = 37,
  ResidenceJurisdictionCode = 38,
  ResidencePostalCode = 39,
  ResidenceFullAddress = 40,
  Under18 = 41,
  Under19 = 42,
  Under21 = 43,
  SocialSecurityNumber = 44,
  AKASocialSecurityNumber = 45,
  AKAMiddleName = 46,
  AKAPrefixName = 47,
  OrganDonor = 48,
  Veteran = 49,
  AKADateOfBirth = 50,
  IssuerIdentificationNumber = 51,
  DocumentExpirationDate = 52,
  JurisdictionVersionNumber = 53,
  JurisdictionVehicleClass = 54,
  JurisdictionRestrictionCodes = 55,
  JurisdictionEndorsementCodes = 56,
  DocumentIssueDate = 57,
  FederalCommercialVehicleCodes = 58,
  IssuingJurisdiction = 59,
  StandardVehicleClassification = 60,
  IssuingJurisdictionName = 61,
  StandardEndorsementCode = 62,
  StandardRestrictionCode = 63,
  JurisdictionVehicleClassificationDescription = 64,
  JurisdictionEndorsmentCodeDescription = 65,
  JurisdictionRestrictionCodeDescription = 66,
  InventoryControlNumber = 67,
  CardRevisionDate = 68,
  DocumentDiscriminator = 69,
  LimitedDurationDocument = 70,
  AuditInformation = 71,
  ComplianceType = 72,
  IssueTimestamp = 73,
  PermitExpirationDate = 74,
  PermitIdentifier = 75,
  PermitIssueDate = 76,
  NumberOfDuplicates = 77,
  HAZMATExpirationDate = 78,
  MedicalIndicator = 79,
  NonResident = 80,
  UniqueCustomerId = 81,
  DataDiscriminator = 82,
  DocumentExpirationMonth = 83,
  DocumentNonexpiring = 84,
  SecurityVersion = 85
}

export interface ImageExtensionFactors {
  upFactor: number;
  rightFactor: number;
  downFactor: number;
  leftFactor: number;
}

export interface Date {
  day: string;
  month: string;
  year: string;
}
export interface DateCtor {
  new (nativeDate: Date): Date;
}

export interface Point {
  x: string;
  y: string;
}
export interface PointCtor {
  new (nativePoint: Point): Point;
}

export interface Quadrilateral {
  upperLeft: string;
  upperRight: string;
  lowerLeft: string;
  lowerRight: string;
}
export interface QuadrilateralCtor {
  new (nativeQuad: Quadrilateral): Quadrilateral;
}

export interface OverlaySettings {
  overlaySettingsType: string;
}

export interface BarcodeOverlaySettings extends OverlaySettings {}
export interface BarcodeOverlaySettingsCtor {
  new(): BarcodeOverlaySettings;
}

export interface DocumentOverlaySettings extends OverlaySettings {}
export interface DocumentOverlaySettingsCtor {
  new(): DocumentOverlaySettings;
}

export interface DocumentVerificationOverlaySettings extends OverlaySettings {
  firstSideSplashMessage: string;
  secondSideSplashMessage: string;
  scanningDoneSplashMessage: string;
  firstSideInstructions: string;
  secondSideInstructions: string;
  glareMessage: string;
}
export interface DocumentVerificationOverlaySettingsCtor {
  new(): DocumentVerificationOverlaySettings;
}

export interface RecognizerResult {
  resultState: RecognizerResultState;
}

export interface RecognizerResultCtor<T extends RecognizerResult> {
  new (nativeResult: any): T;
}

export interface Recognizer<T extends RecognizerResult = any> {
  recognizerType: string;
  result: T;
  createResultFromNative(nativeResult: any): T;
}

export interface RecognizerCtor<T extends Recognizer> {
  new (): T;
}

export interface RecognizerCollection {
  recognizerArray: Recognizer[];
  allowMultipleResults: boolean;
  // sic
  milisecondsBeforeTimeout: number;
}
export interface RecognizerCollectionCtor {
  new (recognizerCollection: Recognizer[]): RecognizerCollection;
}

export interface BarcodeRecognizerResult extends RecognizerResult {
  barcodeType: BarcodeType;
  rawData: string;
  stringData: string;
  uncertain: boolean;
}
export interface BarcodeRecognizerResultCtor extends RecognizerResultCtor<BarcodeRecognizerResult> {}

export interface BarcodeRecognizer extends Recognizer<BarcodeRecognizerResult> {
  autoScaleDetection: boolean;
  nullQuietZoneAllowed: boolean;
  readCode39AsExtendedData: boolean;
  scanAztecCode: boolean;
  scanCode128: boolean;
  scanCode39: boolean;
  scanDataMatrix: boolean;
  scanEan13: boolean;
  scanEan8: boolean;
  scanInverse: boolean;
  scanItf: boolean;
  scanPdf417: boolean;
  scanQrCode: boolean;
  scanUncertain: boolean;
  scanUpca: boolean;
  scanUpce: boolean;
  slowerThoroughScan: boolean;
}
export interface BarcodeRecognizerCtor extends RecognizerCtor<BarcodeRecognizer> {}

export interface MrzResult {
  documentType: string;
  primaryId: string;
  secondaryId: string;
  issuer: string;
  dateOfBirth: Date;
  documentNumber: string;
  nationality: string;
  gender: string;
  documentCode: string;
  dateOfExpiry: Date;
  opt1: string;
  opt2: string;
  alienNumber: string;
  applicationReceiptNumber: string;
  immigrantCaseNumber: string;
  mrzText: string;
  mrzParsed: boolean;
  mrzVerified: boolean;
}

export interface SuccessFrameGrabberRecognizerResult extends RecognizerResult {
  successFrame: string;
}
export interface SuccessFrameGrabberRecognizerResultCtor extends RecognizerResultCtor<SuccessFrameGrabberRecognizerResult> {}

export interface SuccessFrameGrabberRecognizer extends Recognizer<SuccessFrameGrabberRecognizerResult> {
  slaveRecognizer: Recognizer;
  createResultFromNative(nativeResult: { slaveRecognizerResult: any }): SuccessFrameGrabberRecognizerResult;
}
export interface SuccessFrameGrabberRecognizerCtor {
  new (recognizer: Recognizer): SuccessFrameGrabberRecognizer;
}

export interface AustraliaDlBackRecognizerResult extends RecognizerResult {
  address: string;
  dateOfExpiry: Date;
  fullDocumentImage: string;
  lastName: string;
  licenseNumber: string;
}
export interface AustraliaDlBackRecognizerResultCtor extends RecognizerResultCtor<AustraliaDlBackRecognizerResult> {}

export interface AustraliaDlBackRecognizer extends Recognizer<AustraliaDlBackRecognizerResult> {
  extractAddress: boolean;
  extractDateOfBirth: boolean;
  extractLastName: boolean;
  fullDocumentImageDpi: number;
  returnFullDocumentImage: boolean;
}
export interface AustraliaDlBackRecognizerCtor extends RecognizerCtor<AustraliaDlBackRecognizer> {}

export interface AustraliaDlFrontRecognizerResult extends RecognizerResult {
  address: string;
  dateOfBirth: Date;
  dateOfExpiry: Date;
  faceImage: string;
  fullDocumentImage: string;
  licenseNumber: string;
  licenseType: string;
  name: string;
  signatureImage: string;
}
export interface AustraliaDlFrontRecognizerResultCtor extends RecognizerResultCtor<AustraliaDlFrontRecognizerResult> {}

export interface AustraliaDlFrontRecognizer extends Recognizer<AustraliaDlFrontRecognizerResult> {
  extractAddress: boolean;
  extractDateOfBirth: boolean;
  extractDateOfExpiry: boolean;
  fullDocumentImageDpi: number;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
  returnSignatureImage: boolean;
}
export interface AustraliaDlFrontRecognizerCtor extends RecognizerCtor<AustraliaDlFrontRecognizer> {}

export interface AustriaCombinedRecognizerResult extends RecognizerResult {
  dateOfBirth: Date;
  dateOfExpiry: Date;
  dateOfIssuance: Date;
  digitalSignature: string;
  digitalSignatureVersion: string;
  documentDataMatch: boolean;
  documentNumber: string;
  eyeColor: string;
  faceImage: string;
  fullDocumentBackImage: string;
  fullDocumentFrontImage: string;
  givenName: string;
  height: string;
  issuingAuthority: string;
  mrtdVerified: boolean;
  nationality: string;
  placeOfBirth: string;
  principalResidence: string;
  scanningFirstSideDone: boolean;
  sex: string;
  signatureImage: string;
  surname: string;
}
export interface AustriaCombinedRecognizerResultCtor extends RecognizerResultCtor<AustriaCombinedRecognizerResult> {}

export interface AustriaCombinedRecognizer extends Recognizer<AustriaCombinedRecognizerResult> {
  detectGlare: boolean;
  extractDateOfBirth: boolean;
  extractDateOfExpiry: boolean;
  extractDateOfIssuance: boolean;
  extractDateOfIssue: boolean;
  extractGivenName: boolean;
  extractHeight: boolean;
  extractIssuingAuthority: boolean;
  extractNationality: boolean;
  extractPassportNumber: boolean;
  extractPlaceOfBirth: boolean;
  extractPrincipalResidence: boolean;
  extractSex: boolean;
  extractSurname: boolean;
  faceImageDpi: number;
  fullDocumentImageDpi: number;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
  signResult: boolean;
  signatureImageDpi: number;
}
export interface AustriaCombinedRecognizerCtor extends RecognizerCtor<AustriaCombinedRecognizer> {}

export interface AustriaDlFrontRecognizerResult extends RecognizerResult {
  dateOfBirth: Date;
  dateOfExpiry: Date;
  dateOfIssue: Date;
  faceImage: string;
  firstName: string;
  fullDocumentImage: string;
  issuingAuthority: string;
  licenseNumber: string;
  name: string;
  placeOfBirth: string;
  signatureImage: string;
  vehicleCategories: string;
}
export interface AustriaDlFrontRecognizerResultCtor extends RecognizerResultCtor<AustriaDlFrontRecognizerResult> {}

export interface AustriaDlFrontRecognizer extends Recognizer<AustriaDlFrontRecognizerResult> {
  detectGlare: boolean;
  extractDateOfBirth: boolean;
  extractDateOfExpiry: boolean;
  extractDateOfIssue: boolean;
  extractFirstName: boolean;
  extractIssuingAuthority: boolean;
  extractName: boolean;
  extractPlaceOfBirth: boolean;
  extractVehicleCategories: boolean;
  faceImageDpi: number;
  fullDocumentImageDpi: number;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
  returnSignatureImage: boolean;
  signatureImageDpi: number;
}
export interface AustriaDlFrontRecognizerCtor extends RecognizerCtor<AustriaDlFrontRecognizer> {}

export interface AustriaIdBackRecognizerResult extends RecognizerResult {
  dateOfIssuance: Date;
  documentNumber: string;
  eyeColor: string;
  fullDocumentImage: string;
  height: string;
  issuingAuthority: string;
  mrzResult: MrzResult;
  placeOfBirth: string;
  principalResidence: string;
}
export interface AustriaIdBackRecognizerResultCtor extends RecognizerResultCtor<AustriaIdBackRecognizerResult> {}

export interface AustriaIdBackRecognizer extends Recognizer<AustriaIdBackRecognizerResult> {
  detectGlare: boolean;
  extractDateOfIssuance: boolean;
  extractHeight: boolean;
  extractIssuingAuthority: boolean;
  extractPlaceOfBirth: boolean;
  extractPrincipalResidence: boolean;
  fullDocumentImageDpi: number;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  returnFullDocumentImage: boolean;
}
export interface AustriaIdBackRecognizerCtor extends RecognizerCtor<AustriaIdBackRecognizer> {}

export interface AustriaIdFrontRecognizerResult extends RecognizerResult {
  dateOfBirth: Date;
  documentNumber: string;
  faceImage: string;
  fullDocumentImage: string;
  givenName: string;
  sex: string;
  signatureImage: string;
  surname: string;
}
export interface AustriaIdFrontRecognizerResultCtor extends RecognizerResultCtor<AustriaIdBackRecognizerResult> {}

export interface AustriaIdFrontRecognizer extends Recognizer<AustriaIdFrontRecognizerResult> {
  detectGlare: boolean;
  extractDateOfBirth: boolean;
  extractGivenName: boolean;
  extractSex: boolean;
  extractSurname: boolean;
  faceImageDpi: number;
  fullDocumentImageDpi: number;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  returnFaceImage: boolean;
  returnSignatureImage: boolean;
  signatureImageDpi: number;
}
export interface AustriaIdFrontRecognizerCtor extends RecognizerCtor<AustriaIdFrontRecognizer> {}

export interface AustriaPassportRecognizerResult extends RecognizerResult {
  dateOfBirth: Date;
  dateOfExpiry: Date;
  dateOfIssuance: Date;
  faceImage: string;
  fullDocumentImage: string;
  givenName: string;
  height: string;
  issuingAuthority: string;
  mrzResult: MrzResult;
  nationality: string;
  passportNumber: string;
  placeOfBirth: string;
  sex: string;
  signatureImage: string;
  surname: string;
}
export interface AustriaPassportRecognizerResultCtor extends RecognizerResultCtor<AustriaPassportRecognizerResult> {}

export interface AustriaPassportRecognizer extends Recognizer<AustriaPassportRecognizerResult> {
  detectGlare: boolean;
  extractDateOfBirth: boolean;
  extractDateOfExpiry: boolean;
  extractDateOfIssue: boolean;
  extractGivenName: boolean;
  extractHeight: boolean;
  extractIssuingAuthority: boolean;
  extractNationality: boolean;
  extractPassportNumber: boolean;
  extractPlaceOfBirth: boolean;
  extractSex: boolean;
  faceImageDpi: number;
  fullDocumentImageDpi: number;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
  returnSignatureImage: boolean;
  signatureImageDpi: number;
}
export interface AustriaPassportRecognizerCtor extends RecognizerCtor<AustriaPassportRecognizer> {}

export interface ColombiaDlFrontRecognizerResult extends RecognizerResult {
  dateOfBirth: Date;
  dateOfIssue: Date;
  driverRestrictions: string;
  faceImage: string;
  fullDocumentImage: string;
  issuingAgency: string;
  licenseNumber: string;
  name: string;
}
export interface ColombiaDlFrontRecognizerResultCtor extends RecognizerResultCtor<ColombiaDlFrontRecognizerResult> {}

export interface ColombiaDlFrontRecognizer extends Recognizer<ColombiaDlFrontRecognizerResult> {
  detectGlare: boolean;
  extractDateOfBirth: boolean;
  extractDriverRestrictions: boolean;
  extractIssuingAgency: boolean;
  extractName: boolean;
  faceImageDpi: number;
  fullDocumentImageDpi: number;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
}

export interface ColombiaIdBackRecognizerResult extends RecognizerResult {
  birthDate: Date;
  bloodGroup: string;
  documentNumber: string;
  fingerprint: string;
  firstName: string;
  fullDocumentImage: string;
  lastName: string;
  sex: string;
}
export interface ColombiaIdBackRecognizerResultCtor extends Recognizer<ColombiaIdBackRecognizerResult> {}

export interface ColombiaIdBackRecognizer extends Recognizer<ColombiaIdBackRecognizerResult> {
  detectGlare: boolean;
  fullDocumentImageDpi: number;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  nullQuietZoneAllowed: boolean;
  returnFullDocumentImage: boolean;
  scanUncertain: boolean;
}
export interface ColombiaIdBackRecognizerCtor extends RecognizerCtor<ColombiaIdBackRecognizer> {}

export interface ColombiaIdFrontRecognizerResult extends RecognizerResult {
  documentNumber: string;
  faceImage: string;
  firstName: string;
  fullDocumentImage: string;
  lastName: string;
  signatureImage: string;
}
export interface ColombiaIdFrontRecognizerResultCtor extends Recognizer<ColombiaIdFrontRecognizerResult> {}

export interface ColombiaIdFrontRecognizer extends Recognizer<ColombiaIdFrontRecognizerResult> {
  detectGlare: boolean;
  extractFirstName: boolean;
  extractLastName: boolean;
  faceImageDpi: number;
  fullDocumentImageDpi: number;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
  returnSignatureImage: boolean;
  signatureImageDpi: number;
}
export interface ColombiaIdFrontRecognizerCtor extends RecognizerCtor<ColombiaIdFrontRecognizer> {}

export interface CroatiaCombinedRecognizerResult extends RecognizerResult {
  address: string;
  citizenship: string;
  dateOfBirth: Date;
  dateOfExpiry: Date;
  dateOfExpiryPermanent: Date;
  dateOfIssue: Date;
  digitalSignature: string;
  digitalSignatureVersion: string;
  documentBilingual: boolean;
  documentDataMatch: string;
  faceImage: string;
  firstName: string;
  fullDocumentBackImage: string;
  fullDocumentFrontImage: string;
  identityCardNumber: string;
  issuingAuthority: string;
  lastName: string;
  mrzVerified: boolean;
  nonResident: boolean;
  personalIdentificationNumber: string;
  scanningFirstSideDone: boolean;
  sex: string;
  signatureImage: string;
}
export interface CroatiaCombinedRecognizerResultCtor extends RecognizerResultCtor<CroatiaCombinedRecognizerResult> {}

export interface CroatiaCombinedRecognizer extends Recognizer<CroatiaCombinedRecognizerResult> {
  detectGlare: boolean;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
  returnSignatureImage: boolean;
  signResult: boolean;
}

export interface CroatiaIdBackRecognizerResult extends RecognizerResult {
  dateOfExpiryPermanent: boolean;
  dateOfIssue: Date;
  documentForNonResident: boolean;
  fullDocumentImage: string;
  issuedBy: string;
  mrzResult: MrzResult;
  residence: string;
}
export interface CroatiaIdBackRecognizerResultCtor extends RecognizerResultCtor<CroatiaIdBackRecognizerResult> {}

export interface CroatiaIdBackRecognizer extends Recognizer<CroatiaIdBackRecognizerResult> {
  detectGlare: boolean;
  extractDateOfIssue: boolean;
  extractIssuedBy: boolean;
  extractResidence: boolean;
  fullDocumentImageDpi: number;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  returnFullDocumentImage: boolean;
}

export interface CroatiaIdFrontRecognizerResult extends RecognizerResult {
  citizenship: string;
  dateOfBirth: Date;
  dateOfExpiry: Date;
  dateOfExpiryPermanent: boolean;
  documentBilingual: boolean;
  documentNumber: string;
  faceImage: string;
  firstName: string;
  fullDocumentImage: string;
  lastName: string;
  sex: string;
  signatureImage: string;
}
export interface CroatiaIdFrontRecognizerResultCtor extends RecognizerResultCtor<CroatiaIdFrontRecognizerResult> {}

export interface CroatiaIdFrontRecognizer extends Recognizer<CroatiaIdFrontRecognizerResult> {
  detectGlare: boolean;
  extractCitizenship: boolean;
  extractDateOfBirth: boolean;
  extractDateOfExpiry: boolean;
  extractFirstName: boolean;
  extractLastName: boolean;
  extractSex: boolean;
  faceImageDpi: number;
  fullDocumentImageDpi: number;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
  returnSignatureImage: boolean;
  signatureImageDpi: number;
}

export interface CyprusIdBackRecognizerResult extends RecognizerResult {
  dateOfBirth: Date;
  expiresOn: Date;
  fullDocumentImage: string;
  sex: string;
}
export interface CyprusIdBackRecognizerResultCtor extends RecognizerResultCtor<CyprusIdBackRecognizerResult> {}

export interface CyprusIdBackRecognizer extends Recognizer<CyprusIdBackRecognizerResult> {
  detectGlare: boolean;
  extractExpiresOn: boolean;
  extractSex: boolean;
  fullDocumentImageDpi: number;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  returnFullDocumentImage: boolean;
}
export interface CyprusIdBackRecognizerCtor extends RecognizerCtor<CyprusIdBackRecognizer> {}

export interface CyprusIdFrontRecognizerResult extends RecognizerResult {
  documentNumber: string;
  faceImage: string;
  fullDocumentImage: string;
  idNumber: string;
  name: string;
  surname: string;
}
export interface CyprusIdFrontRecognizerResultCtor extends RecognizerResultCtor<CyprusIdFrontRecognizerResult> {}

export interface CyprusIdFrontRecognizer extends Recognizer<CyprusIdFrontRecognizerResult> {
  detectGlare: boolean;
  extractDocumentNumber: boolean;
  extractName: boolean;
  extractSurname: boolean;
  faceImageDpi: number;
  fullDocumentImageDpi: number;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
}
export interface CyprusIdFrontRecognizerCtor extends RecognizerCtor<CyprusIdFrontRecognizer> {}

export interface CzechiaCombinedRecognizerResult extends RecognizerResult {
  address: string;
  dateOfBirth: Date;
  dateOfExpiry: Date;
  dateOfIssue: Date;
  digitalSignature: string;
  digitalSignatureVersion: string;
  documentDataMatch: boolean;
  faceImage: string;
  firstName: string;
  fullDocumentBackImage: string;
  fullDocumentFrontImage: string;
  identityCardNumber: string;
  issuingAuthority: string;
  lastName: string;
  mrzVerified: boolean;
  nationality: string;
  personalIdentificationNumber: string;
  placeOfBirth: string;
  scanningFirstSideDone: boolean;
  sex: string;
  signatureImage: string;
}
export interface CzechiaCombinedRecognizerResultCtor extends RecognizerResultCtor<CzechiaCombinedRecognizerResult> {}

export interface CzechiaCombinedRecognizer extends Recognizer<CzechiaCombinedRecognizerResult> {
  detectGlare: boolean;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
  signResult: boolean;
}

export interface CzechiaIdBackRecognizerResult extends RecognizerResult {
  authority: string;
  dateOfBirth: Date;
  dateOfExpiry: Date;
  documentCode: string;
  documentNumber: string;
  fullDocumentImage: string;
  issuer: string;
  mrzParsed: boolean;
  mrzText: string;
  mrzVerified: boolean;
  nationality: string;
  opt1: string;
  opt2: string;
  permanentStay: string;
  personalNumber: string;
  primaryId: string;
  secondaryId: string;
  sex: string;
}
export interface CzechiaIdBackRecognizerResultCtor extends RecognizerResultCtor<CzechiaIdBackRecognizerResult> {}

export interface CzechiaIdBackRecognizer extends Recognizer<CzechiaIdBackRecognizerResult> {
  detectGlare: boolean;
  extractAuthority: boolean;
  extractPermanentStay: boolean;
  extractPersonalNumber: boolean;
  returnFullDocumentImage: boolean;
}

export interface CyprusIdFrontRecognizerResult extends RecognizerResult {
  dateOfBirth: Date;
  dateOfExpiry: Date;
  dateOfIssue: Date;
  faceImage: string;
  firstName: string;
  fullDocumentImage: string;
  identityCardNumber: string;
  lastName: string;
  placeOfBirth: string;
  sex: string;
  signatureImage: string;
}
export interface CyprusIdFrontRecognizerResultCtor extends RecognizerResultCtor<CyprusIdFrontRecognizerResult> {}

export interface CyprusIdFrontRecognizer extends Recognizer<CyprusIdFrontRecognizerResult> {
  detectGlare: boolean;
  extractDateOfBirth: boolean;
  extractDateOfExpiry: boolean;
  extractDateOfIssue: boolean;
  extractGivenNames: boolean;
  extractPlaceOfBirth: boolean;
  extractSex: boolean;
  extractSurname: boolean;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
  returnSignatureImage: boolean;
}
export interface CyprusIdFrontRecognizerCtor extends RecognizerCtor<CyprusIdFrontRecognizer> {}

export interface DocumentFaceRecognizerResult extends RecognizerResult {
  documentLocation: string;
  faceImage: string;
  faceLocation: Quadrilateral;
  fullDocumentImage: string;
}
export interface DocumentFaceRecognizerResultCtor extends RecognizerResultCtor<DocumentFaceRecognizerResult> {}

export interface DocumentFaceRecognizer extends Recognizer<DocumentFaceRecognizerResult> {
  detectorType: DocumentFaceDetectorType.TD1;
  faceImageDpi: number;
  fullDocumentImage: number;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  numStableDetectionsThreshold: number;
  returnFaceImage: boolean;
}

export interface EgyptIdFrontRecognizerResult extends RecognizerResult {
  documentNumber: string;
  faceImage: string;
  fullDocumentImage: string;
  nationalNumber: string;
}
export interface EgyptIdFrontRecognizerResultCtor extends RecognizerResultCtor<EgyptIdFrontRecognizerResult> {}

export interface EgyptIdFrontRecognizer extends Recognizer<EgyptIdFrontRecognizerResult> {
  detectGlare: boolean;
  extractNationalNumber: boolean;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
}
export interface EgyptIdFrontRecognizerCtor extends RecognizerCtor<EgyptIdFrontRecognizer> {}

export interface ElitePaymentCardBackRecognizerResult extends RecognizerResult {
  cardNumber: string;
  cvv: string;
  fullDocumentImage: string;
  inventoryNumber: string;
  validThru: Date;
}
export interface ElitePaymentCardBackRecognizerResultCtor extends RecognizerResultCtor<ElitePaymentCardBackRecognizerResult> {}

export interface ElitePaymentCardBackRecognizer extends Recognizer<ElitePaymentCardBackRecognizerResult> {
  anonymizeCardNumber: boolean;
  anonymizeCvv: boolean;
  detectGlare: boolean;
  extractCvv: boolean;
  extractInventoryNumber: boolean;
  extractValidThru: boolean;
  fullDocumentImageDpi: number;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  returnFullDocumentImage: boolean;
}

export interface ElitePaymentCardCombinedRecognizerResult extends RecognizerResult {
  cardNumber: string;
  cvv: string;
  digitalSignature: string;
  digitalSignatureVersion: string;
  documentDataMatch: boolean;
  fullDocumentImage: string;
  fullDocumentFrontImage: string;
  inventoryNumber: string;
  owner: string;
  scanningFirstSideDone: boolean;
  validThru: Date;
}
export interface ElitePaymentCardCombinedRecognizerResultCtor extends RecognizerResultCtor<ElitePaymentCardCombinedRecognizerResult> {}

export interface ElitePaymentCardCombinedRecognizer extends Recognizer<ElitePaymentCardCombinedRecognizerResult> {
  anonymizeCardNumber: boolean;
  anonymizeCvv: boolean;
  detectGlare: boolean;
  extractCvv: boolean;
  extractInventoryNumber: boolean;
  extractOwner: boolean;
  extractValidThru: boolean;
  fullDocumentImageDpi: number;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  returnFullDocumentImage: boolean;
  signResult: boolean;
}

export interface ElitePaymentCardFrontRecognizerResult extends RecognizerResult {
  fullDocumentImage: string;
  owner: string;
}
export interface ElitePaymentCardFrontRecognizerResultCtor extends RecognizerResultCtor<ElitePaymentCardFrontRecognizerResult> {}

export interface ElitePaymentCardFrontRecognizer extends Recognizer<ElitePaymentCardFrontRecognizerResult> {
  anonymizeOwner: boolean;
  detectGlare: boolean;
  extractOwner: boolean;
  fullDocumentImageDpi: number;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
}

export interface EudlRecognizerResult extends RecognizerResult {
  address: string;
  birthData: string;
  country: string;
  driverNumber: string;
  expiryDate: Date;
  faceImage: string;
  firstName: string;
  fullDocumentImage: string;
  issueDate: Date;
  issuingAuthority: string;
  lastName: string;
  personalNumber: string;
}
export interface EudlRecognizerResultCtor extends RecognizerResultCtor<EudlRecognizerResult> {}

export interface EudlRecognizer extends Recognizer<EudlRecognizerResult> {
  country: EudlCountry.Automatic;
  extractAddress: boolean;
  extractDateOfExpiry: boolean;
  extractDateOfIssue: boolean;
  extractIssuingAuthority: boolean;
  extractPersonalNumber: boolean;
  faceImageDpi: number;
  fullDocumentImageDpi: number;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
}

export interface GermanyCombinedRecognizerResult extends RecognizerResult {
  address: string;
  canNumber: string;
  dateOfBirth: Date;
  dateOfExpiry: Date;
  dateOfIssue: Date;
  digitalSignature: string;
  digitalSignatureVersion: string;
  documentDataMatch: boolean;
  eyeColor: string;
  faceImage: string;
  firstName: string;
  fullDocumentBackImage: string;
  fullDocumentFrontImage: string;
  height: string;
  identityCardNumber: string;
  issuingAuthority: string;
  lastName: string;
  mrzVerified: boolean;
  nationality: string;
  placeOfBirth: string;
  scanningFirstSideDone: boolean;
  sex: boolean;
  signatureImage: string;
}
export interface GermanyCombinedRecognizerResultCtor extends RecognizerResultCtor<GermanyCombinedRecognizerResult> {}

export interface GermanyCombinedRecognizer extends Recognizer<GermanyCombinedRecognizerResult> {
  detectGlare: boolean;
  extractAddress: boolean;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
  returnSignatureImage: boolean;
  signResult: boolean;
}
export interface GermanyCombinedRecognizerCtor extends RecognizerCtor<GermanyCombinedRecognizer> {}

export interface GermanyDlBackRecognizerResult extends RecognizerResult {
  dateOfIssueB10: string;
  dateOfIssueB10NotSpecified: boolean;
  fullDocumentImage: string;
}
export interface GermanyDlBackRecognizerResultCtor extends RecognizerResultCtor<GermanyDlBackRecognizerResult> {}

export interface GermanyDlBackRecognizer extends Recognizer<GermanyDlBackRecognizerResult> {
  detectGlare: boolean;
  fullDocumentImageDpi: number;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  returnFullDocumentImage: boolean;
}
export interface GermanyDlBackRecognizerCtor extends RecognizerCtor<GermanyDlBackRecognizer> {}

export interface GermanyIdBackRecognizerResult extends RecognizerResult {
  address: string;
  addressCity: string;
  addressHouseNumber: string;
  addressStreet: string;
  addressZipCode: string;
  authority: string;
  dateOfBirth: Date;
  dateOfExpiry: Date;
  dateOfIssue: Date;
  documentCode: string;
  documentNumber: string;
  eyeColour: string;
  fullDocumentImage: string;
  height: string;
  issuer: string;
  mrzParsed: boolean;
  mrzText: string;
  mrzVerified: boolean;
  nationality: string;
  opt1: string;
  opt2: string;
  primaryId: string;
  secondaryId: string;
  sex: string;
}
export interface GermanyIdBackRecognizerResultCtor extends RecognizerResultCtor<GermanyIdBackRecognizerResult> {}

export interface GermanyIdBackRecognizer extends Recognizer<GermanyIdBackRecognizerResult> {
  detectGlare: boolean;
  extractAddress: boolean;
  extractDateOfIssue: boolean;
  extractEyeColour: boolean;
  extractHeight: boolean;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  returnFullDocumentImage: boolean;
}
export interface GermanyIdBackRecognizerCtor extends RecognizerCtor<GermanyIdBackRecognizer> {}

export interface GermanyIdFrontRecognizerResult extends RecognizerResult {
  canNumber: string;
  dateOfBirth: Date;
  dateOfExpiry: Date;
  documentNumber: string;
  faceImage: string;
  fullDocumentImage: string;
  givenNames: string;
  nationality: string;
  placeOfBirth: string;
  signatureImage: string;
  surname: string;
}
export interface GermanyIdFrontRecognizerResultCtor extends RecognizerResultCtor<GermanyIdFrontRecognizerResult> {}

export interface GermanyIdFrontRecognizer extends Recognizer<GermanyIdFrontRecognizerResult> {
  detectGlare: boolean;
  extractCanNumber: boolean;
  extractDateOfExpiry: boolean;
  extractDocumentNumber: boolean;
  extractGivenNames: boolean;
  extractNationality: boolean;
  extractPlaceOfBirth: boolean;
  extractSurname: boolean;
  faceImageDpi: number;
  fullDocumentImageDpi: number;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
  returnSignatureImage: boolean;
  signatureImageDpi: number;
}
export interface GermanyIdFrontRecognizerCtor extends RecognizerCtor<GermanyIdFrontRecognizer> {}

export interface GermanyOldIdRecognizerResult extends RecognizerResult {
  dateOfBirth: Date;
  dateOfExpiry: Date;
  documentCode: string;
  documentNumber: string;
  faceImage: string;
  fullDocumentImage: string;
  issuer: string;
  mrzParsed: boolean;
  mrzText: string;
  mrzVerified: boolean;
  nationality: string;
  opt1: string;
  opt2: string;
  placeOfBirth: string;
  primaryId: string;
  secondaryId: string;
  sex: string;
  signatureImage: string;
}
export interface GermanyOldIdRecognizerResultCtor extends RecognizerResultCtor<GermanyOldIdRecognizerResult> {}

export interface GermanyOldIdRecognizer extends Recognizer<GermanyOldIdRecognizerResult> {
  detectGlare: boolean;
  extractPlaceOfBirth: boolean;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
  returnSignatureImage: boolean;
}
export interface GermanyOldIdRecognizerCtor extends RecognizerCtor<GermanyOldIdRecognizer> {}

export interface GermanyPassportRecognizerResult extends RecognizerResult {
  authority: string;
  dateOfBirth: Date;
  dateOfExpiry: Date;
  dateOfIssue: Date;
  documentCode: string;
  documentNumber: string;
  faceImage: string;
  fullDocumentImage: string;
  issuer: string;
  mrzParsed: boolean;
  mrzText: string;
  mrzVerified: string;
  name: string;
  nationality: string;
  opt1: string;
  opt2: string;
  placeOfBirth: string;
  primaryId: string;
  secondaryId: string;
  sex: string;
  signatureImage: string;
  surname: string;
}
export interface GermanyPassportRecognizerResultCtor extends RecognizerResultCtor<GermanyPassportRecognizerResult> {}

export interface GermanyPassportRecognizer extends Recognizer<GermanyPassportRecognizerResult> {
  detectGlare: boolean;
  extractAuthority: boolean;
  extractDateOfIssue: boolean;
  extractName: boolean;
  extractNationality: boolean;
  extractPlaceOfBirth: boolean;
  extractSurname: boolean;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
  returnSignatureImage: boolean;
}
export interface GermanyPassportRecognizerCtor extends RecognizerCtor<GermanyPassportRecognizer> {}

export interface HongKongIdFrontRecognizerResult extends RecognizerResult {
  commercialCode: string;
  dateOfBirth: Date;
  dateOfIssue: Date;
  documentNumber: string;
  faceImage: string;
  fullDocumentImage: string;
  fullName: string;
  residentialStatus: string;
  sex: string;
}
export interface HongKongIdFrontRecognizerResultCtor extends RecognizerResultCtor<HongKongIdFrontRecognizerResult> {}

export interface HongKongIdFrontRecognizer extends Recognizer<HongKongIdFrontRecognizerResult> {
  detectGlare: boolean;
  extractDateOfBirth: boolean;
  extractDateOfIssue: boolean;
  extractFullName: boolean;
  extractResidentialStatus: boolean;
  extractSex: boolean;
  faceImageDpi: number;
  fullDocumentImageDpi: number;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
}
export interface HongKongIdFrontRecognizerCtor extends RecognizerCtor<HongKongIdFrontRecognizer> {}

export interface IkadRecognizerResult extends RecognizerResult {
  address: string;
  dateOfBirth: Date;
  employer: string;
  expiryDate: Date;
  faceImage: string;
  facultyAddress: string;
  fullDocumentImage: string;
  name: string;
  nationality: string;
  passportNumber: string;
  sectory: string;
  sex: string;
}
export interface IkadRecognizerResultCtor extends RecognizerResultCtor<IkadRecognizerResult> {}

export interface IkadRecognizer extends Recognizer<IkadRecognizerResult> {
  detectGlare: boolean;
  extractEmployer: boolean;
  extractExpiryDate: boolean;
  extractFacultyAddress: boolean;
  extractNationality: boolean;
  extractPassportNumber: boolean;
  extractSector: boolean;
  extractSex: boolean;
  fullDocumentImageDpi: number;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
}
export interface IkadRecognizerCtor extends RecognizerCtor<IkadRecognizer> {}

export interface IndonesiaIdFrontRecognizerResult extends RecognizerResult {
  address: string;
  bloodType: string;
  citizenship: string;
  city: string;
  dateOfBirth: Date;
  dateOfExpiry: Date;
  dateOfExpiryPermanent: string;
  district: string;
  documentNumber: string;
  faceImage: string;
  fullDocumentImage: string;
  kelDesa: string;
  maritalStatus: string;
  name: string;
  occupation: string;
  placeOfBirth: string;
  province: string;
  religion: string;
  rt: string;
  rw: string;
  sex: string;
  signatureImage: string;
}
export interface IndonesiaIdFrontRecognizerResultCtor extends RecognizerResultCtor<IndonesiaIdFrontRecognizerResult> {}

export interface IndonesiaIdFrontRecognizer extends Recognizer<IndonesiaIdFrontRecognizerResult> {
  detectGlare: boolean;
  extractAddress: boolean;
  extractBloodType: boolean;
  extractCitizenship: boolean;
  extractCity: boolean;
  extractDateOfExpiry: boolean;
  extractDistrict: boolean;
  extractKelDesa: boolean;
  extractMaritalStatus: boolean;
  extractName: boolean;
  extractOccupation: boolean;
  extractPlaceOfBirth: boolean;
  extractReligion: boolean;
  extractRt: boolean;
  extractRw: boolean;
  faceImageDpi: number;
  fullDocumentImageDpi: number;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
  returnSignatureImage: boolean;
  signatureImageDpi: number;
}
export interface IndonesiaIdFrontRecognizerCtor extends RecognizerCtor<IndonesiaIdFrontRecognizer> {}

export interface IrelandDlFrontRecognizerResult extends RecognizerResult {
  address: string;
  dateOfBirth: Date;
  dateOfExpiry: Date;
  dateOfIssue: Date;
  driverNumber: string;
  faceImage: string;
  firstName: string;
  fullDocumentImage: string;
  issuedBy: string;
  // sic
  licenceCategories: string;
  // sic
  licenceNumber: string;
  placeOfBirth: string;
  signatureImage: string;
  surname: string;
}
export interface IrelandDlFrontRecognizerResultCtor extends RecognizerResultCtor<IrelandDlFrontRecognizerResult> {}

export interface IrelandDlFrontRecognizer extends Recognizer<IrelandDlFrontRecognizerResult> {
  detectGlare: boolean;
  extractAddress: boolean;
  extractDateOfBirth: boolean;
  extractDateOfExpiry: boolean;
  extractDateOfIssue: boolean;
  extractFirstName: boolean;
  extractIssuedBy: boolean;
  extractLicenceCategories: boolean;
  extractLicenceNumber: boolean;
  extractPlaceOfBirth: boolean;
  extractSurname: boolean;
  faceImageDpi: number;
  fullDocumentImageDpi: number;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
  returnSignatureImage: boolean;
  signatureImageDpi: number;
}
export interface IrelandDlFrontRecognizerCtor extends RecognizerCtor<IrelandDlFrontRecognizer> {}

export interface ItalyDlFrontRecognizerResult extends RecognizerResult {
  address: string;
  dateOfBirth: Date;
  dateOfExpiry: Date;
  dateOfIssue: Date;
  faceImage: string;
  firstName: string;
  fullDocumentImage: string;
  givenName: string;
  issuingAuthority: string;
  // sic
  licenceCategories: string;
  // sic
  licenceNumber: string;
  placeOfBirth: string;
  signatureImage: string;
  surname: string;
}
export interface ItalyDlFrontRecognizerResultCtor extends RecognizerResultCtor<ItalyDlFrontRecognizerResult> {}

export interface ItalyDlFrontRecognizer extends Recognizer<ItalyDlFrontRecognizerResult> {
  detectGlare: boolean;
  extractAddress: boolean;
  extractDateOfBirth: boolean;
  extractDateOfExpiry: boolean;
  extractDateOfIssue: boolean;
  extractGivenName: boolean;
  extractIssuingAuthority: boolean;
  extractLicenceCategories: boolean;
  extractPlaceOfBirth: boolean;
  extractSurname: boolean;
  faceImageDpi: number;
  fullDocumentImageDpi: number;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
  returnSignatureImage: boolean;
  signatureImageDpi: number;
}
export interface ItalyDlFrontRecognizerCtor extends RecognizerCtor<ItalyDlFrontRecognizer> {}

export interface JordanCombinedRecognizerResult extends RecognizerResult {
  dateOfBirth: Date;
  dateOfExpiry: Date;
  digitalSignature: string;
  digitalSignatureVersion: string;
  documentDataMatch: boolean;
  documentNumber: string;
  faceImage: string;
  fullDocumentBackImage: string;
  fullDocumentFrontImage: string;
  issuer: string;
  mrzVerified: boolean;
  name: string;
  nationalNumber: string;
  nationality: string;
  scanningFirstSideDone: boolean;
  sex: string;
}
export interface JordanCombinedRecognizerResultCtor extends RecognizerResultCtor<JordanCombinedRecognizerResult> {}

export interface JordanCombinedRecognizer extends Recognizer<JordanCombinedRecognizerResult> {
  detectGlare: boolean;
  returnFullDocumentImage: boolean;
}
export interface JordanCombinedRecognizerCtor extends RecognizerCtor<JordanCombinedRecognizer> {}

export interface JordanIdBackRecognizerResult extends RecognizerResult {
  dateOfBirth: Date;
  dateOfExpiry: Date;
  documentCode: string;
  documentNumber: string;
  fullDocumentImage: string;
  issuer: string;
  mrzParsed: boolean;
  mrzText: string;
  mrzVerified: boolean;
  nationality: string;
  opt1: string;
  opt2: string;
  primaryId: string;
  secondaryId: string;
  sex: string;
}
export interface JordanIdBackRecognizerResultCtor extends RecognizerResultCtor<JordanIdBackRecognizerResult> {}

export interface JordanIdBackRecognizer extends Recognizer<JordanIdBackRecognizerResult> {
  detectGlare: boolean;
  extractDateOfBirth: boolean;
  extractName: boolean;
  extractSex: boolean;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
  signResult: boolean;
}
export interface JordanIdBackRecognizerCtor extends RecognizerCtor<JordanIdBackRecognizer> {}

export interface JordanIdFrontRecognizerResult extends RecognizerResult {
  dateOfBirth: Date;
  faceImage: string;
  fullDocumentImage: string;
  name: string;
  nationalNumber: string;
  sex: string;
}
export interface JordanIdFrontRecognizerResultCtor extends RecognizerResultCtor<JordanIdFrontRecognizerResult> {}

export interface JordanIdFrontRecognizer extends Recognizer<JordanIdFrontRecognizerResult> {
  detectGlare: boolean;
  extractDateOfBirth: boolean;
  extractName: boolean;
  extractSex: boolean;
  fullDocumentImageDpi: number;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
}
export interface JordanIdFrontRecognizerCtor extends RecognizerCtor<JordanIdFrontRecognizer> {}

export interface KuwaitIdBackRecognizerResult extends RecognizerResult {
  fullDocumentImage: string;
  mrzResult: MrzResult;
  serialNo: string;
}
export interface KuwaitIdBackRecognizerResultCtor extends RecognizerResultCtor<KuwaitIdBackRecognizerResult> {}

export interface KuwaitIdBackRecognizer extends Recognizer<KuwaitIdBackRecognizerResult> {
  detectGlare: boolean;
  extractSerialNo: boolean;
  fullDocumentImageDpi: number;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  returnFullDocumentImage: boolean;
}
export interface KuwaitIdBackRecognizerCtor extends RecognizerCtor<KuwaitIdBackRecognizer> {}

export interface KuwaitIdFrontRecognizerResult extends RecognizerResult {
  birthData: Date;
  civilIdNumber: string;
  expiryDate: Date;
  faceImage: string;
  fullDocumentImage: string;
  name: string;
  nationality: string;
  sex: string;
}
export interface KuwaitIdFrontRecognizerResultCtor extends RecognizerResultCtor<KuwaitIdFrontRecognizerResult> {}

export interface KuwaitIdFrontRecognizer extends Recognizer<KuwaitIdFrontRecognizerResult> {
  detectGlare: boolean;
  extractBirthDate: boolean;
  extractName: boolean;
  extractNationality: boolean;
  extractSex: boolean;
  faceImageDpi: number;
  fullDocumentImageDpi: number;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
}
export interface KuwaitIdFrontRecognizerCtor extends RecognizerCtor<KuwaitIdFrontRecognizer> {}

export interface MalaysiaDlFrontRecognizerResult extends RecognizerResult {
  city: string;
  dlClass: string;
  faceImage: string;
  fullAddress: string;
  fullDocumentImage: string;
  identityNumber: string;
  name: string;
  nationality: string;
  ownerState: string;
  street: string;
  validFrom: Date;
  validUntil: Date;
  zipcode: string;
}
export interface MalaysiaDlFrontRecognizerResultCtor extends RecognizerResultCtor<MalaysiaDlFrontRecognizerResult> {}

export interface MalaysiaDlFrontRecognizer extends Recognizer<MalaysiaDlFrontRecognizerResult> {
  detectGlare: boolean;
  extractAddress: boolean;
  extractClass: boolean;
  extractName: boolean;
  extractNationality: boolean;
  extractValidFrom: boolean;
  extractValidUntil: boolean;
  faceImageDpi: number;
  fullDocumentImageDpi: number;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
}
export interface MalaysiaDlFrontRecognizerCtor extends RecognizerCtor<MalaysiaDlFrontRecognizer> {}

export interface MalaysiaMyTenteraRecognizerResult extends RecognizerResult {
  armyNumber: string;
  birthData: Date;
  city: string;
  faceImage: string;
  fullAddress: string;
  fullDocumentImage: string;
  fullName: string;
  nric: string;
  ownerState: string;
  religion: string;
  sex: string;
  street: string;
  zipcode: string;
}
export interface MalaysiaMyTenteraRecognizerResultCtor extends RecognizerResultCtor<MalaysiaMyTenteraRecognizerResult> {}

export interface MalaysiaMyTenteraRecognizer extends Recognizer<MalaysiaMyTenteraRecognizerResult> {
  detectGlare: boolean;
  extractFullNameAndAddress: boolean;
  extractReligion: boolean;
  faceImageDpi: number;
  fullDocumentImageDpi: number;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
}
export interface MalaysiaMyTenteraRecognizerCtor extends RecognizerCtor<MalaysiaMyTenteraRecognizer> {}

export interface MexicoVoterIdFrontRecognizerResult extends RecognizerResult {
  address: string;
  curp: string;
  dateOfBirth: Date;
  electorKey: string;
  faceImage: string;
  fullDocumentImage: string;
  fullName: string;
  sex: string;
  signatureImage: string;
}
export interface MexicoVoterIdFrontRecognizerResultCtor extends RecognizerResultCtor<MexicoVoterIdFrontRecognizerResult> {}

export interface MexicoVoterIdFrontRecognizer extends Recognizer<MexicoVoterIdFrontRecognizerResult> {
  detectGlare: boolean;
  extractAddress: boolean;
  extractCurp: boolean;
  extractFullName: boolean;
  faceImageDpi: number;
  fullDocumentImageDpi: number;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
  returnSignatureImage: boolean;
  signatureImageDpi: number;
}
export interface MexicoVoterIdFrontRecognizerCtor extends RecognizerCtor<MexicoVoterIdFrontRecognizer> {}

export interface MoroccoIdBackRecognizerResult extends RecognizerResult {
  address: string;
  civilStatusNumber: string;
  dateOfExpiry: Date;
  documentNumber: string;
  fathersName: string;
  fullDocumentImage: string;
  mothersName: string;
  sex: string;
}
export interface MoroccoIdBackRecognizerResultCtor extends RecognizerResultCtor<MoroccoIdBackRecognizerResult> {}

export interface MoroccoIdBackRecognizer extends Recognizer<MoroccoIdBackRecognizerResult> {
  detectGlare: boolean;
  extractAddress: boolean;
  extractCivilStatusNumber: boolean;
  extractDateOfExpiry: boolean;
  extractFathersName: boolean;
  extractMothersName: boolean;
  extractSex: boolean;
  fullDocumentImageDpi: number;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  returnFullDocumentImage: boolean;
}
export interface MoroccoIdBackRecognizerCtor extends RecognizerCtor<MoroccoIdBackRecognizer> {}

export interface MoroccoIdFrontRecognizerResult extends RecognizerResult {
  dateOfBirth: Date;
  dateOfExpiry: Date;
  documentNumber: string;
  faceImage: string;
  fullDocumentImage: string;
  name: string;
  placeOfBirth: string;
  sex: string;
  signatureImage: string;
  surname: string;
}
export interface MoroccoIdFrontRecognizerResultCtor extends RecognizerResultCtor<MoroccoIdFrontRecognizerResult> {}

export interface MoroccoIdFrontRecognizer extends Recognizer<MoroccoIdFrontRecognizerResult> {
  detectGlare: boolean;
  extractDateOfExpiry: boolean;
  extractDateOfBirth: boolean;
  extractName: boolean;
  extractPlaceOfBirth: boolean;
  extractSex: boolean;
  extractSurname: boolean;
  faceImageDpi: number;
  fullDocumentImageDpi: number;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
  returnSignatureImage: boolean;
  signatureImageDpi: number;
}
export interface MoroccoIdFrontRecognizerCtor extends RecognizerCtor<MoroccoIdFrontRecognizer> {}

export interface MrtdCombinedRecognizerResult extends RecognizerResult {
  alienNumber: string;
  applicationReceiptNumber: string;
  dateOfBirth: Date;
  dateOfExpiry: Date;
  digitalSignature: string;
  digitalSignatureVersion: string;
  documentCode: string;
  documentDataMatch: boolean;
  documentNumber: string;
  documentType: string;
  faceImage: string;
  fullDocumentBackImage: string;
  fullDocumentFrontImage: string;
  immigrantCaseNumber: string;
  issuer: string;
  mrzImage: string;
  mrzParsed: boolean;
  mrzText: string;
  mrzVerified: boolean;
  nationality: string;
  opt1: string;
  opt2: string;
  primaryId: string;
  scanningFirstSideDone: boolean;
  secondaryId: string;
  sex: string;
}
export interface MrtdCombinedRecognizerResultCtor extends RecognizerResultCtor<MrtdCombinedRecognizerResult> {}

export interface MrtdCombinedRecognizer extends Recognizer<MrtdCombinedRecognizerResult> {
  allowUnparsedResults: boolean;
  allowUnverifiedResults: boolean;
  numStableDetectionsThreshold: number;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
  returnMrzImage: boolean;
  signResult: boolean;
}
export interface MrtdCombinedRecognizerCtor extends RecognizerCtor<MrtdCombinedRecognizer> {}

export interface MrtdRecognizerResult extends RecognizerResult {
  fullDocumentImage: string;
  mrzImage: string;
  mrzResult: MrzResult;
}
export interface MrtdRecognizerResultCtor extends RecognizerResultCtor<MrtdRecognizerResult> {}

export interface MrtdRecognizer extends Recognizer<MrtdRecognizerResult> {
  allowUnparsedResults: boolean;
  allowUnverifiedResults: boolean;
  detectGlare: boolean;
  returnFullDocumentImage: boolean;
  returnMrzImage: boolean;
  saveImageDPI: number;
}
export interface MrtdRecognizerCtor extends RecognizerCtor<MrtdRecognizer> {}

export interface MyKadBackRecognizerResult extends RecognizerResult {
  dateOfBirth: Date;
  extendedNric: string;
  fullDocumentImage: string;
  nric: string;
  oldNric: string;
  sex: string;
  signatureImage: string;
}
export interface MyKadBackRecognizerResultCtor extends RecognizerResultCtor<MyKadBackRecognizerResult> {}

export interface MyKadBackRecognizer extends Recognizer<MyKadBackRecognizerResult> {
  detectGlare: boolean;
  extractOldNric: boolean;
  fullDocumentImageDpi: number;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  returnFullDocumentImage: boolean;
  returnSignatureImage: boolean;
  signatureImageDpi: number;
}
export interface MyKadBackRecognizerCtor extends RecognizerCtor<MyKadBackRecognizer> {}

export interface MyKadFrontRecognizerResult extends RecognizerResult {
  armyNumber: string;
  faceImage: string;
  fullDocumentImage: string;
  nricNumber: string;
  ownerAddress: string;
  ownerAddressCity: string;
  ownerAddressState: string;
  ownerAddressStreet: string;
  ownerAddressZipCode: string;
  ownerBirthDate: Date;
  ownerFullName: string;
  ownerReligion: string;
  ownerSex: string;
}
export interface MyKadFrontRecognizerResultCtor extends RecognizerResultCtor<MyKadFrontRecognizerResult> {}

export interface MyKadFrontRecognizer extends Recognizer<MyKadFrontRecognizerResult> {
  extractArmyNumber: boolean;
  fullDocumentImageDpi: number;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
}
export interface MyKadFrontRecognizerCtor extends RecognizerCtor<MyKadFrontRecognizer> {}

export interface NewZealandDlFrontRecognizerResult extends RecognizerResult {
  address: string;
  cardVersion: string;
  dateOfBirth: Date;
  dateOfExpiry: Date;
  dateOfIssue: Date;
  donorIndicator: string;
  faceImage: string;
  firstNames: string;
  fullDocumentImage: string;
  licenceNumber: string;
  signatureImage: string;
  surname: string;
}
export interface NewZealandDlFrontRecognizerResultCtor extends RecognizerResultCtor<NewZealandDlFrontRecognizerResult> {}

export interface NewZealandDlFrontRecognizer extends Recognizer<NewZealandDlFrontRecognizerResult> {
  detectGlare: boolean;
  extractAddress: boolean;
  extractDateOfBirth: boolean;
  extractDateOfExpiry: boolean;
  extractDateOfIssue: boolean;
  extractDonorIndicator: boolean;
  extractFirstName: boolean;
  extractSurname: boolean;
  faceImageDpi: number;
  fullDocumentImageDpi: number;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
  returnSignatureImage: boolean;
  signatureImageDpi: number;
}
export interface NewZealandDlFrontRecognizerCtor extends RecognizerCtor<NewZealandDlFrontRecognizer> {}

export interface PaymentCardBackRecognizerResult extends RecognizerResult {
  cvv: string;
  fullDocumentImage: string;
  inventoryNumber: string;
}
export interface PaymentCardBackRecognizerResultCtor extends RecognizerResultCtor<PaymentCardBackRecognizerResult> {}

export interface PaymentCardBackRecognizer extends Recognizer<PaymentCardBackRecognizerResult> {
  anonymizeCvv: boolean;
  detectGlare: boolean;
  extractInventoryNumber: boolean;
  fullDocumentImageDpi: number;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  returnFullDocumentImage: boolean;
}
export interface PaymentCardBackRecognizerCtor extends RecognizerCtor<PaymentCardBackRecognizer> {}

export interface PaymentCardCombinedRecognizerResult extends RecognizerResult {
  cardNumber: string;
  cvv: string;
  digitalSignature: string;
  digitalSignatureVersion: string;
  documentDataMatch: string;
  fullDocumentBackImage: string;
  fullDocumentFrontImage: string;
  inventoryNumber: string;
  owner: string;
  scanningFirstSideDone: boolean;
  validThru: Date;
}
export interface PaymentCardCombinedRecognizerResultCtor extends RecognizerResultCtor<PaymentCardCombinedRecognizerResult> {}

export interface PaymentCardCombinedRecognizer extends Recognizer<PaymentCardCombinedRecognizerResult> {
  anonymizeCardNumber: boolean;
  anonymizeCvv: boolean;
  detectGlare: boolean;
  extractInventoryNumber: boolean;
  extractOwner: boolean;
  extractValidThru: boolean;
  fullDocumentImageDpi: number;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  returnFullDocumentImage: boolean;
  signResult: boolean;
}
export interface PaymentCardCombinedRecognizerCtor extends RecognizerCtor<PaymentCardCombinedRecognizer> {}

export interface PaymentCardFrontRecognizerResult extends RecognizerResult {
  cardNumber: string;
  fullDocumentImage: string;
  owner: string;
  validThru: Date;
}
export interface PaymentCardFrontRecognizerResultCtor extends RecognizerResultCtor<PaymentCardFrontRecognizerResult> {}

export interface PaymentCardFrontRecognizer extends Recognizer<PaymentCardFrontRecognizerResult> {
  anonymizeCardNumber: boolean;
  anonymizeOwner: boolean;
  detectGlare: boolean;
  extractOwner: boolean;
  extractValidThru: boolean;
  fullDocumentImageDpi: number;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  returnFullDocumentImage: boolean;
}
export interface PaymentCardFrontRecognizerCtor extends RecognizerCtor<PaymentCardFrontRecognizer> {}

export interface Pdf417RecognizerResult extends RecognizerResult {
  barcodeType: string;
  rawData: string;
  stringData: string;
  uncertain: boolean;
}
export interface Pdf417RecognizerResultCtor extends RecognizerResultCtor<Pdf417RecognizerResult> {}

export interface Pdf417Recognizer extends Recognizer<Pdf417RecognizerResult> {
  nullQuietZoneAllowed: boolean;
  scanInverse: boolean;
  scanUncertain: boolean;
}
export interface Pdf417RecognizerCtor extends RecognizerCtor<Pdf417Recognizer> {}

export interface PolandCombinedRecognizerResult extends RecognizerResult {
  dateOfBirth: Date;
  dateOfExpiry: Date;
  digitalSignature: string;
  digitalSignatureVersion: string;
  documentDataMatch: string;
  documentNumber: string;
  faceImage: string;
  familyName: string;
  fullDocumentBackImage: string;
  fullDocumentFrontImage: string;
  givenNames: string;
  issuer: string;
  mrzVerified: boolean;
  nationality: string;
  parentsGivenNames: string;
  personalNumber: string;
  scanningFirstSideDone: boolean;
  sex: string;
  surname: string;
}
export interface PolandCombinedRecognizerResultCtor extends RecognizerResultCtor<PolandCombinedRecognizerResult> {}

export interface PolandCombinedRecognizer extends Recognizer<PolandCombinedRecognizerResult> {
  detectGlare: boolean;
  extractDateOfBirth: boolean;
  extractFamilyName: boolean;
  extractGivenName: boolean;
  extractParentsGivenNames: boolean;
  extractSex: boolean;
  extractSurname: boolean;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
  signResult: boolean;
}
export interface PolandCombinedRecognizerCtor extends RecognizerCtor<PolandCombinedRecognizer> {}

export interface PolandIdBackRecognizerResult extends RecognizerResult {
  dateOfBirth: Date;
  dateOfExpiry: Date;
  documentCode: string;
  documentNumber: string;
  fullDocumentImage: string;
  issuer: string;
  mrzParsed: boolean;
  mrzText: string;
  mrzVerified: boolean;
  nationality: string;
  opt1: string;
  opt2: string;
  primaryId: string;
  secondaryId: string;
  sex: string;
}
export interface PolandIdBackRecognizerResultCtor extends RecognizerResultCtor<PolandIdBackRecognizerResult> {}

export interface PolandIdBackRecognizer extends Recognizer<PolandIdBackRecognizerResult> {
  detectGlare: boolean;
  returnFullDocumentImage: boolean;
}
export interface PolandIdBackRecognizerCtor extends RecognizerCtor<PolandIdBackRecognizer> {}

export interface PolandIdFrontRecognizerResult extends RecognizerResult {
  dateOfBirth: Date;
  faceImage: string;
  familyName: string;
  fullDocumentImage: string;
  givenNames: string;
  parentsGivenNames: string;
  sex: string;
  surname: string;
}
export interface PolandIdFrontRecognizerResultCtor extends RecognizerResultCtor<PolandIdFrontRecognizerResult> {}

export interface PolandIdFrontRecognizer extends Recognizer<PolandIdFrontRecognizerResult> {
  detectGlare: boolean;
  extractDateOfBirth: boolean;
  extractFamilyName: boolean;
  extractGivenNames: boolean;
  extractParentsGivenNames: boolean;
  extractSex: boolean;
  extractSurname: boolean;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
}
export interface PolandIdFrontRecognizerCtor extends RecognizerCtor<PolandIdFrontRecognizer> {}

export interface RomaniaIdFrontRecognizerResult extends RecognizerResult {
  address: string;
  cardNumber: string;
  cnp: string;
  dateOfBirth: Date;
  dateOfExpiry: Date;
  documentCode: string;
  documentNumber: string;
  faceImage: string;
  firstName: string;
  fullDocumentImage: string;
  idSeries: string;
  issuedBy: string;
  issuer: string;
  lastName: string;
  mrzParsed: boolean;
  mrzText: string;
  mrzVerified: boolean;
  nationality: string;
  nonMRZNationality: string;
  nonMRZSex: string;
  opt1: string;
  opt2: string;
  parentNames: string;
  placeOfBirth: string;
  primaryId: string;
  secondaryId: string;
  sex: string;
  validFrom: Date;
  validUntil: Date;
}
export interface RomaniaIdFrontRecognizerResultCtor extends RecognizerResultCtor<RomaniaIdFrontRecognizerResult> {}

export interface RomaniaIdFrontRecognizer extends Recognizer<RomaniaIdFrontRecognizerResult> {
  detectGlare: boolean;
  extractAddress: boolean;
  extractFirstName: boolean;
  extractIssuedBy: boolean;
  extractLastName: boolean;
  extractNonMRZSex: boolean;
  extractPlaceOfBirth: boolean;
  extractValidFrom: boolean;
  extractValidUntil: boolean;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
}
export interface RomaniaIdFrontRecognizerCtor extends RecognizerCtor<RomaniaIdFrontRecognizer> {}

export interface SerbiaCombinedRecognizerResult extends RecognizerResult {
  dateOfBirth: Date;
  dateOfExpiry: Date;
  dateOfIssue: Date;
  digitalSignature: string;
  digitalSignatureVersion: string;
  documentDataMatch: boolean;
  faceImage: string;
  firstName: string;
  fullDocumentBackImage: string;
  fullDocumentFrontImage: string;
  identityCardNumber: string;
  issuer: string;
  jmbg: string;
  lastName: string;
  mrzVerified: boolean;
  nationality: string;
  scanningFirstSideDone: boolean;
  sex: string;
  signatureImage: string;
}
export interface SerbiaCombinedRecognizerResultCtor extends RecognizerResultCtor<SerbiaCombinedRecognizerResult> {}

export interface SerbiaCombinedRecognizer extends Recognizer<SerbiaCombinedRecognizerResult> {
  detectGlare: boolean;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
  returnSignatureImage: boolean;
  signResult: boolean;
}
export interface SerbiaCombinedRecognizerCtor extends RecognizerCtor<SerbiaCombinedRecognizer> {}

export interface SerbiaIdBackRecognizerResult extends RecognizerResult {
  dateOfBirth: Date;
  dateOfExpiry: Date;
  documentCode: string;
  documentNumber: string;
  fullDocumentImage: string;
  issuer: string;
  mrzParsed: boolean;
  mrzText: string;
  mrzVerified: boolean;
  nationality: string;
  opt1: string;
  opt2: string;
  primaryId: string;
  secondaryId: string;
  sex: string;
}
export interface SerbiaIdBackRecognizerResultCtor extends RecognizerResultCtor<SerbiaIdBackRecognizerResult> {}

export interface SerbiaIdBackRecognizer extends Recognizer<SerbiaIdBackRecognizerResult> {
  detectGlare: boolean;
  returnFullDocumentImage: boolean;
}
export interface SerbiaIdBackRecognizerCtor extends RecognizerCtor<SerbiaIdBackRecognizer> {}

export interface SerbiaIdFrontRecognizerResult extends RecognizerResult {
  documentNumber: string;
  faceImage: string;
  fullDocumentImage: string;
  issuingDate: Date;
  signatureImage: string;
  validThru: Date;
  validUntil: Date;
}
export interface SerbiaIdFrontRecognizerResultCtor extends RecognizerResultCtor<SerbiaIdFrontRecognizerResult> {}

export interface SerbiaIdFrontRecognizer extends Recognizer<SerbiaIdFrontRecognizerResult> {
  detectGlare: boolean;
  extractIssuingDate: boolean;
  extractValidUntil: boolean;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
  returnSignatureImage: boolean;
}
export interface SerbiaIdFrontRecognizerCtor extends RecognizerCtor<SerbiaIdFrontRecognizer> {}

export interface SimNumberRecognizerResult extends RecognizerResult {
  simNumber: string;
}
export interface SimNumberRecognizerResultCtor extends RecognizerResultCtor<SimNumberRecognizerResult> {}

export interface SimNumberRecognizer extends Recognizer<SimNumberRecognizerResult> {}
export interface SimNumberRecognizerCtor extends RecognizerCtor<SimNumberRecognizer> {}

export interface SingaporeChangiEmployeeIdRecognizerResult extends RecognizerResult {
  companyName: string;
  dateOfExpiry: Date;
  documentNumber: string;
  faceImage: string;
  fullDocumentImage: string;
  name: string;
}
export interface SingaporeChangiEmployeeIdRecognizerResultCtor extends RecognizerResultCtor<SingaporeChangiEmployeeIdRecognizerResult> {}

export interface SingaporeChangiEmployeeIdRecognizer extends Recognizer<SingaporeChangiEmployeeIdRecognizerResult> {
  detectGlare: boolean;
  extractCompanyName: boolean;
  extractDateOfExpiry: boolean;
  extractName: boolean;
  faceImageDpi: number;
  fullDocumentImageDpi: number;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
}
export interface SingaporeChangiEmployeeIdRecognizerCtor extends RecognizerCtor<SingaporeChangiEmployeeIdRecognizer> {}

export interface SingaporeCombinedRecognizerResult extends RecognizerResult {
  address: string;
  addressChangeDate: Date;
  bloodGroup: string;
  countryOfBirth: string;
  dateOfBirth: Date;
  dateOfIssue: Date;
  digitalSignature: string;
  digitalSignatureVersion: string;
  documentDataMatch: boolean;
  faceImage: string;
  fullDocumentBackImage: string;
  fullDocumentFrontImage: string;
  identityCardNumber: string;
  name: string;
  race: string;
  scanningFirstSideDone: string;
  sex: string;
}
export interface SingaporeCombinedRecognizerResultCtor extends RecognizerResultCtor<SingaporeCombinedRecognizerResult> {}

export interface SingaporeCombinedRecognizer extends Recognizer<SingaporeCombinedRecognizerResult> {
  detectGlare: boolean;
  extractAddress: boolean;
  extractAddressChangeDate: boolean;
  extractBloodGroup: boolean;
  extractCountryOfBirth: boolean;
  extractDateOfBirth: boolean;
  extractDateOfIssue: boolean;
  extractName: boolean;
  extractRace: boolean;
  extractSex: boolean;
  faceImageDpi: number;
  fullDocumentImageDpi: number;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
  signResult: boolean;
}
export interface SingaporeCombinedRecognizerCtor extends RecognizerCtor<SingaporeCombinedRecognizer> {}

export interface SingaporeDlFrontRecognizerResult extends RecognizerResult {
  birthData: Date;
  faceImage: string;
  fullDocumentImage: string;
  issueDate: Date;
  licenceNumber: string;
  name: string;
  validTill: Date;
}
export interface SingaporeDlFrontRecognizerResultCtor extends RecognizerResultCtor<SingaporeDlFrontRecognizerResult> {}

export interface SingaporeDlFrontRecognizer extends Recognizer<SingaporeDlFrontRecognizerResult> {
  detectGlare: boolean;
  extractBirthDate: boolean;
  extractIssueDate: boolean;
  extractName: boolean;
  extractValidTill: boolean;
  faceImageDpi: number;
  fullDocumentImageDpi: number;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
}
export interface SingaporeDlFrontRecognizerCtor extends RecognizerCtor<SingaporeDlFrontRecognizer> {}

export interface SingaporeIdBackRecognizerResult extends RecognizerResult {
  address: string;
  addressChangeDate: string;
  bloodGroup: string;
  cardNumber: string;
  dateOfIssue: Date;
  fullDocumentImage: string;
}
export interface SingaporeIdBackRecognizerResultCtor extends RecognizerResultCtor<SingaporeIdBackRecognizerResult> {}

export interface SingaporeIdBackRecognizer extends Recognizer<SingaporeIdBackRecognizerResult> {
  detectGlare: boolean;
  extractAddress: boolean;
  extractAddressChangeDate: boolean;
  extractBloodGroup: boolean;
  extractDateOfIssue: boolean;
  fullDocumentImageDpi: number;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  returnFullDocumentImage: boolean;
}
export interface SingaporeIdBackRecognizerCtor extends RecognizerCtor<SingaporeIdBackRecognizer> {}

export interface SingaporeIdFrontRecognizerResult extends RecognizerResult {
  countryOfBirth: string;
  dateOfBirth: Date;
  faceImage: string;
  fullDocumentImage: string;
  identityCardNumber: string;
  name: string;
  race: string;
  sex: string;
}
export interface SingaporeIdFrontRecognizerResultCtor extends RecognizerResultCtor<SingaporeIdFrontRecognizerResult> {}

export interface SingaporeIdFrontRecognizer extends Recognizer<SingaporeIdFrontRecognizerResult> {
  detectGlare: boolean;
  extractCountryOfBirth: boolean;
  extractDateOfBirth: boolean;
  extractName: boolean;
  extractRace: boolean;
  extractSex: boolean;
  faceImageDpi: number;
  fullDocumentImageDpi: number;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
}
export interface SingaporeIdFrontRecognizerCtor extends RecognizerCtor<SingaporeIdFrontRecognizer> {}

export interface SlovakiaCombinedRecognizerResult extends RecognizerResult {
  address: string;
  dateOfBirth: Date;
  dateOfExpiry: Date;
  dateOfIssue: Date;
  digitalSignature: number;
  digitalSignatureVersion: number;
  documentDataMatch: boolean;
  documentNumber: string;
  faceImage: string;
  firstName: string;
  fullDocumentBackImage: string;
  fullDocumentFrontImage: string;
  issuingAuthority: string;
  lastName: string;
  mrzVerified: boolean;
  nationality: string;
  personalIdentificationNumber: string;
  placeOfBirth: string;
  scanningFirstSideDone: string;
  sex: string;
  signatureImage: string;
  specialRemarks: string;
  surnameAtBirth: string;
}
export interface SlovakiaCombinedRecognizerResultCtor extends RecognizerResultCtor<SlovakiaCombinedRecognizerResult> {}

export interface SlovakiaCombinedRecognizer extends Recognizer<SlovakiaCombinedRecognizerResult> {
  detectGlare: boolean;
  extractDateOfBirth: boolean;
  extractDateOfExpiry: boolean;
  extractDateOfIssue: boolean;
  extractDocumentNumber: boolean;
  extractIssuedBy: boolean;
  extractNationality: boolean;
  extractPlaceOfBirth: boolean;
  extractSex: boolean;
  extractSpecialRemarks: boolean;
  extractSurnameAtBirth: boolean;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
  signResult: boolean;
}
export interface SlovakiaCombinedRecognizerCtor extends RecognizerCtor<SlovakiaCombinedRecognizer> {}

export interface SlovakiaIdBackRecognizerResult extends RecognizerResult {
  address: string;
  dateOfBirth: Date;
  dateOfExpiry: Date;
  documentCode: string;
  fullDocumentImage: string;
  issuer: string;
  mrzParsed: boolean;
  mrzText: string;
  mrzVerified: boolean;
  nationality: string;
  opt1: string;
  opt2: string;
  placeOfBirth: string;
  primaryId: string;
  secondaryId: string;
  sex: string;
  specialRemarks: string;
  surnameAtBirth: string;
}
export interface SlovakiaIdBackRecognizerResultCtor extends RecognizerResultCtor<SlovakiaIdBackRecognizerResult> {}

export interface SlovakiaIdBackRecognizer extends Recognizer<SlovakiaIdBackRecognizerResult> {
  detectGlare: boolean;
  extractPlaceOfBirth: boolean;
  extractSpecialRemarks: boolean;
  extractSurnameAtBirth: boolean;
  returnFullDocumentImage: boolean;
}
export interface SlovakiaIdBackRecognizerCtor extends RecognizerCtor<SlovakiaIdBackRecognizer> {}

export interface SlovakiaIdFrontRecognizerResult extends RecognizerResult {
  dateOfBirth: Date;
  dateOfExpiry: Date;
  dateOfIssue: Date;
  documentNumber: string;
  faceImage: string;
  firstName: string;
  fullDocumentImage: string;
  issuedBy: string;
  lastName: string;
  nationality: string;
  personalNumber: string;
  sex: string;
  signatureImage: string;
}
export interface SlovakiaIdFrontRecognizerResultCtor extends RecognizerResultCtor<SlovakiaIdFrontRecognizerResult> {}

export interface SlovakiaIdFrontRecognizer extends Recognizer<SlovakiaIdFrontRecognizerResult> {
  detectGlare: boolean;
  extractPlaceOfBirth: boolean;
  extractDateOfExpiry: boolean;
  extractDateOfIssue: boolean;
  extractDocumentNumber: boolean;
  extractIssuedBy: boolean;
  extractNationality: boolean;
  extractSex: boolean;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
  returnSignatureImage: boolean;
}
export interface SlovakiaIdFrontRecognizerCtor extends RecognizerCtor<SlovakiaIdFrontRecognizer> {}

export interface SloveniaCombinedRecognizerResult extends RecognizerResult {
  address: string;
  citizenship: string;
  dateOfBirth: Date;
  dateOfExpiry: Date;
  dateOfIssue: Date;
  digitalSignature: string;
  digitalSignatureVersion: string;
  documentDataMatch: boolean;
  faceImage: string;
  firstName: string;
  fullDocumentBackImage: string;
  fullDocumentFrontImage: string;
  identityCardNumber: string;
  issuingAuthority: string;
  lastName: string;
  mrzVerified: boolean;
  personalIdentificationNumber: string;
  scanningFirstSideDone: boolean;
  sex: string;
  signatureImage: string;
}
export interface SloveniaCombinedRecognizerResultCtor extends RecognizerResultCtor<SloveniaCombinedRecognizerResult> {}

export interface SloveniaCombinedRecognizer extends Recognizer<SloveniaCombinedRecognizerResult> {
  detectGlare: boolean;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
  returnSignatureImage: boolean;
  signResult: boolean;
}
export interface SloveniaCombinedRecognizerCtor extends RecognizerCtor<SloveniaCombinedRecognizer> {}

export interface SloveniaIdBackRecognizerResult extends RecognizerResult {
  address: string;
  authority: string;
  dateOfExpiry: Date;
  dateOfIssue: Date;
  documentCode: string;
  documentNumber: string;
  fullDocumentImage: string;
  issuer: string;
  mrzParsed: boolean;
  mrzText: string;
  mrzVerified: boolean;
  nationality: string;
  opt1: string;
  opt2: string;
  primaryId: string;
  secondaryId: string;
  sex: string;
}
export interface SloveniaIdBackRecognizerResultCtor extends RecognizerResultCtor<SloveniaIdBackRecognizerResult> {}

export interface SloveniaIdBackRecognizer extends Recognizer<SloveniaIdBackRecognizerResult> {
  detectGlare: boolean;
  extractAuthority: boolean;
  extractDateOfIssue: boolean;
  returnFullDocumentImage: boolean;
}
export interface SloveniaIdBackRecognizerCtor extends RecognizerCtor<SloveniaIdBackRecognizer> {}

export interface SloveniaIdFrontRecognizerResult extends RecognizerResult {
  dateOfBirth: Date;
  dateOfExpiry: Date;
  faceImage: string;
  firstName: string;
  fullDocumentImage: string;
  lastName: string;
  nationality: string;
  sex: string;
  signatureImage: string;
}
export interface SloveniaIdFrontRecognizerResultCtor extends RecognizerResultCtor<SloveniaIdFrontRecognizerResult> {}

export interface SloveniaIdFrontRecognizer extends Recognizer<SloveniaIdFrontRecognizerResult> {
  detectGlare: boolean;
  extractDateOfBirth: boolean;
  extractDateOfExpiry: boolean;
  extractNationality: boolean;
  extractSex: boolean;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
  returnSignatureImage: boolean;
}
export interface SloveniaIdFrontRecognizerCtor extends RecognizerCtor<SloveniaIdFrontRecognizer> {}

export interface SpainDlFrontRecognizerResult extends RecognizerResult {
  dateOfBirth: Date;
  faceImage: string;
  firstName: string;
  fullDocumentImage: string;
  issuingAuthority: string;
  licenceCategories: string;
  number: string;
  placeOfBirth: string;
  signatureImage: string;
  surname: string;
  validFrom: Date;
  validUntil: Date;
}
export interface SpainDlFrontRecognizerResultCtor extends RecognizerResultCtor<SpainDlFrontRecognizerResult> {}

export interface SpainDlFrontRecognizer extends Recognizer<SpainDlFrontRecognizerResult> {
  detectGlare: boolean;
  extractDateOfBirth: boolean;
  extractFirstName: boolean;
  extractIssuingAuthority: boolean;
  extractLicenceCategories: boolean;
  extractPlaceOfBirth: boolean;
  extractSurname: boolean;
  extractValidFrom: boolean;
  extractValidUntil: boolean;
  faceImageDpi: number;
  fullDocumentImageDpi: number;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
  returnSignatureImage: boolean;
  signatureImageDpi: number;
}
export interface SpainDlFrontRecognizerCtor extends RecognizerCtor<SpainDlFrontRecognizer> {}

export interface SwedenDlFrontRecognizerResult extends RecognizerResult {
  dateOfBirth: Date;
  dateOfExpiry: Date;
  dateOfIssue: Date;
  faceImage: string;
  fullDocumentImage: string;
  issuingAgency: string;
  licenceCategories: string;
  licenceNumber: string;
  name: string;
  referenceNumber: string;
  signatureImage: string;
  surname: string;
}
export interface SwedenDlFrontRecognizerResultCtor extends RecognizerResultCtor<SwedenDlFrontRecognizerResult> {}

export interface SwedenDlFrontRecognizer extends Recognizer<SwedenDlFrontRecognizerResult> {
  detectGlare: boolean;
  extractDateOfBirth: boolean;
  extractDateOfExpiry: boolean;
  extractDateOfIssue: boolean;
  extractIssuingAuthority: boolean;
  extractLicenceCategories: boolean;
  extractName: boolean;
  extractReferenceNumber: boolean;
  extractSurname: boolean;
  extractValidFrom: boolean;
  fullDocumentImageDpi: number;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
  returnSignatureImage: boolean;
}
export interface SwedenDlFrontRecognizerCtor extends RecognizerCtor<SwedenDlFrontRecognizer> {}

export interface SwitzerlandDlFrontRecognizerResult extends RecognizerResult {
  dateOfBirth: Date;
  dateOfExpiry: Date;
  dateOfIssue: Date;
  expiryDatePermanent: boolean;
  faceImage: string;
  firstName: string;
  fullDocumentImage: string;
  issuingAuthority: string;
  lastName: string;
  licenseNumber: string;
  placeOfBirth: string;
  signatureImage: string;
  vehicleCategories: string;
}
export interface SwitzerlandDlFrontRecognizerResultCtor extends RecognizerResultCtor<SwitzerlandDlFrontRecognizerResult> {}

export interface SwitzerlandDlFrontRecognizer extends Recognizer<SwitzerlandDlFrontRecognizerResult> {
  detectGlare: boolean;
  extractDateOfBirth: boolean;
  extractDateOfExpiry: boolean;
  extractDateOfIssue: boolean;
  extractFirstName: boolean;
  extractIssuingAuthority: boolean;
  extractLastName: boolean;
  extractPlaceOfBirth: boolean;
  extractVehicleCategories: boolean;
  faceImageDpi: number;
  fullDocumentImageDpi: number;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
  returnSignatureImage: boolean;
  signatureImageDpi: number;
}
export interface SwitzerlandDlFrontRecognizerCtor extends RecognizerCtor<SwitzerlandDlFrontRecognizer> {}

export interface SwitzerlandDlBackRecognizerResult extends RecognizerResult {
  authority: string;
  dateOfBirth: Date;
  dateOfExpiry: Date;
  dateOfIssue: Date;
  documentCode: string;
  documentNumber: string;
  fullDocumentImage: string;
  height: string;
  issuer: string;
  mrzParsed: boolean;
  mrzText: string;
  mrzVerified: boolean;
  nationality: string;
  nonMrzDateOfExpiry: Date;
  nonMrzSex: string;
  opt1: string;
  opt2: string;
  placeOfOrigin: string;
  primaryId: string;
  secondaryId: string;
  sex: String;
}
export interface SwitzerlandDlBackRecognizerResultCtor extends RecognizerResultCtor<SwitzerlandDlBackRecognizerResult> {}

export interface SwitzerlandDlBackRecognizer extends Recognizer<SwitzerlandDlBackRecognizerResult> {
  detectGlare: boolean;
  extractAuthority: boolean;
  extractDateOfExpiry: boolean;
  extractDateOfIssue: boolean;
  extractHeight: boolean;
  extractPlaceOfOrigin: boolean;
  extractSex: boolean;
  returnFullDocumentImage: boolean;
}
export interface SwitzerlandDlBackRecognizerCtor extends RecognizerCtor<SwitzerlandDlBackRecognizer> {}

export interface SwitzerlandIdFrontRecognizerResult extends RecognizerResult {
  dateOfBirth: Date;
  faceImage: string;
  fullDocumentImage: string;
  givenName: string;
  signatureImage: string;
  surname: string;
}
export interface SwitzerlandIdFrontRecognizerResultCtor extends RecognizerResultCtor<SwitzerlandIdFrontRecognizerResult> {}

export interface SwitzerlandIdFrontRecognizer extends Recognizer<SwitzerlandIdFrontRecognizerResult> {
  detectGlare: boolean;
  extractGivenName: boolean;
  extractSurname: boolean;
  faceImageDpi: number;
  fullDocumentImageDpi: number;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
  returnSignatureImage: boolean;
  signatureImageDpi: number;
}
export interface SwitzerlandIdFrontRecognizerCtor extends RecognizerCtor<SwitzerlandIdFrontRecognizer> {}

export interface SwitzerlandPassportRecognizerResult extends RecognizerResult {
  authority: string;
  dateOfBirth: Date;
  dateOfExpiry: Date;
  dateOfIssue: Date;
  documentCode: string;
  documentNumber: string;
  faceImage: string;
  fullDocumentImage: string;
  givenName: string;
  height: string;
  issuer: string;
  mrzParsed: boolean;
  mrzText: string;
  mrzVerified: boolean;
  nationality: string;
  nonMrzDateOfBirth: Date;
  nonMrzDateOfExpiry: Date;
  nonMrzSex: string;
  opt1: string;
  opt2: string;
  passportNumber: string;
  placeOfBirth: string;
  primaryId: string;
  secondaryId: string;
  sex: string;
  surname: string;
}
export interface SwitzerlandPassportRecognizerResultCtor extends RecognizerResultCtor<SwitzerlandPassportRecognizerResult> {}

export interface SwitzerlandPassportRecognizer extends Recognizer<SwitzerlandPassportRecognizerResult> {
  detectGlare: boolean;
  extractAuthority: boolean;
  extractDateOfBirth: boolean;
  extractDateOfExpiry: boolean;
  extractDateOfIssue: boolean;
  extractGivenName: boolean;
  extractHeight: boolean;
  extractPassportNumber: boolean;
  extractPlaceOfBirth: boolean;
  extractSex: boolean;
  extractSurname: boolean;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
}
export interface SwitzerlandPassportRecognizerCtor extends RecognizerCtor<SwitzerlandPassportRecognizer> {}

export interface UnitedArabEmiratesDlFrontRecognizerResult extends RecognizerResult {
  dateOfBirth: Date;
  expiryDate: Date;
  faceImage: string;
  fullDocumentImage: string;
  issueDate: Date;
  licenseNumber: string;
  licensingAuthority: string;
  name: string;
  nationality: string;
  placeOfIssue: string;
}
export interface UnitedArabEmiratesDlFrontRecognizerResultCtor extends RecognizerResultCtor<UnitedArabEmiratesDlFrontRecognizerResult> {}

export interface UnitedArabEmiratesDlFrontRecognizer extends Recognizer<UnitedArabEmiratesDlFrontRecognizerResult> {
  detectGlare: boolean;
  extractDateOfBirth: boolean;
  extractDateOfIssue: boolean;
  extractLicenseNumber: boolean;
  extractLicensingAuthority: boolean;
  extractName: boolean;
  extractNationality: boolean;
  extractPlaceOfIssue: boolean;
  faceImageDpi: number;
  fullDocumentImageDpi: number;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
}
export interface UnitedArabEmiratesDlFrontRecognizerCtor extends RecognizerCtor<UnitedArabEmiratesDlFrontRecognizer> {}

export interface UnitedArabEmiratesIdBackRecognizerResult extends RecognizerResult {
  fullDocumentImage: string;
  mrzResult: MrzResult;
}
export interface UnitedArabEmiratesIdBackRecognizerResultCtor extends RecognizerResultCtor<UnitedArabEmiratesIdBackRecognizerResult> {}

export interface UnitedArabEmiratesIdBackRecognizer extends Recognizer<UnitedArabEmiratesIdBackRecognizerResult> {
  detectGlare: boolean;
  fullDocumentImageDpi: number;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  returnFullDocumentImage: boolean;
}
export interface UnitedArabEmiratesIdBackRecognizerCtor extends RecognizerCtor<UnitedArabEmiratesIdBackRecognizer> {}

export interface UnitedArabEmiratesIdFrontRecognizerResult extends RecognizerResult {
  faceImage: string;
  fullDocumentImage: string;
  idNumber: string;
  name: string;
  nationality: string;
}
export interface UnitedArabEmiratesIdFrontRecognizerResultCtor extends RecognizerResultCtor<UnitedArabEmiratesIdFrontRecognizerResult> {}

export interface UnitedArabEmiratesIdFrontRecognizer extends Recognizer<UnitedArabEmiratesIdFrontRecognizerResult> {
  detectGlare: boolean;
  extractName: boolean;
  extractNationality: boolean;
  faceImageDpi: number;
  fullDocumentImageDpi: number;
  fullDocumentImageExtensionFactors: ImageExtensionFactors;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
}
export interface UnitedArabEmiratesIdFrontRecognizerCtor extends RecognizerCtor<UnitedArabEmiratesIdFrontRecognizer> {}

export interface VinRecognizerResult extends RecognizerResult {
  vin: string;
}
export interface VinRecognizerResultCtor extends RecognizerResultCtor<VinRecognizerResult> {}

export interface VinRecognizer extends Recognizer<VinRecognizerResult> {}
export interface VinRecognizerCtor extends RecognizerCtor<VinRecognizer> {}

export interface UsdlRecognizerResult extends RecognizerResult {
  optionalElements: any[];
  rawData: string;
  rawStringData: string;
  uncertain: string;
  fields: any[];
}
export interface UsdlRecognizerResultCtor extends RecognizerResultCtor<UsdlRecognizerResult> {}

export interface UsdlRecognizer extends Recognizer<UsdlRecognizerResult> {
  nullQuietZoneAllowed: boolean;
  uncertainDecoding: boolean;
}
export interface UsdlRecognizerCtor extends RecognizerCtor<UsdlRecognizer> {}

export interface UsdlCombinedRecognizerResult extends RecognizerResult {
  digitalSignature: string;
  digitalSignatureVersion: string;
  documentDataMatch: boolean;
  faceImage: string;
  fullDocumentImage: string;
  scanningFirstSideDone: boolean;
  optionalElements: any[];
  rawData: string;
  rawStringData: string;
  uncertain: boolean;
  fields: any[];
}
export interface UsdlCombinedRecognizerResultCtor extends RecognizerResultCtor<UsdlCombinedRecognizerResult> {}

export interface UsdlCombinedRecognizer extends Recognizer<UsdlCombinedRecognizerResult> {
  faceImageDpi: number;
  fullDocumentImageDpi: number;
  returnFaceImage: boolean;
  returnFullDocumentImage: boolean;
  signResult: boolean;
}
export interface UsdlCombinedRecognizerCtor extends RecognizerCtor<UsdlCombinedRecognizer> {}

/**
 * @name BlinkId
 * @description
 * Microblink SDK wrapper for barcode and document scanning. See the
 * blinkid-phonegap repository for available recognizers and other settings
 *
 * @usage
 * ```typescript
 * import { BlinkId, RecognizerResultState } from '@ionic-native/blinkid/ngx';
 *
 * constructor(private blinkId: BlinkId) { }
 *
 * ...
 *
 * const overlaySettings = new this.blinkId.DocumentOverlaySettings();
 *
 * const usdlRecognizer = new this.blinkId.UsdlRecognizer();
 * const usdlSuccessFrameGrabber = new this.blinkId.SuccessFrameGrabberRecognizer(usdlRecognizer);
 *
 * const barcodeRecognizer = new this.blinkId.BarcodeRecognizer();
 * barcodeRecognizer.scanPdf417 = true;
 *
 * const recognizerCollection = new this.blinkId.RecognizerCollection([
 *   usdlSuccessFrameGrabber,
 *   barcodeRecognizer,
 * ]);
 *
 * const canceled = await this.blinkId.scanWithCamera(
 *   overlaySettings,
 *   recognizerCollection,
 *   { ios: IOS_LICENSE_KEY, android: ANDROID_LICENSE_KEY },
 * );
 *
 * if (!canceled) {
 *   if (usdlRecognizer.result.resultState === RecognizerResultState.valid) {
 *     const successFrame = usdlSuccessFrameGrabber.result.successFrame;
 *     if (successFrame) {
 *       this.base64Img = `data:image/jpg;base64, ${successFrame}`;
 *       this.fields = usdlRecognizer.result.fields;
 *     }
 *   } else {
 *     this.barcodeStringData = barcodeRecognizer.result.stringData;
 *   }
 * }
 * ```
 */
@Plugin({
  pluginName: 'BlinkId',
  plugin: 'blinkid-cordova',
  pluginRef: 'cordova.plugins.BlinkID',
  repo: 'https://github.com/BlinkID/blinkid-phonegap',
  install:
    'ionic cordova plugin add blinkid-cordova --variable CAMERA_USAGE_DESCRIPTION="Enable your camera so that you can scan your ID to validate your account"',
  platforms: ['iOS', 'Android']
})
@Injectable({
  providedIn: 'root'
})
export class BlinkId extends IonicNativePlugin {
  /**
   * Opens the camera dialog and attempts to scan a barcode/document
   * @param overlaySettings {OverlaySettings} for camera overla customization
   * @param recognizerCollection {RecognizerCollection} collection of recognizers to scan with
   * @returns {Promise<boolean>}
   */
  @Cordova({
    callbackOrder: 'reverse'
  })
  scanWithCamera(
    overlaySettings: OverlaySettings,
    recognizerCollection: RecognizerCollection,
    licenses: Licenses,
  ): Promise<boolean> { return; }

  @CordovaProperty() Date: DateCtor;
  @CordovaProperty() Point: PointCtor;
  @CordovaProperty() Quadrilateral: QuadrilateralCtor;

  @CordovaProperty() BarcodeOverlaySettings: BarcodeOverlaySettingsCtor;
  @CordovaProperty() DocumentOverlaySettings: DocumentOverlaySettingsCtor;
  @CordovaProperty() DocumentVerificationOverlaySettings: DocumentVerificationOverlaySettingsCtor;

  @CordovaProperty() RecognizerCollection: RecognizerCollectionCtor;

  @CordovaProperty() BarcodeRecognizerResult: BarcodeRecognizerResultCtor;
  @CordovaProperty() BarcodeRecognizer: BarcodeRecognizerCtor;
  @CordovaProperty() SuccessFrameGrabberRecognizerResult: SuccessFrameGrabberRecognizerResultCtor;
  @CordovaProperty() SuccessFrameGrabberRecognizer: SuccessFrameGrabberRecognizerCtor;

  @CordovaProperty() AustraliaDlBackRecognizerResult: AustraliaDlBackRecognizerResultCtor;
  @CordovaProperty() AustraliaDlBackRecognizer: AustraliaDlBackRecognizerCtor;
  @CordovaProperty() AustraliaDlFrontRecognizerResult: AustraliaDlFrontRecognizerResultCtor;
  @CordovaProperty() AustraliaDlFrontRecognizer: AustraliaDlFrontRecognizerCtor;
  @CordovaProperty() AustriaCombinedRecognizerResult: AustriaCombinedRecognizerResultCtor;
  @CordovaProperty() AustriaCombinedRecognizer: AustriaCombinedRecognizerCtor;
  @CordovaProperty() AustriaDlFrontRecognizerResult: AustriaDlFrontRecognizerResultCtor;
  @CordovaProperty() AustriaDlFrontRecognizer: AustriaDlFrontRecognizerCtor;
  @CordovaProperty() AustriaIdBackRecognizerResult: AustriaIdBackRecognizerResultCtor;
  @CordovaProperty() AustriaIdBackRecognizer: AustriaIdBackRecognizerCtor;
  @CordovaProperty() AustriaIdFrontRecognizerResult: AustriaIdFrontRecognizerResultCtor;
  @CordovaProperty() AustriaIdFrontRecognizer: AustriaIdFrontRecognizerCtor;
  @CordovaProperty() AustriaPassportRecognizerResult: AustriaPassportRecognizerResultCtor;
  @CordovaProperty() AustriaPassportRecognizer: AustriaPassportRecognizerCtor;
  @CordovaProperty() ColombiaDlFrontRecognizerResult: ColombiaDlFrontRecognizerResultCtor;
  @CordovaProperty() ColombiaIdBackRecognizerResult: ColombiaIdBackRecognizerResultCtor;
  @CordovaProperty() ColombiaIdBackRecognizer: ColombiaIdBackRecognizerCtor;
  @CordovaProperty() ColombiaIdFrontRecognizerResult: ColombiaIdFrontRecognizerResultCtor;
  @CordovaProperty() ColombiaIdFrontRecognizer: ColombiaIdFrontRecognizerCtor;
  @CordovaProperty() CroatiaCombinedRecognizerResult: CroatiaCombinedRecognizerResultCtor;
  @CordovaProperty() CroatiaIdBackRecognizerResult: CroatiaIdBackRecognizerResultCtor;
  @CordovaProperty() CroatiaIdFrontRecognizerResult: CroatiaIdFrontRecognizerResultCtor;
  @CordovaProperty() CyprusIdBackRecognizerResult: CyprusIdBackRecognizerResultCtor;
  @CordovaProperty() CyprusIdBackRecognizer: CyprusIdBackRecognizerCtor;
  @CordovaProperty() CyprusIdFrontRecognizerResult: CyprusIdFrontRecognizerResultCtor;
  @CordovaProperty() CyprusIdFrontRecognizer: CyprusIdFrontRecognizerCtor;
  @CordovaProperty() CzechiaCombinedRecognizerResult: CzechiaCombinedRecognizerResultCtor;
  @CordovaProperty() CzechiaIdBackRecognizerResult: CzechiaIdBackRecognizerResultCtor;
  @CordovaProperty() DocumentFaceRecognizerResult: DocumentFaceRecognizerResultCtor;
  @CordovaProperty() EgyptIdFrontRecognizerResult: EgyptIdFrontRecognizerResultCtor;
  @CordovaProperty() EgyptIdFrontRecognizer: EgyptIdFrontRecognizerCtor;
  @CordovaProperty() ElitePaymentCardBackRecognizerResult: ElitePaymentCardBackRecognizerResultCtor;
  @CordovaProperty() ElitePaymentCardCombinedRecognizerResult: ElitePaymentCardCombinedRecognizerResultCtor;
  @CordovaProperty() ElitePaymentCardFrontRecognizerResult: ElitePaymentCardFrontRecognizerResultCtor;
  @CordovaProperty() EudlRecognizerResult: EudlRecognizerResultCtor;
  @CordovaProperty() GermanyCombinedRecognizerResult: GermanyCombinedRecognizerResultCtor;
  @CordovaProperty() GermanyCombinedRecognizer: GermanyCombinedRecognizerCtor;
  @CordovaProperty() GermanyDlBackRecognizerResult: GermanyDlBackRecognizerResultCtor;
  @CordovaProperty() GermanyDlBackRecognizer: GermanyDlBackRecognizerCtor;
  @CordovaProperty() GermanyIdBackRecognizerResult: GermanyIdBackRecognizerResultCtor;
  @CordovaProperty() GermanyIdBackRecognizer: GermanyIdBackRecognizerCtor;
  @CordovaProperty() GermanyIdFrontRecognizerResult: GermanyIdFrontRecognizerResultCtor;
  @CordovaProperty() GermanyIdFrontRecognizer: GermanyIdFrontRecognizerCtor;
  @CordovaProperty() GermanyOldIdRecognizerResult: GermanyOldIdRecognizerResultCtor;
  @CordovaProperty() GermanyOldIdRecognizer: GermanyOldIdRecognizerCtor;
  @CordovaProperty() GermanyPassportRecognizerResult: GermanyPassportRecognizerResultCtor;
  @CordovaProperty() GermanyPassportRecognizer: GermanyPassportRecognizerCtor;
  @CordovaProperty() HongKongIdFrontRecognizerResult: HongKongIdFrontRecognizerResultCtor;
  @CordovaProperty() HongKongIdFrontRecognizer: HongKongIdFrontRecognizerCtor;
  @CordovaProperty() IkadRecognizerResult: IkadRecognizerResultCtor;
  @CordovaProperty() IkadRecognizer: IkadRecognizerCtor;
  @CordovaProperty() IndonesiaIdFrontRecognizerResult: IndonesiaIdFrontRecognizerResultCtor;
  @CordovaProperty() IndonesiaIdFrontRecognizer: IndonesiaIdFrontRecognizerCtor;
  @CordovaProperty() IrelandDlFrontRecognizerResult: IrelandDlFrontRecognizerResultCtor;
  @CordovaProperty() IrelandDlFrontRecognizer: IrelandDlFrontRecognizerCtor;
  @CordovaProperty() ItalyDlFrontRecognizerResult: ItalyDlFrontRecognizerResultCtor;
  @CordovaProperty() ItalyDlFrontRecognizer: ItalyDlFrontRecognizerCtor;
  @CordovaProperty() JordanCombinedRecognizerResult: JordanCombinedRecognizerResultCtor;
  @CordovaProperty() JordanCombinedRecognizer: JordanCombinedRecognizerCtor;
  @CordovaProperty() JordanIdBackRecognizerResult: JordanIdBackRecognizerResultCtor;
  @CordovaProperty() JordanIdBackRecognizer: JordanIdBackRecognizerCtor;
  @CordovaProperty() JordanIdFrontRecognizerResult: JordanIdFrontRecognizerResultCtor;
  @CordovaProperty() JordanIdFrontRecognizer: JordanIdFrontRecognizerCtor;
  @CordovaProperty() KuwaitIdBackRecognizerResult: KuwaitIdBackRecognizerResultCtor;
  @CordovaProperty() KuwaitIdBackRecognizer: KuwaitIdBackRecognizerCtor;
  @CordovaProperty() KuwaitIdFrontRecognizerResult: KuwaitIdFrontRecognizerResultCtor;
  @CordovaProperty() KuwaitIdFrontRecognizer: KuwaitIdFrontRecognizerCtor;
  @CordovaProperty() MalaysiaDlFrontRecognizerResult: MalaysiaDlFrontRecognizerResultCtor;
  @CordovaProperty() MalaysiaDlFrontRecognizer: MalaysiaDlFrontRecognizerCtor;
  @CordovaProperty() MalaysiaMyTenteraRecognizerResult: MalaysiaMyTenteraRecognizerResultCtor;
  @CordovaProperty() MalaysiaMyTenteraRecognizer: MalaysiaMyTenteraRecognizerCtor;
  @CordovaProperty() MexicoVoterIdFrontRecognizerResult: MexicoVoterIdFrontRecognizerResultCtor;
  @CordovaProperty() MexicoVoterIdFrontRecognizer: MexicoVoterIdFrontRecognizerCtor;
  @CordovaProperty() MoroccoIdBackRecognizerResult: MoroccoIdBackRecognizerResultCtor;
  @CordovaProperty() MoroccoIdBackRecognizer: MoroccoIdBackRecognizerCtor;
  @CordovaProperty() MoroccoIdFrontRecognizerResult: MoroccoIdFrontRecognizerResultCtor;
  @CordovaProperty() MoroccoIdFrontRecognizer: MoroccoIdFrontRecognizerCtor;
  @CordovaProperty() MrtdCombinedRecognizerResult: MrtdCombinedRecognizerResultCtor;
  @CordovaProperty() MrtdCombinedRecognizer: MrtdCombinedRecognizerCtor;
  @CordovaProperty() MrtdRecognizerResult: MrtdRecognizerResultCtor;
  @CordovaProperty() MrtdRecognizer: MrtdRecognizerCtor;
  @CordovaProperty() MyKadBackRecognizerResult: MyKadBackRecognizerResultCtor;
  @CordovaProperty() MyKadBackRecognizer: MyKadBackRecognizerCtor;
  @CordovaProperty() MyKadFrontRecognizerResult: MyKadFrontRecognizerResultCtor;
  @CordovaProperty() MyKadFrontRecognizer: MyKadFrontRecognizerCtor;
  @CordovaProperty() NewZealandDlFrontRecognizerResult: NewZealandDlFrontRecognizerResultCtor;
  @CordovaProperty() NewZealandDlFrontRecognizer: NewZealandDlFrontRecognizerCtor;
  @CordovaProperty() PaymentCardBackRecognizerResult: PaymentCardBackRecognizerResultCtor;
  @CordovaProperty() PaymentCardBackRecognizer: PaymentCardBackRecognizerCtor;
  @CordovaProperty() PaymentCardCombinedRecognizerResult: PaymentCardCombinedRecognizerResultCtor;
  @CordovaProperty() PaymentCardCombinedRecognizer: PaymentCardCombinedRecognizerCtor;
  @CordovaProperty() PaymentCardFrontRecognizerResult: PaymentCardFrontRecognizerResultCtor;
  @CordovaProperty() PaymentCardFrontRecognizer: PaymentCardFrontRecognizerCtor;
  @CordovaProperty() Pdf417RecognizerResult: Pdf417RecognizerResultCtor;
  @CordovaProperty() Pdf417Recognizer: Pdf417RecognizerCtor;
  @CordovaProperty() PolandCombinedRecognizerResult: PolandCombinedRecognizerResultCtor;
  @CordovaProperty() PolandCombinedRecognizer: PolandCombinedRecognizerCtor;
  @CordovaProperty() PolandIdBackRecognizerResult: PolandIdBackRecognizerResultCtor;
  @CordovaProperty() PolandIdBackRecognizer: PolandIdBackRecognizerCtor;
  @CordovaProperty() PolandIdFrontRecognizerResult: PolandIdFrontRecognizerResultCtor;
  @CordovaProperty() PolandIdFrontRecognizer: PolandIdFrontRecognizerCtor;
  @CordovaProperty() RomaniaIdFrontRecognizerResult: RomaniaIdFrontRecognizerResultCtor;
  @CordovaProperty() RomaniaIdFrontRecognizer: RomaniaIdFrontRecognizerCtor;
  @CordovaProperty() SerbiaCombinedRecognizerResult: SerbiaCombinedRecognizerResultCtor;
  @CordovaProperty() SerbiaCombinedRecognizer: SerbiaCombinedRecognizerCtor;
  @CordovaProperty() SerbiaIdBackRecognizerResult: SerbiaIdBackRecognizerResultCtor;
  @CordovaProperty() SerbiaIdBackRecognizer: SerbiaIdBackRecognizerCtor;
  @CordovaProperty() SerbiaIdFrontRecognizerResult: SerbiaIdFrontRecognizerResultCtor;
  @CordovaProperty() SerbiaIdFrontRecognizer: SerbiaIdFrontRecognizerCtor;
  @CordovaProperty() SimNumberRecognizerResult: SimNumberRecognizerResultCtor;
  @CordovaProperty() SimNumberRecognizer: SimNumberRecognizerCtor;
  @CordovaProperty() SingaporeChangiEmployeeIdRecognizerResult: SingaporeChangiEmployeeIdRecognizerResultCtor;
  @CordovaProperty() SingaporeChangiEmployeeIdRecognizer: SingaporeChangiEmployeeIdRecognizerCtor;
  @CordovaProperty() SingaporeCombinedRecognizerResult: SingaporeCombinedRecognizerResultCtor;
  @CordovaProperty() SingaporeCombinedRecognizer: SingaporeCombinedRecognizerCtor;
  @CordovaProperty() SingaporeDlFrontRecognizerResult: SingaporeDlFrontRecognizerResultCtor;
  @CordovaProperty() SingaporeDlFrontRecognizer: SingaporeDlFrontRecognizerCtor;
  @CordovaProperty() SingaporeIdBackRecognizerResult: SingaporeIdBackRecognizerResultCtor;
  @CordovaProperty() SingaporeIdBackRecognizer: SingaporeIdBackRecognizerCtor;
  @CordovaProperty() SingaporeIdFrontRecognizerResult: SingaporeIdFrontRecognizerResultCtor;
  @CordovaProperty() SingaporeIdFrontRecognizer: SingaporeIdFrontRecognizerCtor;
  @CordovaProperty() SlovakiaCombinedRecognizerResult: SlovakiaCombinedRecognizerResultCtor;
  @CordovaProperty() SlovakiaCombinedRecognizer: SlovakiaCombinedRecognizerCtor;
  @CordovaProperty() SlovakiaIdBackRecognizerResult: SlovakiaIdBackRecognizerResultCtor;
  @CordovaProperty() SlovakiaIdBackRecognizer: SlovakiaIdBackRecognizerCtor;
  @CordovaProperty() SlovakiaIdFrontRecognizerResult: SlovakiaIdFrontRecognizerResultCtor;
  @CordovaProperty() SlovakiaIdFrontRecognizer: SlovakiaIdFrontRecognizerCtor;
  @CordovaProperty() SloveniaCombinedRecognizerResult: SloveniaCombinedRecognizerResultCtor;
  @CordovaProperty() SloveniaCombinedRecognizer: SloveniaCombinedRecognizerCtor;
  @CordovaProperty() SloveniaIdBackRecognizerResult: SloveniaIdBackRecognizerResultCtor;
  @CordovaProperty() SloveniaIdBackRecognizer: SloveniaIdBackRecognizerCtor;
  @CordovaProperty() SloveniaIdFrontRecognizerResult: SloveniaIdFrontRecognizerResultCtor;
  @CordovaProperty() SloveniaIdFrontRecognizer: SloveniaIdFrontRecognizerCtor;
  @CordovaProperty() SpainDlFrontRecognizerResult: SpainDlFrontRecognizerResultCtor;
  @CordovaProperty() SpainDlFrontRecognizer: SpainDlFrontRecognizerCtor;
  @CordovaProperty() SwedenDlFrontRecognizerResult: SwedenDlFrontRecognizerResultCtor;
  @CordovaProperty() SwedenDlFrontRecognizer: SwedenDlFrontRecognizerCtor;
  @CordovaProperty() SwitzerlandDlFrontRecognizerResult: SwitzerlandDlFrontRecognizerResultCtor;
  @CordovaProperty() SwitzerlandDlFrontRecognizer: SwitzerlandDlFrontRecognizerCtor;
  @CordovaProperty() SwitzerlandDlBackRecognizerResult: SwitzerlandDlBackRecognizerResultCtor;
  @CordovaProperty() SwitzerlandDlBackRecognizer: SwitzerlandDlBackRecognizerCtor;
  @CordovaProperty() SwitzerlandIdFrontRecognizerResult: SwitzerlandIdFrontRecognizerResultCtor;
  @CordovaProperty() SwitzerlandIdFrontRecognizer: SwitzerlandIdFrontRecognizerCtor;
  @CordovaProperty() SwitzerlandPassportRecognizerResult: SwitzerlandPassportRecognizerResultCtor;
  @CordovaProperty() SwitzerlandPassportRecognizer: SwitzerlandPassportRecognizerCtor;
  @CordovaProperty() UnitedArabEmiratesDlFrontRecognizerResult: UnitedArabEmiratesDlFrontRecognizerResultCtor;
  @CordovaProperty() UnitedArabEmiratesDlFrontRecognizer: UnitedArabEmiratesDlFrontRecognizerCtor;
  @CordovaProperty() UnitedArabEmiratesIdBackRecognizerResult: UnitedArabEmiratesIdBackRecognizerResultCtor;
  @CordovaProperty() UnitedArabEmiratesIdBackRecognizer: UnitedArabEmiratesIdBackRecognizerCtor;
  @CordovaProperty() UnitedArabEmiratesIdFrontRecognizerResult: UnitedArabEmiratesIdFrontRecognizerResultCtor;
  @CordovaProperty() UnitedArabEmiratesIdFrontRecognizer: UnitedArabEmiratesIdFrontRecognizerCtor;
  @CordovaProperty() VinRecognizerResult: VinRecognizerResultCtor;
  @CordovaProperty() VinRecognizer: VinRecognizerCtor;
  @CordovaProperty() UsdlRecognizerResult: UsdlRecognizerResultCtor;
  @CordovaProperty() UsdlRecognizer: UsdlRecognizerCtor;
  @CordovaProperty() UsdlCombinedRecognizerResult: UsdlCombinedRecognizerResultCtor;
  @CordovaProperty() UsdlCombinedRecognizer: UsdlCombinedRecognizerCtor;
}
