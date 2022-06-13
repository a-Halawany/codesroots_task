import { HttpClientModule } from '@angular/common/http';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'app/view/layout/navbar/navbar.component';
import { SliderComponent } from 'app/view/pages/partials/slider/slider.component';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { PrimeNGModule } from 'app/core/primeNG/prime-ng.module';
import { SearchComponent } from 'app/view/pages/partials/search/search.component';
import { RecomendedHotelsComponent } from 'app/view/pages/partials/recomended-hotels/recomended-hotels.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NavbarComponent,
    SliderComponent,
    SearchComponent,
    RecomendedHotelsComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, PrimeNGModule,FormsModule,ReactiveFormsModule],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    NavbarComponent,
    SliderComponent,
    FontAwesomeModule,
    HttpClientModule,
    SearchComponent,
    RecomendedHotelsComponent,
  ],
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faFacebook, faTwitter, faInstagram, faLinkedin,faBars);
  }
}
