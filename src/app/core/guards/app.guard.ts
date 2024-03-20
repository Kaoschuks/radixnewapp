import { Injectable, inject } from '@angular/core';
import { CanActivate,  Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/shared/services/users/user.service';
import { GlobalsServices } from 'src/app/shared/services';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardsService implements CanActivate {
  private router: Router = inject(Router)
  globals: GlobalsServices = inject(GlobalsServices);
  _accountServices: UserService = inject(UserService);

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     return new Promise(async (resolve, reject) => {
       try {
         await this._accountServices.isLoggedOn()
         resolve(true)
       } catch(ex) {
        this.globals.openModal('walkthroughmodal');
        this.router.navigateByUrl('/login')
        reject(false);
       }
     })
   }

}