import { HomeService } from './../../home/home.service';
import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { environment as env } from '@env/environment';
import { SharedService } from 'app/core/shared/shared/shared.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  constructor(private homeService: HomeService,public sharedService:SharedService) {}

  ngOnInit(): void {
  }


}
