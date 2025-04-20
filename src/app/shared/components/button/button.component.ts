import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { IButton } from './ibutton';

@Component({
  selector: 'app-button',
  imports: [ButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() button!: IButton;

}
