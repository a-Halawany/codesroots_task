import { SharedService } from './../../../../core/shared/shared/shared.service';
import { Component, Input, OnInit } from '@angular/core';
import { Newoffers } from '@modules/home-interface';

@Component({
  selector: 'app-recomended-hotels',
  templateUrl: './recomended-hotels.component.html',
  styleUrls: ['./recomended-hotels.component.css']
})
export class RecomendedHotelsComponent implements OnInit {
  @Input() recData: Newoffers[] = []

  responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
];

  constructor(public sharedService:SharedService) { }

  ngOnInit(): void {
  }

}
