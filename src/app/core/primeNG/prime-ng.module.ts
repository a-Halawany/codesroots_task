import { CarouselModule } from 'primeng/carousel';
import { NgModule } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  exports: [
    GalleriaModule,
    TabViewModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
    CarouselModule
  ],
})
export class PrimeNGModule {}
