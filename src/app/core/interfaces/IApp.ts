export enum ConnectionStatus {
  Online,
  Offline,
}

export interface configModel {
  pin: string,
  currency: string,
  login: boolean
}

export interface StoredRequest {
url: string,
type: string,
data: any,
time: number,
id: string
}

export interface fcmModel {
  uid: string,
  email: string,
  device: Array<any>
}

export interface shareModel {
  message: string,
  subject: string,
  image: string,
  url: string,
}

export interface authModel {
  pin: string,
  password: string,
}

export interface registerModel {
  nin: string,
  userType: string,
  guardianPin?: string,
  bvn: string,
  gender: string,
  title: string,
  firstName: string,
  lastName: string,
  middleName?: string,
  dateOfBirth: string,
  phoneNumber: string,
  emailAddress: string,
  nationality: string,
  stateOfOriginCode: string,
  lgaOriginCode: string,
  maritalStatus: string,
  residentialAddress: string,
  residentialStateCode: string,
  residentialLgaCode: string,
  apaCode?: string,
  employmentDetails: {
    employerCode: string,
  },
  nextOfKinDetails: {
    nextOfKinTitle?: string,
    nextOfKinGender?: string,
    nextOfKinFirstname: string,
    nextOfKinSurname: string,
    nextOfKinAddress?: string,
    nextOfRelationship: string,
    nextOfKinPhoneNumber?: string,
    nextOfKinEmail?: string,
  },
  parentDetails?: {
    rsaPin?: string,
  },
  biometricsDetails: {
    photo: string,
    signature: string,
    consentForm: string,
  },
}