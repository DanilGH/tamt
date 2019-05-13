import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunwinComponent } from './funwin.component';

describe('FunwinComponent', () => {
  let component: FunwinComponent;
  let fixture: ComponentFixture<FunwinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunwinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunwinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
