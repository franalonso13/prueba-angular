import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  public doughnutChartLabels: string[] = [ ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [] },
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor( private graficasService: GraficasService) { }

  ngOnInit(): void {
    //this.graficasService.getUsuariosRedesSociales().subscribe(data => {
    //  this.doughnutChartData.labels = Object.keys(data);
    //  this.doughnutChartData.datasets[0].data = Object.values(data);
    //  this.chart?.update();
    //})

    this.graficasService.getUsuariosRedesSocialesDonaData().subscribe( ({labels, values}) =>{
      this.doughnutChartData.labels = labels;
      this.doughnutChartData.datasets[0].data = values;
      this.chart?.update();
    })

  }

}
