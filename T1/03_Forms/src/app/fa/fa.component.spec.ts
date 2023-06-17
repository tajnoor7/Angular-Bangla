import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaComponent } from './fa.component';

describe('FaComponent', () => {
  let component: FaComponent;
  let fixture: ComponentFixture<FaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaComponent]
    });
    fixture = TestBed.createComponent(FaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
