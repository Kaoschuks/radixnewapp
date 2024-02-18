export enum ConnectionStatus {
  Online,
  Offline,
}

export interface configModel {
  pin: string,
  walkthrough: boolean,
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
  firstname: string,
  middlename: string,
  surname: string,
  pensiontype: string,
  email: string,
  phonenumber: string,
}