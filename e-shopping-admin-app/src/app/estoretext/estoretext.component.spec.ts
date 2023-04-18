import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstoretextComponent } from './estoretext.component';

describe('EstoretextComponent', () => {
  let component: EstoretextComponent;
  let fixture: ComponentFixture<EstoretextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstoretextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstoretextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
