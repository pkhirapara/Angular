import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraymethodComponent } from './arraymethod.component';

describe('ArraymethodComponent', () => {
  let component: ArraymethodComponent;
  let fixture: ComponentFixture<ArraymethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArraymethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArraymethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
