import { Injectable } from '@angular/core';
import { Collection } from '../models/collection';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  constructor(private http: HttpClient) {}

  private url: string = 'https://localhost:5001/collection';

  getCollections(): Observable<Collection[]> {
    return this.http.get<Collection[]>(this.url);
  }

  getCollection(id: number): Observable<Collection> {
    return this.http.get<Collection>(`${this.url}/${id}`);
  }
}
