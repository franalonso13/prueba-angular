import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartDataset, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @Input() horizontal: boolean = false;
  @Input() barChartData: ChartData<'bar'> = {
    labels: [ '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027' ],
    
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', hoverBackgroundColor: '#DB0D90', backgroundColor: '#DB0D90' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', hoverBackgroundColor: '#E602F2', backgroundColor: '#E602F2' },
      { data: [ 8, 33, 35, 11, 90, 30, 100 ], label: 'Series C', hoverBackgroundColor: '#AA12EB', backgroundColor: '#AA12EB' }
    ],
  };

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {

    responsive: true,
    indexAxis: 'x',
    plugins: {
      legend: {
        display: true,
      }
    }
  };
  public barChartType: ChartType = 'bar';


  constructor() { }

  ngOnInit(): void {

    if (this.horizontal){
      this.barChartOptions!.indexAxis = 'y';
    }
  }

}
