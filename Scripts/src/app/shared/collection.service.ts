import { Injectable } from '@angular/core';
import { Collection } from '../models/collection';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  constructor(private http: HttpClient, private httpService: HttpService) {}

  private getUrl: string = 'https://localhost:5001/collection';
  private postUrl: string = 'https://localhost:5001/collection/PostCollection';

  getCollections(): Observable<Collection[]> {
    return this.http.get<Collection[]>(this.getUrl + '/GetCollections');
  }

  getCollection(id: number): Observable<Collection> {
    return this.http.get<Collection>(`${this.getUrl}/GetCollection/${id}`);
  }

  postCollection(collection: Collection): void {
    this.httpService.postMethod(this.postUrl, collection);
  }
}
