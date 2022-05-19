import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeloltekComponent } from './jeloltek.component';

describe('JeloltekComponent', () => {
  let component: JeloltekComponent;
  let fixture: ComponentFixture<JeloltekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeloltekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JeloltekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
