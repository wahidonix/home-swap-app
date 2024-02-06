import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";
import { UserAuthService } from "../services/user-auth.service";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private userAuthService:UserAuthService,
        private route:Router
    ){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(req.headers.get("No-Auth") === "True"){
            return next.handle(req.clone());
        }

        const token = this.userAuthService.getToken();
        req = this.addToken(req,token);

        return next.handle(req).pipe(
            catchError(
                (err:HttpErrorResponse) => {
                    console.log(err.status);
                    if(err.status === 401){
                      this.route.navigate(['/login'])
                    }else if(err.status === 403){
                      this.route.navigate(['/forbiden'])
                    }
                    return throwError("Something is worng");
                }
            )
        );

        
    }

    private addToken(request:HttpRequest<any>,token:string | null){
        return request.clone(
            {
                setHeaders:{
                    Authorization: `Bearer ${token}`
                }
            }
        );
    }

}