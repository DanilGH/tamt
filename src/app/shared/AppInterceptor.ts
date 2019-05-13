import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AuthService} from "../services/auth.service";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable()
export class AppInterceptor implements HttpInterceptor{
  constructor(private auth: AuthService){
    console.log(this.auth.isAuthenticated());
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.auth.isAuthenticated()){
      req = req.clone({
        setHeaders: {
          Authorization: this.auth.getToken()
        },
        setParams: {
          tenantguid: this.auth.getToken()
        }
      })
    }
    return next.handle(req)
  }
}
