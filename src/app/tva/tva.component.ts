import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tva',
  templateUrl: './tva.component.html',
  styleUrls: ['./tva.component.css']
})
export class TvaComponent implements OnInit {

  title = 'testUnitaire'
  constructor() { }

  ngOnInit() {
  }

  calculTVA(price) {
    return price + (price * 20 / 100);
  }

}
