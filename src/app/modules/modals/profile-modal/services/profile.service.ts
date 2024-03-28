import { Injectable, inject } from '@angular/core';
import { GlobalsServices, UserService } from 'src/app/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  globals: GlobalsServices = inject(GlobalsServices);
  userService: UserService = inject(UserService);

  photo!: string;
  disabled: boolean = false
  formData: any
  
  async openOptions() {
    document.getElementById('photo')?.click() ;
  }

  uploadImage($event: any) {
    console.log($event)
  }

  saveProfile() {

  }
}
