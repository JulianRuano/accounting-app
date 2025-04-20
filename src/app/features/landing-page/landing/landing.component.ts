import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { IButton } from '../../../shared/components/button/ibutton';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  imports: [ButtonComponent,RouterModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
