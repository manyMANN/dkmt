import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'menu-logo',
  imports: [],
  templateUrl: './menu-logo.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuLogoComponent {
  logo = 'assets/img/logo/logo2.png'
 }
