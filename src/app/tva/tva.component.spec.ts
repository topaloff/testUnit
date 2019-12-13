import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvaComponent } from './tva.component';

describe('TVA 20%', () => {
  let component: TvaComponent;
  let fixture: ComponentFixture<TvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Doit sortir une tva a 20%', () => {
    let price = 100;
    let priceTTC = component.calculTVA(price);
    expect(priceTTC).toEqual(120); 
    expect(component).toBeTruthy();
  });
});
