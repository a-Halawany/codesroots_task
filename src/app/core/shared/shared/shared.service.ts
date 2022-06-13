import { Injectable } from '@angular/core';
import { environment as env } from '@env/environment';
import { HomeInterface } from '@modules/home-interface';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  domain_url: string = env.domain_url
  homeData:HomeInterface = {categories:[],newoffers:[],sliders:[]}
  constructor() { }
}
