import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [
  ]
})
export class BarrasComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true
  };
  public barChartType: ChartType = 'bar';


  public barChartData: ChartData<'bar'> = {
    labels: [ '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', hoverBackgroundColor: '#DB0D90', backgroundColor: '#DB0D90' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', hoverBackgroundColor: '#E602F2', backgroundColor: '#E602F2' },
      { data: [ 8, 33, 35, 11, 90, 30, 100 ], label: 'Series C', hoverBackgroundColor: '#AA12EB', backgroundColor: '#AA12EB' }
    ],
  };

  constructor() { }

  ngOnInit(): void {
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40 ];
      this.chart?.update();
  }
}
