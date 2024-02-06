import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { UserComponent } from './pages/user/user.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http"
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { UserService } from './services/user.service';
import { UsersComponent } from './pages/users/users.component';
import { AvailableHousesComponent } from './pages/available-houses/available-houses.component';
import { MyHouseComponent } from './pages/my-house/my-house.component';
import { SingleComponent } from './pages/single/single.component';
import { AdminHousesComponent } from './pages/admin-houses/admin-houses.component';
import { OffersDoneComponent } from './pages/offers-done/offers-done.component';
import { UserOffersComponent } from './pages/user-offers/user-offers.component';
import { SingleHousePageComponent } from './pages/single-house-page/single-house-page.component';
import { RegisterComponent } from './pages/register/register.component';
import { ShowFirstComponent } from './pages/show-first/show-first.component';
import { ShowSecondComponent } from './pages/show-second/show-second.component';
import { ImagesComponent } from './pages/images/images.component';
import { CheckImagesComponent } from './pages/check-images/check-images.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    LoginComponent,
    HeaderComponent,
    ForbiddenComponent,
    UsersComponent,
    AvailableHousesComponent,
    MyHouseComponent,
    SingleComponent,
    AdminHousesComponent,
    OffersDoneComponent,
    UserOffersComponent,
    SingleHousePageComponent,
    RegisterComponent,
    ShowFirstComponent,
    ShowSecondComponent,
    ImagesComponent,
    CheckImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
