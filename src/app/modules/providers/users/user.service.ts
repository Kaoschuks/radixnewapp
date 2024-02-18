import { Injectable, inject } from '@angular/core';
import { GlobalsServices, RequestService, StorageService, authModel, registerModel } from 'src/app/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  globals: GlobalsServices = inject(GlobalsServices);
  _api: RequestService = inject(RequestService);
  storage: StorageService = inject(StorageService);

  user: any;
  path: string = "users/";
  loader: any;
  tries: number = 0;

  async isLoggedOn() {
    return new Promise(async (resolve, reject) => {
      try {
        const config: any = await this.storage.getItem('appconfig');
        const user: any = await this.storage.getItem('userdata');

        // this._api.setJwt(jwt)
        this.globals.config = (!config) ? this.globals.config : config;
        if(!this.globals.config.login) reject(false);
        this.user = user;

        resolve(true)
      } catch (ex) {
        console.log(ex)
        reject(false)
      }
    })
  }

  async login(form: any) {
    return await new Promise((resolve, reject) => {
      try{
        this.globals.loading.show()
        this._api.get(`S_WEBUSER/GetUsers_Login/${form.pin}/${form.password}`)
        .then((res: any) => {
          if(!res || res.length == 0 || res[0]['USERPIN'] <= 0) reject("User information not found in database");
          this.user = res[0]

          this.globals.config.login = true
          this.globals.config.pin = form.pin

          this.storage.saveItem("userdata", this.user)
          this.storage.saveItem("appconfig", this.globals.config)
          this.globals.loading.hide()
          resolve("user logged in")
        }).catch((ex: any) => {
          this.globals.loading.hide()
          reject(ex.message || ex.error || ex)
        })
      }catch(ex: any) {
        this.globals.loading.hide()
        reject(ex.message || ex.error || ex)
      }
    })
  }

  async forgot(form: authModel) {
    return await new Promise((resolve, reject) => {
      try{
        this.globals.loading.show()
        this._api.get(`S_WEBUSER/GetUsers_SendPass/${form.pin}`)
        .then((res: any) => {
          if(!res || res.length == 0 || res[0]['PASSCODE'] <= 0) reject("User information not found in database");

          this.globals.loading.hide()
          resolve("forgot password sent")
        }).catch((ex: any) => {
          this.globals.loading.hide()
          reject(ex.message || ex.error || ex)
        })
      }catch(ex: any) {
        this.globals.loading.hide()
        reject(ex.message || ex.error || ex)
      }
    })
  }

  async register(form: registerModel) {
    console.log(form)
    return await new Promise((resolve, reject) => {
      this.globals.loading.show()
      try{
        this._api.post(`S_WEBUSER`, form)
        .then((res: any) => {
          if(!res || res.length == 0) reject("User information not found in database");
          this.globals.loading.hide()
          resolve("success")
        }).catch((ex: any) => {
          this.globals.loading.hide()
          reject(ex.message || ex.error || ex)
        })
      }catch(ex: any) {
        console.log(ex.message)
        this.globals.loading.hide()
        reject(ex.message || ex.error || ex)
      }
    })
  }

  async get_user_profile() {
    return await new Promise((resolve, reject) => {
      try{
        this.globals.loading.show()
        this._api.get(`AccountsTrans/GetCustProfile/${this.globals.config.pin}`)
        .then((res: any) => {
          if(!res || res.length == 0 ) reject("User information not found in database");
          this.user =  res[0]
          this.storage.saveItem("userdata", this.user)
          
          this.globals.loading.hide()
          resolve(this.user)
        }).catch((ex: any) => {
          this.globals.loading.hide()
          reject(ex.message || ex.error || ex)
        })
      }catch(ex: any) {
        this.globals.loading.hide()
        reject(ex.message || ex.error || ex)
      }
    })
  }

  async send_feedback(form: any) {
    return await new Promise((resolve, reject) => {
      try{
        this.globals.loading.show()
        this._api.post(`util`, form)
        .then((res: any) => {
          if(!res || res.length == 0 ) reject("User information not found in database");
          
          this.globals.loading.hide()
          console.log(res)
          this.globals.toastAlert("Feedback send sucessfully")
        }).catch((ex: any) => {
          throw new Error(ex.message || ex.error || ex)
        })
      }catch(ex: any) {
        this.globals.loading.hide()
        this.globals.toastAlert(ex.message || ex.error || ex)
      }
    })
  }

}
