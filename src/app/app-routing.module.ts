import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';
import { AuthGuard } from './auth/auth.guard';
import { NoAuthGuard } from './auth/no-auth.guard';
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

const routes: Routes = [
  {path: 'home' , component: HomeComponent},
  {path: 'user' , component: UserComponent,canActivate:[AuthGuard],data:{roles:'User'}},
  {path: 'available-houses' , component: AvailableHousesComponent,canActivate:[AuthGuard],data:{roles:'User'}},
  {path: 'single-house-page/:id' , component: SingleHousePageComponent,canActivate:[AuthGuard],data:{roles:'User'}},
  {path: 'my-house/:id' , component: MyHouseComponent},
  {path: 'single' , component: SingleComponent,canActivate:[AuthGuard],data:{roles:'User'}},
  {path: 'images/:id' , component: ImagesComponent,canActivate:[AuthGuard],data:{roles:'User'}},
  {path: 'check-images/:id' , component: CheckImagesComponent,canActivate:[AuthGuard],data:{roles:'User'}},
  {path: 'user-offers/:houseId' , component: UserOffersComponent,canActivate:[AuthGuard],data:{roles:'User'}},
  {path: 'admin' , component: AdminComponent,canActivate:[AuthGuard],data:{roles:'Admin'}},
  {path: 'users' , component: UsersComponent,canActivate:[AuthGuard],data:{roles:'Admin'}},
  {path: 'show-first/:id' , component: ShowFirstComponent,canActivate:[AuthGuard],data:{roles:'Admin'}},
  {path: 'show-second/:id' , component: ShowSecondComponent,canActivate:[AuthGuard],data:{roles:'Admin'}},
  {path: 'admin-houses' , component: AdminHousesComponent,canActivate:[AuthGuard],data:{roles:'Admin'}},
  {path: 'offers-done' , component: OffersDoneComponent,canActivate:[AuthGuard],data:{roles:'Admin'}},
  {path: 'login' , component: LoginComponent,canActivate:[NoAuthGuard]},
  {path: 'register' , component: RegisterComponent,canActivate:[NoAuthGuard]},
  {path: 'forbidden' , component: ForbiddenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
