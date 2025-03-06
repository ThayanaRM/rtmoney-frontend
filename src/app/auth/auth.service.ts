import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../core/models/User';
import { Observable } from 'rxjs';
import { AppConstants } from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  decodedToken: any;

  static emitiLogin = new EventEmitter<string>();
  static emitiLogout = new EventEmitter<string>();

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
    ) {
      this.loadingToken();
    }

    requestToken(user: User): Observable<any> {
       const headers = new HttpHeaders()
       .append('Content-Type', 'application/x-www-form-urlencoded')
       .append('Authorization','Basic cnRtb25leTpydG1vbmV5MTIz');
       console.log('2 - AuthService.ts - requestToken(): Token requisitado no backend.')

      const body = `username=${user.email}&password=${user.password}&grant_type=password`;

      console.log('AuthService.ts - requestToken(): Enviando requisição com headers:', headers)
      return this.http.post<any>(AppConstants.oauthTokenUrl, body, { headers });
    }

    saveToken(token: string){
      console.log('4- AuthService.ts - saveToken(): Token antes de salvar:', token);

      if (!token) {
        console.error('ERRO: Token é null ou undefined!');
        return;
      }

      try {
        localStorage.setItem('token', token);
        console.log('Token salvo no localStorage:', localStorage.getItem('token'));
      } catch (error) {
        console.error('Erro ao salvar o token no localStorage:', error);
      }
      this.decodedToken = this.jwtHelper.decodeToken(token);
      console.log('5 - AuthService.ts - saveToken(): Token decodificado:', this.decodedToken); //Veja se o token é válido

      AuthService.emitiLogin.emit(this.decodedToken?.user_name);
    }

    loadingToken() {
      const token = localStorage.getItem('token');
      console.log('AuthService.ts - loadingToken(): Pegou o token:', token);
      if (token) {
        this.saveToken(token);
        console.log('AuthService.ts - loadingToken(): Salvou o token:', token);
      }
    }

    // logout() {
    //   localStorage.removeItem('token');
    //   this.decodedToken = '';
    //   AuthService.emitiLogout.emit(this.decodedToken?.user_name);
    // }

    haveRole(permissao: string) {
      return this.decodedToken && this.decodedToken.authorities.includes(permissao);
    }

    isAccessTokenInvalid() {
      const token = localStorage.getItem('token');
      return !token || this.jwtHelper.isTokenExpired(token);
    }

    haveAnyRole(roles: any) {
      for (const role of roles) {
        if (this.haveRole(role)) {
          return true;
        }
      }

      return false;
    }

}
