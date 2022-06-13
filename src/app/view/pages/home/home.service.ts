import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '@env/environment';
import { Observable } from 'rxjs';
import { HomeInterface } from './home-interface';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  baseUrl: string = env.api_root + 'branches/';
  constructor(private http: HttpClient) {}

  getHomepage(search:any={}): Observable<HomeInterface> {
    return this.http.get<HomeInterface>(this.baseUrl + 'homepage', {
      params:{...search}
    });
  }
}
