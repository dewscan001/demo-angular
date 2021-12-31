import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconForAngularComponent } from './icon-for-angular.component';

describe('IconForAngularComponent', () => {
  let component: IconForAngularComponent;
  let fixture: ComponentFixture<IconForAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconForAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconForAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
