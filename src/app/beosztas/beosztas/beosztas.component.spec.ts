import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeosztasComponent } from './beosztas.component';

describe('BeosztasComponent', () => {
  let component: BeosztasComponent;
  let fixture: ComponentFixture<BeosztasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeosztasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeosztasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
