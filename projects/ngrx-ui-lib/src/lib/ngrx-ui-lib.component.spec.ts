import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxUiLibComponent } from './ngrx-ui-lib.component';

describe('NgrxUiLibComponent', () => {
  let component: NgrxUiLibComponent;
  let fixture: ComponentFixture<NgrxUiLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgrxUiLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxUiLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
