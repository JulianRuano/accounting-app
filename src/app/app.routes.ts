import { Routes } from '@angular/router';
import { LandingComponent } from './features/landing-page/landing/landing.component';
import { LoginComponent } from './features/auth/login/login.component';
import { ListEnterpriseComponent } from './features/enterprise/component/list-enterprise/list-enterprise.component';
import { ViewEnterpriseComponent } from './features/enterprise/component/view-enterprise/view-enterprise.component';

export const routes: Routes = [

  {
   path: '',
   component: LandingComponent,
   title: 'Landing Page'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login'
  },
  {
    path: 'enterprise',
    component: ListEnterpriseComponent,
    title: 'List Enterprise'
  },
  {
    path: 'enterprise/:id',
    component: ViewEnterpriseComponent,
    title: 'View Enterprise'
  },


];
