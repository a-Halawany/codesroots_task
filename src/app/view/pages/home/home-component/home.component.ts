import { SharedService } from './../../../../core/shared/shared/shared.service';
import { environment as env } from '@env/environment';
import { Component, OnInit } from '@angular/core';
import { HomeService } from '@modules/home.service';
import { map } from 'rxjs';
import { HomeInterface, Sliders } from '@modules/home-interface';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  constructor(private homeService:HomeService,public sharedService:SharedService) { }

  ngOnInit(): void {
    this.getHomepage();

  }


  getHomepage() {
    this.homeService
      .getHomepage()
      .pipe(
        map((data) => {
          data.sliders.forEach((ele) => {
            ele.photo = env.domain_url + ele.photo;
          });
          return data;
        })
      )
      .subscribe(
        (res) => {
          this.sharedService.homeData = res
        },
        (res) => {},
        () => {}
      );
  }

}
