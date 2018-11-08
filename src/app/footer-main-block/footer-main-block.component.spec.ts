import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMainBlockComponent } from './footer-main-block.component';

describe('FooterMainBlockComponent', () => {
  let component: FooterMainBlockComponent;
  let fixture: ComponentFixture<FooterMainBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterMainBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterMainBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
