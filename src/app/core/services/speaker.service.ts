import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchResult } from '../models/http/http.model';
import { Speaker } from '../models/http/speaker.model';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {

  constructor(private http: HttpClient) { }

  search(nat: string, page = 1, perPage = 9): Observable<SearchResult<Speaker>> {
    // TODO: Have to create new backend api endpoint to search user by username. There is not this api in current api doc.
    const api_url = "https://randomuser.me/api";
    let params = new HttpParams().append('nat', nat).append('results', perPage).append('page', page);
    // https://randomuser.me/api/?page=3&results=10&seed=abc
    return this.http.get<SearchResult<Speaker>>(api_url, {params});
  }
}