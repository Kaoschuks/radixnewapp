import { Injectable, inject } from '@angular/core';
import { Observable, from, of, forkJoin } from 'rxjs';
import { switchMap, finalize } from 'rxjs/operators';
import { RequestService } from './request';
import { StorageService } from './storage';
import { STORAGE_REQ_KEY, StoredRequest } from 'src/app/core';

   
@Injectable({
    providedIn: 'root'
})
export class OfflineManagerService {
  private storage: StorageService = inject(StorageService)
  private _api: RequestService = inject(RequestService)
 
  checkForEvents(): Observable<any> {
    return from(this.storage.getItem(STORAGE_REQ_KEY)).pipe(
      switchMap((storedOperations: any) => {
        let storedObj = JSON.parse(storedOperations);
        if (storedObj && storedObj.length > 0) {
          return this.sendRequests(storedObj).pipe(
            finalize(() => {
              // this.globals.toastAlert(`Local data succesfully synced to API!`, {
              //   duration: 3000,
              //   position: 'bottom'
              // });
              this.storage.removeItem(STORAGE_REQ_KEY);
            })
          );
        } else {
          console.log('no local events to sync');
          return of(false);
        }
      })
    )
  }
 
  private sendRequests(operations: StoredRequest[]) {
    let obs = [];
 
    for (let op of operations) {
      let oneObs = (op.type == "POST") ? this._api.post(op.url, op.data) : 
        (op.type == "DELETE") ? this._api.delete(op.url) : 
          (op.type == "PUT") ? this._api.update(op.url, op.data) : this._api.get(op.url);
      obs.push(oneObs);
    }
 
    // Send out all local events and return once they are finished
    return forkJoin(obs);
  }
}