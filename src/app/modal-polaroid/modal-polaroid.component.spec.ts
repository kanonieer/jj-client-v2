import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPolaroidComponent } from './modal-polaroid.component';

describe('ModalPolaroidComponent', () => {
  let component: ModalPolaroidComponent;
  let fixture: ComponentFixture<ModalPolaroidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPolaroidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPolaroidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
