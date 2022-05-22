import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeloltComponent } from './jelolt.component';

describe('JeloltComponent', () => {
  let component: JeloltComponent;
  let fixture: ComponentFixture<JeloltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeloltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JeloltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
