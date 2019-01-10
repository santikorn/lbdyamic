import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDateComponent } from './ngx-date.component';

describe('NgxDateComponent', () => {
  let component: NgxDateComponent;
  let fixture: ComponentFixture<NgxDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
