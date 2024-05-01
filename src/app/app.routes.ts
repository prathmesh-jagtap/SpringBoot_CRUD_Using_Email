import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';

export const routes: Routes = [
    
    {path: "", component: HomeComponent},
    {path: "about", component: AboutComponent},
    {path: "contact", component: ContactUsComponent},
];
