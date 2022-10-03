import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleOngComponent } from './singleOng.component';

describe('SingleOngComponent', () => {
  let component: SingleOngComponent;
  let fixture: ComponentFixture<SingleOngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleOngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleOngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
