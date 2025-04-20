import { Routes } from '@angular/router';
import { LandingComponent } from './features/landing-page/landing/landing.component';
import { LoginComponent } from './features/auth/login/login.component';
import { ListEnterpriseComponent } from './features/enterprise/component/list-enterprise/list-enterprise.component';
import { ViewEnterpriseComponent } from './features/enterprise/component/view-enterprise/view-enterprise.component';

export const routes: Routes = [

  {path:'', component: LandingComponent},
  {path:'login', component: LoginComponent},
  {path:'enterprise', component: ListEnterpriseComponent},
  {path:'view-enterprise', component: ViewEnterpriseComponent},

];
