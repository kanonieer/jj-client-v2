import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FacebookService, UIParams, UIResponse, InitParams } from 'ngx-facebook';

import { Image } from './../shared/models/Image';
import { ImageService } from './../shared/services/image.service';
import { StorageService } from '../shared/services/storage.service';

@Component({
  selector: 'app-polaroid',
  templateUrl: './polaroid.component.html',
  styleUrls: ['./polaroid.component.less']
})
export class PolaroidComponent implements OnInit {

  @Input() image: Image;
  @Output() imageDeletion: EventEmitter<Image> = new EventEmitter<Image>();

  public showEditModal: Boolean = false;
  public isFacebookLogged: Boolean = false;

  constructor(
    private imageService: ImageService,
    private storageService: StorageService,
    private facebookService: FacebookService
  ) {
    const initParams: InitParams = {
      appId: '865241546949819',
      xfbml: true,
      version: 'v2.8'
    };

    facebookService.init(initParams);

    this.isFacebookLogged = this.checkIfFacebookLogged();
  }

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

  public share() {
    const params: UIParams = {
      href: 'http://res.cloudinary.com/dzgtgeotp/image/upload/' + this.image._id + '.jpg',
      method: 'share'
    };

    this.facebookService.ui(params)
      .then((res: UIResponse) => console.log(res))
      .catch((e: any) => console.error(e));
  }

  public checkIfFacebookLogged() {
    return !!this.storageService.get('fb_token');
  }
}
