import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit, AfterViewInit {
    selectedYear: number = 2022;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
      window.dispatchEvent(new Event('resize'));
  }

}
