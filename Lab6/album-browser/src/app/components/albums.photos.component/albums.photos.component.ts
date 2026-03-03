import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../../models/photo.schema';
import { AlbumService } from '../../services/album.service';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-albums.photos.component',
  imports: [
    AsyncPipe,
    RouterLink
  ],
  templateUrl: './albums.photos.component.html',
  styleUrl: './albums.photos.component.css',
})
export class AlbumsPhotosComponent {
  protected photos$ !: Observable<Photo[]>;
  protected id !: number;

  constructor(private route : ActivatedRoute, private albumService: AlbumService) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.id = id;
    this.photos$ = this.albumService.getPhotos(id);
  }
}
