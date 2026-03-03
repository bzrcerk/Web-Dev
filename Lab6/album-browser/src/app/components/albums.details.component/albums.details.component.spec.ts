import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsDetailsComponent } from './albums.details.component';

describe('AlbumsDetailsComponent', () => {
  let component: AlbumsDetailsComponent;
  let fixture: ComponentFixture<AlbumsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumsDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumsDetailsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
