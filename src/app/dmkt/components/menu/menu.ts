import { Component } from '@angular/core';
import { MenuLogoComponent } from './menu-logo/menu-logo';
import { MenuItemComponent } from './menu-item/menu-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'menu',
  imports: [MenuLogoComponent, MenuItemComponent, CommonModule],
  templateUrl: './menu.html',
})
export class MenuComponent {
  items = [
    { label: "Proyectos", href: "/proyectos" },
    { label: "Servicios", href: "/servicios" },
    { label: "Nosotros", href: "/nosotros" },
    {label:"Contacto", href:"/contacto"},
  ]
}
