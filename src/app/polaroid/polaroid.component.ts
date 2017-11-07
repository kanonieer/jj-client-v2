import { Component, OnInit, Input } from '@angular/core';

import { Image } from './../shared/models/Image';
import { ImageService } from './../shared/services/image.service';

@Component({
  selector: 'app-polaroid',
  templateUrl: './polaroid.component.html',
  styleUrls: ['./polaroid.component.less']
})
export class PolaroidComponent implements OnInit {

  @Input() image: Image;

  constructor(private imageService: ImageService) {
  }

  ngOnInit() {
    console.log(this.image);
  }

  public toggleIsFavourite(isFavourite: Boolean): void {
    this.image.isFavourite = isFavourite;
    this.imageService
      .toggleFavourite(this.image._id, isFavourite)
      .subscribe(data => console.log(data));
  }
}
