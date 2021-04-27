import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories = [
    { id: 1, name: 'ac', link: '' },
    { id: 2, name: 'aluminum', link: '' },
    { id: 3, name: 'carpenter', link: '' },
    { id: 4, name: 'cctv', link: '' },
    { id: 5, name: 'ceiling', link: '' },
    { id: 6, name: 'cleaner', link: '' },
    { id: 7, name: 'contractors', link: '' },
    { id: 8, name: 'cushionWorkers', link: '' },
    { id: 9, name: 'doserFreight', link: '' },
    { id: 10, name: 'electricians', link: '' },
    { id: 11, name: 'landscaping', link: '' },
    { id: 12, name: 'mesons', link: '' },
    { id: 13, name: 'painters', link: '' },
    { id: 14, name: 'plumbers', link: '' },
    { id: 15, name: 'renters', link: '' },
    { id: 16, name: 'solarPanel', link: '' },
    { id: 17, name: 'stoneSandSoil', link: '' },
    { id: 18, name: 'tilesWorkers', link: '' },
    { id: 19, name: 'welders', link: '' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  moveTo(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

}
