import { Component, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html',
  styles: [
  ]
})
export class BarrasDobleComponent  {
  
  labels: string[] = [ '2021', '2022', '2023', '2024', '2025']

  proveedoresData: ChartData<'bar'> = {
    labels:this.labels,
    datasets: [
      { data: [ 100, 200,300,400,500 ], label: 'Vendedor A', hoverBackgroundColor: '#DB0D90', backgroundColor: '#DB0D90' },
      { data: [ 50,250,30,450,200 ], label: 'Vendedor B', hoverBackgroundColor: '#E602F2', backgroundColor: '#E602F2' },
    ],
  };

  productoData: ChartData<'bar'> = {
    labels:this.labels,
    datasets: [
      { data: [ 200,300,400,300,100 ], label: 'Carros', hoverBackgroundColor: '#DB0D90', backgroundColor: '#DB0D90' }
    ],
  };



}
