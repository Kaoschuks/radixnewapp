import { Injectable } from '@angular/core';
import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable()
export class RequestInterceptorService implements HttpInterceptor {

    public intercept(request: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {
        let headers: any = {
            'content-type': 'application/json',
        }
        // if(this.globals.config.token) headers["Authorization"] = `${this.globals.config.token}`;

        const modifiedReq = request.clone({
            setHeaders: headers
        });

        return handler.handle(modifiedReq).pipe(
            map(event => {
                return event;
            }),
            catchError(requestError => {
                if (requestError instanceof HttpErrorResponse) this.errorProcessing(requestError);
                return throwError(requestError.error);
            }));
    }

    errorProcessing(error: any) {
        switch (error.status) {
            case 403:
            case 401:
                // this.globals.spinnerText = "Access revoked and denied";
                // this.globals.spinner.show();
                // setTimeout(async () => {
                //     this.globals.spinnerText = "Logging out";
                //     this.globals.spinner.hide();
                //     this.globals.loggedOut()
                // }, 1000);
                break;
            // case 400:
            //     if (error.error.message) {
            //         this.utilService.showToast(error.error.message);
            //     } else if (error.error.errors && error.error.errors.length > 0) {
            //         error.error.errors.forEach(message => {
            //             this.utilService.showToast(message);
            //         });
            //     }
        }
    }
}
