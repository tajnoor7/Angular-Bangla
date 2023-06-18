import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LstorageComponent } from './lstorage.component';

describe('LstorageComponent', () => {
  let component: LstorageComponent;
  let fixture: ComponentFixture<LstorageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LstorageComponent]
    });
    fixture = TestBed.createComponent(LstorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
