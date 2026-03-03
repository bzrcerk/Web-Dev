import {ChangeDetectorRef, Component} from '@angular/core';
import {Album} from '../../models/album.schema';
import {AlbumService} from '../../services/album.service';
import { Observable } from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-albumsPage',
  standalone : true,
  imports: [
    RouterLink
  ],
  templateUrl: './albums.html',
  styleUrl: './albums.css',
})

export class AlbumsPage {
  protected albums : Album[] | null = null;

  constructor(private AlbumService : AlbumService, private cdr : ChangeDetectorRef) { }

  ngOnInit() {
    this.AlbumService.getAlbums().subscribe(
      {
        next : (albums) => {
          this.albums = albums;
          this.cdr.detectChanges();
        },
        error : (err) => console.log(err)
      }
    );
  }

  public deleteAlbum(id: number) {
    const updated = this.albums!.filter(a => a.id !== id);

    this.AlbumService.deleteAlbum(id).subscribe(
      {
        next : (al) => {
          this.albums = updated;
          this.cdr.detectChanges();
        },
        error : (err) => console.log(err)
      }
    )
  }
}
