import { Injectable } from "@angular/core";
import { Preferences } from '@capacitor/preferences';
import * as CryptoJS from "crypto-js";
import { secretKey } from "src/app/core";

@Injectable()
export class StorageService {
  secret: string = secretKey

  encrypt(data: any, key: string) {
    return CryptoJS.AES.encrypt(JSON.stringify(data), key).toString();
  }

  decrypt(data: any, key: string) {
      let bytes = CryptoJS.AES.decrypt(data, key);
      return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  }

  saveItem = (key: string, data: {}) =>
  {
    sessionStorage.setItem(key, this.encrypt(data, this.secret))
    // Preferences.set({
    //     key: key,
    //     value: this.encrypt(data, this.secret),
    // }).catch((ex: any) => {
    //     throw new Error(ex)
    // })
  }

  getItem = async (key: string):Promise<any> =>
  {
      return await new Promise((resolve, reject) => {
        const encryptedRes: any = sessionStorage.getItem(key)
        // return Preferences.get({ key: key })
        // .then((encryptedRes: any) => {
            if(encryptedRes.value != null) {
                resolve(this.decrypt(encryptedRes.value, this.secret));
            } else {
                resolve(encryptedRes.value);
            }
        // })
        // .catch((err: any) => {
        //     reject(err)
        // });
      });
  }

  removeItem = (key: string) =>
  {
    return sessionStorage.removeItem(key)
    // return Preferences.remove({
    //     key: key
    // })
  }

  clear = () =>
  {
    return sessionStorage.clear();
    // return Preferences.clear();
  }
}
