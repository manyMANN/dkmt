import { Component, HostListener } from '@angular/core';
import { MenuLogoComponent } from "../../components/menu/menu-logo/menu-logo";
//import { provideIcons } from '@ng-icons/core';
//import { heroChevronDoubleRight } from '@ng-icons/heroicons/outline';
//import { heroChevronDoubleLeft } from '@ng-icons/heroicons/outline';
import { CommonModule } from '@angular/common';
import { MapaMexicoComponent } from "../../components/mapa-mexico/mapa-mexico";

@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule, MenuLogoComponent, MapaMexicoComponent],
  templateUrl: './home.html',
  //providers: [provideIcons({ heroChevronDoubleRight, heroChevronDoubleLeft })],
})
export default class HomeComponent {
  portada = 'assets/img/portada.png';
  currentStep = 1;
  currentStep2 = 1;
  currentStep3 = 1;
  disableTransition = false;
  scrolled = false;

  steps = [
    { icon: 'fa-solid fa-bullseye' },
    { icon: 'fa-solid fa-eye' },
    { icon: 'fa-solid fa-recycle' },
  ];

  steps2 = [
    { title: 'Misión', text: 'Desarrollar e implementar soluciones tecnológicas innovadoras de recuperación de calor en sistemas de refrigeración con CO₂, optimizando el uso de recursos energéticos y reduciendo la dependencia de sistemas tradicionales como calderas.', img: '/assets/img/mision.png' },
    { title: 'Visión', text: 'Ser líderes en Latinoamérica en la implementación de sistemas de refrigeración con CO₂ y recuperación de calor, reconocidos por impulsar la transición hacia procesos industriales más limpios, eficientes y sustentables.', img: '/assets/img/vision.png' },
    { title: 'Objetivo de la Marca', text: 'Recuperar el calor generado en un sistema de refrigeración con CO2, evitando los sistemas de generación de calor tradicionales, como lo son las calderas.', img: '/assets/img/vision.png' },
  ];

  steps3 = [
    { icon: 'fa-solid fa-cubes', title: 'Modelo Base' },             // Representa estructura, base o componentes.
    { icon: 'fa-solid fa-gears', title: '¿Cómo funciona?' },         // Indica funcionamiento, mecanismos, procesos.
    { icon: 'fa-solid fa-cheese', title: 'Planta de Quesos "El Lobo"' }, // Ícono directo relacionado con quesos / industria alimentaria.
  ];

  steps4 = [
    {
      title: 'Modelo Base',
      text: 'Nuestro modelo se basa en la integración de sistemas de refrigeración con CO₂ y recuperación de calor, optimizando el uso de energía y reduciendo la dependencia de calderas tradicionales. Esta plataforma combina frío y calor en un mismo sistema eficiente y sustentable.',
      img: '/assets/img/modelo-base.png'
    },
    {
      title: '¿Cómo funciona?',
      text: 'El sistema recupera el calor generado por el proceso de refrigeración y lo reutiliza para aplicaciones industriales, como calentamiento de agua o procesos térmicos. De esta forma, se aprovecha al máximo la energía disponible y se minimiza el desperdicio energético.',
      img: '/assets/img/funcionamiento.png'
    },
    {
      title: 'Planta de Quesos "El Lobo"',
      text: 'En la planta de quesos “El Lobo” implementamos nuestro sistema de refrigeración con CO₂, logrando recuperar el calor para procesos de pasteurización y limpieza. Esto permitió reducir el consumo de gas y electricidad, mejorando la eficiencia y sostenibilidad de la operación.',
      img: '/assets/img/planta-lobo.png'
    }
  ];


  steps5 = [
    {
      icon: 'fa-solid fa-drumstick-bite', // Representa la industria cárnica
      title: 'Industria Cárnica'
    },
    {
      icon: 'fa-solid fa-beer-mug-empty', // Representa la industria cervecera
      title: 'Industria Cervecera'
    },
    {
      icon: 'fa-solid fa-snowflake', // Representa alimentos congelados
      title: 'Industria de Alimentos Congelados (Vegetales)'
    },
    {
      icon: 'fa-solid fa-wine-bottle', // Representa producción de jugos y bebidas
      title: 'Producción de Jugos y Bebidas'
    }
  ];


  steps6 = [
    {
      title: 'Industria Cárnica',
      text: 'Implementación de sistemas de refrigeración con recuperación de calor en plantas de procesamiento de carne, optimizando la eficiencia energética y garantizando la conservación y calidad del producto.',
      img: '/assets/img/industria_carnica.png'
    },
    {
      title: 'Industria Cervecera',
      text: 'Aplicación de tecnología de CO₂ y recuperación de calor en cervecerías para mejorar la eficiencia en procesos de fermentación y enfriamiento, reduciendo el consumo de energía y recursos.',
      img: '/assets/img/industria_cervecera.png'
    },
    {
      title: 'Industria de Alimentos Congelados (Vegetales)',
      text: 'Sistemas de refrigeración integrados para la conservación de vegetales y otros alimentos congelados, aprovechando la recuperación de calor para optimizar procesos térmicos y energéticos en plantas industriales.',
      img: '/assets/img/alimentos_congelados.png'
    },
    {
      title: 'Producción de Jugos y Bebidas',
      text: 'Implementación de soluciones térmicas sostenibles en la producción de jugos y bebidas, integrando frío y calor en una misma plataforma para reducir consumo energético y mejorar la eficiencia de los procesos.',
      img: '/assets/img/jugos_bebidas.png'
    }
  ];


  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 20;
  }

  nextStep() {
    setTimeout(() => {
      if (this.currentStep < this.steps.length) this.currentStep++;
    }, 50);
  }
  prevStep() {
    setTimeout(() => {
      if (this.currentStep > 1) this.currentStep--;
    }, 50)

  }
  reset() {
    this.disableTransition = true;
    this.currentStep = 1;
    setTimeout(() => {
      this.disableTransition = false;
    }, 50);
  }

  nextStep2() {
    setTimeout(() => {
      if (this.currentStep2 < this.steps4.length) this.currentStep2++;
    }, 50);
  }
  prevStep2() {
    setTimeout(() => {
      if (this.currentStep2 > 1) this.currentStep2--;
    }, 50)

  }
  reset2() {
    this.disableTransition = true;
    this.currentStep2 = 1;
    setTimeout(() => {
      this.disableTransition = false;
    }, 50);
  }

  nextStep3() {
    setTimeout(() => {
      if (this.currentStep3 < this.steps6.length) this.currentStep3++;
    }, 50);
  }
  prevStep3() {
    setTimeout(() => {
      if (this.currentStep3 > 1) this.currentStep3--;
    }, 50)

  }
  reset3() {
    this.disableTransition = true;
    this.currentStep3 = 1;
    setTimeout(() => {
      this.disableTransition = false;
    }, 50);
  }
}
