import { Component, Input } from '@angular/core';
import { ChartData} from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input() title: string = '';
  @Input() data: ChartData<'doughnut'> = {
    labels: [],
    datasets: [
      { 
        data: [],
        backgroundColor: []
      }
    ]
  };
}
