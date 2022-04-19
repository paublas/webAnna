import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NanadenadaComponent } from './nanadenada.component';

describe('NanadenadaComponent', () => {
  let component: NanadenadaComponent;
  let fixture: ComponentFixture<NanadenadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NanadenadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NanadenadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
