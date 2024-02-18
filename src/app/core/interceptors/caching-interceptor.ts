import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, of, tap } from "rxjs";


interface CacheEntry {
    value: HttpEvent<unknown>;
    expiresOn: number;
}

const TTL = 3_000;

@Injectable({ providedIn: "root" })
export class CachingService {
    readonly #cache = new Map<string, CacheEntry>();

    get(key: string): HttpEvent<unknown> | undefined {
        const cached = this.#cache.get(key);

        if (!cached) return undefined;

        const hasExpired = new Date().getTime() >= cached.expiresOn;
        if (hasExpired) {
            this.#cache.delete(key);
            return undefined;
        }

        return cached.value;
    }

    set(key: string, value: HttpEvent<unknown>): void {
        if (key.includes("album")) {
            this.#cache.set(key, {
                value,
                expiresOn: new Date().getTime() + TTL,
            });
        }
    }
}

@Injectable()
export class CachingInterceptor implements HttpInterceptor {
  cache: CachingService = inject(CachingService);

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const cached = this.cache.get(req.url);
    const isCacheHit = cached !== undefined;
    if (isCacheHit) return of(cached);

    return next.handle(req).pipe(tap((response: any) => this.cache.set(req.url, response)));
  }
}
