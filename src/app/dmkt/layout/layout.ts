import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from '../components/menu/menu';
import { Footercomponent } from '../components/footer/footer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  imports: [MenuComponent, Footercomponent, CommonModule, RouterOutlet],
  templateUrl: './layout.html',
})
export class LayoutComponent {
  portada = 'assets/img/portada/portada-azul.png';
  scrolled = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 20;
  }
 }
