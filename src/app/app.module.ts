import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SearchComponent } from './search/search.component';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { HomeCategoriesComponent } from './home-categories/home-categories.component';
import { ServiceBlockComponent } from './service-block/service-block.component';
import { FooterMainBlockComponent } from './footer-main-block/footer-main-block.component';
import { FooterCopyrightComponent } from './footer-copyright/footer-copyright.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopBarComponent,
    SearchComponent,
    HomeSliderComponent,
    HomeCategoriesComponent,
    ServiceBlockComponent,
    FooterMainBlockComponent,
    FooterCopyrightComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
