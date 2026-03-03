import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Album} from '../models/album.schema';
import {Photo} from '../models/photo.schema';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private baseUrl = "https://jsonplaceholder.typicode.com/";

  constructor(private http: HttpClient) { }

  public getAlbums() : Observable<Album[]> {
    return this.http.get<Album[]>(`${this.baseUrl}/albums`);
  }

  public getAlbum(id : number) : Observable<Album> {
    return this.http.get<Album>(`${this.baseUrl}/albums/${id}`);
  }

  public getPhotos(id : number) : Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.baseUrl}/albums/${id}/photos`);
  }

  public updateAlbum(album : Album) : Observable<Album>{
    return this.http.put<Album>(`${this.baseUrl}/albums/${album.id}`, album);
  }

  public deleteAlbum(id : number) : Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/albums/${id}`);
  }
}
