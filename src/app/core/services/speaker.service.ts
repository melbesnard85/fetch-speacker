import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchResult } from '../models/http/http.model';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {

  constructor(private http: HttpClient) { }

  search(): Observable<SearchResult<any>> {
    const api_url = "https://randomuser.me/api";
    const params = new HttpParams().append('results', 20).append('page', 11);
    return this.http.get<SearchResult<any>>(api_url, {params});
  }
}