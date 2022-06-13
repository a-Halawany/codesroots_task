import { SharedService } from './../../../../core/shared/shared/shared.service';
import { HomeService } from '@modules/home.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  SearchForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private homeService: HomeService,
    public sharedService: SharedService
  ) {
    this.SearchForm = fb.group({
      destination: ['', []],
      startDate: ['', []],
      endDate: ['', []],
      rooms: ['', []],
      adults: ['', []],
      kids: ['', []],
    });
  }

  // get controls for validation
  get searchForm() {
    return this.SearchForm.controls;
  }

  ngOnInit(): void {}

  getHomeDataWithFilter() {
    this.homeService.getHomepage(this.SearchForm.value).subscribe(
      (res) => {
        this.sharedService.homeData = res;
      },
      (error) => {},
      () => {}
    );
  }
}
