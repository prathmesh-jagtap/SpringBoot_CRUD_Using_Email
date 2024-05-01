import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { SliderComponent } from './component/slider/slider.component';
import { AboutComponent } from './component/about/about.component';
import { HomeComponent } from './component/home/home.component';
import { PagesComponent } from './component/pages/pages.component';
import { BlogsComponent } from './component/blogs/blogs.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { ResonComponent } from './component/reson/reson.component';
import { ActivityComponent } from './component/activity/activity.component';
import { CoursesComponent } from './component/courses/courses.component';
import { CounterComponent } from './component/counter/counter.component';
import { VolunteerComponent } from './component/volunteer/volunteer.component';
import { NewsComponent } from './component/news/news.component';
import { DonationComponent } from './component/donation/donation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, SliderComponent, AboutComponent, 
    HomeComponent, PagesComponent, BlogsComponent, ContactUsComponent, ResonComponent, 
    ActivityComponent, CoursesComponent, CounterComponent, VolunteerComponent, NewsComponent, DonationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GlobTechPowerFoundation';
}
