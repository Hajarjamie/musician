import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginResDto } from './login/models/login-res-dto';
import { LoginDto } from './login/models/login-dto';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.rootUrl;

  constructor(private httpClient: HttpClient) { }

  login(dto: LoginDto): Observable<LoginResDto> {
    const networkUrl = `${this.apiUrl}auth/login`;

    return this.httpClient.post<LoginResDto>(networkUrl, dto).pipe(
      map((res: LoginResDto) => res));
  }

}
