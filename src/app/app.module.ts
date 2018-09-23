import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomepageIntroComponent } from './homepage-intro/homepage-intro.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { SlideManagementComponent } from './portfolio/slide-management/slide-management.component';
import { ProdDiscountProgramComponent } from './portfolio/prod-discount-program/prod-discount-program.component';
import { QuickViewComponent } from './portfolio/quick-view/quick-view.component';
import { FiltersComponent } from './portfolio/filters/filters.component';
import { PortfolioSnippetsComponent } from './portfolio/portfolio-snippets/portfolio-snippets.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomepageIntroComponent,
    ResumeComponent,
    PortfolioComponent,
    AboutComponent,
    SlideManagementComponent,
    ProdDiscountProgramComponent,
    QuickViewComponent,
    FiltersComponent,
    PortfolioSnippetsComponent
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
