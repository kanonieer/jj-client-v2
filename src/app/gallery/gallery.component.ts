import { Component, OnInit } from '@angular/core';
import { ImageService } from './../shared/services/image.service';
import { Image } from './../shared/models/Image';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.less']
})
export class GalleryComponent implements OnInit {

  public images: Image[] = [];
  public selectedImage: Image;
  public showPolaroidModal: Boolean = false;

  constructor(
    private imageService: ImageService,
    private activatedRoute: ActivatedRoute
  ) {
    this.images = this.activatedRoute.snapshot.data['images'];
  }

  ngOnInit() {
  }

  public removeImage(image): void {
    this.images.splice(this.images.indexOf(image), 1);
  }

  public togglePolaroidModal(): void {
    this.showPolaroidModal = !this.showPolaroidModal;
  }

  public showPolaroid(image: Image): void {
    this.selectedImage = image;
    this.togglePolaroidModal();
  }
}
