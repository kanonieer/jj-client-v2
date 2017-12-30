import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FacebookService, UIParams, UIResponse, InitParams } from 'ngx-facebook';

import { Image } from './../shared/models/Image';
import { ImageService } from './../shared/services/image.service';
import { StorageService } from '../shared/services/storage.service';
import { JourneysService } from '../shared/services/journeys.service';
import { ToastrService } from 'ngx-toastr';

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
  public size: Number = 500;

  constructor(
    private imageService: ImageService,
    private storageService: StorageService,
    private facebookService: FacebookService,
    private journeysService: JourneysService,
    private toastr: ToastrService
  ) {
    const initParams: InitParams = {
      appId: '865241546949819',
      xfbml: true,
      version: 'v2.8'
    };

    this.size = this.adjustSize();

    facebookService.init(initParams);

    this.isFacebookLogged = this.checkIfFacebookLogged();
  }

  ngOnInit() {}

  private adjustSize() {
    return (window.innerWidth < 768) ? 380 : Math.floor(window.innerHeight * 0.75);
  }

  public deleteImage(): void {
    this.imageService
      .deleteImage(this.image._id)
      .subscribe(success => {
        this.toastr.success('Image successfully deleted', 'Success');
        this.imageDeletion.emit(this.image);
      }, error => {
        this.toastr.error('Failed while deleting image', 'Error');
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

  public setAsJourneyBackground() {
    const payload = {
      background_image_id: this.image._id,
      _id: this.image.id_journey
    };

    this.journeysService.editJourney(payload)
    .subscribe(success => {
      console.log(success);
      this.toastr.success('Image set as Journey background!', 'Success');
    }, error => {
      console.log(error);
      this.toastr.error('There was an error while setting background.', 'Error');
    });
  }
}
