import {ChangeDetectorRef, Component} from '@angular/core';

import {Album} from '../../models/album.schema';
import {AlbumService} from '../../services/album.service';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-albums.details.component',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './albums.details.component.html',
  styleUrl: './albums.details.component.css',
})
export class AlbumsDetailsComponent {
  protected album : Album | null = null;

  constructor(private albumService: AlbumService, private route : ActivatedRoute, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.params['id']);
    this.albumService.getAlbum(id).subscribe(
      {
        next : (al) => {
          this.album = al;
          this.cdr.detectChanges();
        },
        error : err => console.log(err),
      }
    );
  }

  public handleChanges(title : string) : void {
    if (!this.album) return;

    const updated : Album = {...this.album, title : title};
    const id = Number(this.route.snapshot.params['id']);
    this.albumService.updateAlbum(updated).subscribe(
      () => {
        this.album = updated;
        this.cdr.detectChanges();
      }
    )
  }
}
