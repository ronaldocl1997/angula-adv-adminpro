import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  labels1:string[] = [ 'Pan', 'Refresco', 'Tacos' ];
  data1: ChartData<'doughnut'> = {
    labels: this.labels1,
    datasets: [
      { data: [ 100, 500, 400 ],
      backgroundColor:['#9E120E','#FF5800','#FFB414']
      }
    ]
  };

}
