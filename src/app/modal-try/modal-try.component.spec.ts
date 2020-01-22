import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTryComponent } from './modal-try.component';

describe('ModalTryComponent', () => {
  let component: ModalTryComponent;
  let fixture: ComponentFixture<ModalTryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
