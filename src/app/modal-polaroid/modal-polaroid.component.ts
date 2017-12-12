import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Image } from '../shared/models/Image';

@Component({
  selector: 'app-modal-polaroid',
  templateUrl: './modal-polaroid.component.html',
  styleUrls: ['./modal-polaroid.component.less']
})
export class ModalPolaroidComponent implements OnInit {

  @Input() image: Image;

  @Input() show: Boolean = false;

  @Output() hide: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  @Output() next: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  @Output() previous: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  @Output() imageDeletion: EventEmitter<Image> = new EventEmitter<Image>();

  constructor() { }

  ngOnInit() {
  }

  public closeModal(): void {
    this.hide.emit(false);
  }

  public selectPrevious(): void {
    this.previous.emit();
  }

  public selectNext(): void {
    this.next.emit();
  }

  public emitRemoveImage($event): void {
    this.imageDeletion.emit($event);
    this.selectNext();
  }
}
