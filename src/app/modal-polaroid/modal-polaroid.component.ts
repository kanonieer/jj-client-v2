import { Component, OnInit, Output, Input, EventEmitter, HostListener } from '@angular/core';
import { Image } from '../shared/models/Image';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,
  ESCAPE = 27
}

@Component({
  selector: 'app-modal-polaroid',
  templateUrl: './modal-polaroid.component.html',
  styleUrls: ['./modal-polaroid.component.less']
})
export class ModalPolaroidComponent implements OnInit {

  @Input() selectedImage: Image;

  @Input() images: Image[];

  @Input() show: Boolean = false;

  @Output() hide: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  @Output() imageDeletion: EventEmitter<Image> = new EventEmitter<Image>();

  public isMobile = false;

  constructor() { }

  ngOnInit() {
    this.adjustSize();
  }

  private adjustSize() {
    this.isMobile = (window.innerWidth < 768);
  }

  public closeModal(): void {
    this.hide.emit(false);
  }

  public selectPrevious(): void {
    const position = this.images.indexOf(this.selectedImage);

    if (position === 0) {
      this.selectedImage = this.images[this.images.length - 1];
    } else {
      this.selectedImage = this.images[position - 1];
    }
  }

  public selectNext(): void {
    const position = this.images.indexOf(this.selectedImage);

    if (position === this.images.length - 1) {
      this.selectedImage = this.images[0];
    } else {
      this.selectedImage = this.images[position + 1];
    }
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {

    if (event.keyCode === KEY_CODE.RIGHT_ARROW && this.show) {
      this.selectNext();
    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW && this.show) {
      this.selectPrevious();
    }

    if (event.keyCode === KEY_CODE.ESCAPE && this.show) {
      this.closeModal();
    }
  }

  public emitRemoveImage($event): void {
    this.imageDeletion.emit($event);
    this.selectNext();
  }
}
