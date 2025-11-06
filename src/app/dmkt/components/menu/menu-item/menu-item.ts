import { Component, Input } from '@angular/core';

@Component({
  selector: 'menu-item',
  imports: [],
  templateUrl: './menu-item.html',
})
export class MenuItemComponent {
  @Input() label?: string;
  @Input() href?: string;
}
