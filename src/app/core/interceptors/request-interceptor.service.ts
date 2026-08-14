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
        // Only set Content-Type on requests with a body. Adding it to bodyless
        // GET requests turns them into CORS-preflighted requests, and some
        // endpoints (e.g. /api/employers) don't return Access-Control-Allow-Methods
        // on their OPTIONS response, causing the browser to block the request.
        const modifiedReq = request.body != null
            ? request.clone({ setHeaders: { 'content-type': 'application/json' } })
            : request;

        return handler.handle(modifiedReq).pipe(
            map(event => {
                return event;
            }),
            catchError(requestError => {
                // if (requestError instanceof HttpErrorResponse) this.errorProcessing(requestError);
                return throwError(requestError.error.Message || requestError.error || 'Request cannot be completed.');
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
