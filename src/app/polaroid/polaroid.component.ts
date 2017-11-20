import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Image } from './../shared/models/Image';
import { ImageService } from './../shared/services/image.service';

@Component({
  selector: 'app-polaroid',
  templateUrl: './polaroid.component.html',
  styleUrls: ['./polaroid.component.less']
})
export class PolaroidComponent implements OnInit {

  @Input() image: Image;
  @Output() imageDeletion: EventEmitter<Image> = new EventEmitter<Image>();

  public showEditModal: Boolean = false;

  constructor(private imageService: ImageService) {}

  ngOnInit() {}

  public deleteImage(): void {
    this.imageService
      .deleteImage(this.image._id)
      .subscribe(data => {
        console.log(data);
        this.imageDeletion.emit(this.image);
      });
  }

  public editImage(form: NgForm): void {
    this.image.title = form.value.title;
    this.image.tags = form.value.tags;
    this.toggleEditModal();
    this.imageService.updateImage(this.image)
      .subscribe(data => console.log(data));
  }

  public toggleIsFavourite(isFavourite: Boolean): void {
    this.image.isFavourite = isFavourite;
    this.imageService.updateImage(this.image)
      .subscribe(data => console.log(data));
  }

  public toggleEditModal(): void {
    this.showEditModal = ! this.showEditModal;
  }
}
