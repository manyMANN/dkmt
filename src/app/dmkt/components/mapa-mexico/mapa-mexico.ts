import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'mapa-mexico',
  standalone: true,
  templateUrl: './mapa-mexico.html',
  styleUrls: ['./mapa-mexico.css']
})
export class MapaMexicoComponent implements AfterViewInit {
  private map!: L.Map;
  private zoomInicial = 5;
  private centroInicial: L.LatLngExpression = [23, -102];

  estados = [
  {
    nombre: 'Jugos del Valle, Planta Tepotzotlán, Estado de México',
    coords: [19.6240, -99.2740], // coordenadas aproximadas Tepotzotlán
    img: 'assets/img/proyectos/jugos_valle.png',
    descripcion: 'Planta de producción de jugos del Valle con integración de sistemas de refrigeración y recuperación de calor.'
  },
  {
    nombre: 'Peñafiel Bebidas, S.A., Planta Tehuacán, Puebla',
    coords: [18.4606, -97.3906], // coordenadas aproximadas Tehuacán
    img: 'assets/img/proyectos/penafiel.png',
    descripcion: 'Planta de bebidas Peñafiel con optimización de procesos térmicos y eficiencia energética.'
  },
  {
    nombre: 'SuKarne S.A. de C.V., Planta La Piedad de Cabadas, Michoacán',
    coords: [20.3561, -101.8536], // coordenadas aproximadas La Piedad
    img: 'assets/img/proyectos/sukarne.png',
    descripcion: 'Planta cárnica SuKarne con implementación de sistemas de refrigeración para la conservación de carne.'
  },
  {
    nombre: 'Pilgrims Pride de México S.A., Planta Soledad de Doblado, Veracruz',
    coords: [19.0495, -96.2833], // coordenadas aproximadas Soledad de Doblado
    img: 'assets/img/proyectos/pilgrims.png',
    descripcion: 'Planta avícola con recuperación de calor y optimización de procesos de frío y calor.'
  },
  {
    nombre: 'Frigorizados La Huerta, S.A. de C.V., Planta San Francisco de los Romo, Aguascalientes',
    coords: [22.1500, -102.3000], // coordenadas aproximadas San Francisco de los Romo
    img: 'assets/img/proyectos/frigorizados.png',
    descripcion: 'Planta de alimentos congelados con sistemas integrados de refrigeración y eficiencia energética.'
    },
    {
     nombre: 'Grupo Cuauhtémoc Moctezuma, Planta Nicolás Romero, Estado de México',
  coords: [19.7286, -99.2780], // coordenadas aproximadas de Nicolás Romero
  img: 'assets/img/proyectos/cuauhtemoc.png',
  descripcion: 'Planta de bebidas del Grupo Cuauhtémoc Moctezuma con integración de sistemas de refrigeración y eficiencia energética.'
  }
];


  ngAfterViewInit(): void {
    this.initMap();
    this.addMarkers();
  }

  private initMap(): void {
    this.map = L.map('mapa', {
      center: this.centroInicial,
      zoom: this.zoomInicial,
      zoomControl: false,
      dragging: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      boxZoom: false,
      keyboard: false
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
  }

  private addMarkers(): void {
  const customIcon = L.icon({
    iconUrl: 'assets/img/ubicacion2.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });

  this.estados.forEach(estado => {
    const popupContent = `
      <div style="text-align:center; width:250px; height:270px; z-index:10;">
        <h3 style="margin: 0; color:#1e40af; font-size:16px;">${estado.nombre}</h3>
        <img src="${estado.img}" alt="${estado.nombre}" style="width:250px; height:150px; border-radius:8px; margin-top:5px; object-fit:cover;">
        <p style="font-size:13px; font-weight: bold; color:#555; margin-top:5px; margin-bottom:4px;">${estado.descripcion}</p>
      </div>
    `;

    const marker = L.marker(estado.coords as L.LatLngExpression, { icon: customIcon })
      .addTo(this.map)
      .bindPopup(popupContent);

    marker.on('click', () => {
      const [lat, lng] = estado.coords;
      const adjustedCoords = [lat + 1, lng];
      this.map.flyTo(adjustedCoords as L.LatLngExpression, 7, { duration: 0.7 });
      marker.openPopup();
    });

    marker.on('popupclose', () => {
      this.map.flyTo(this.centroInicial, this.zoomInicial, { duration: 0.7 });
    });
  });
}

}
