import {Injectable} from '@angular/core';
import {Observable, of as observableOf} from 'rxjs';
import {TrafficChartData} from '../data/traffic-chart';

@Injectable()
export class TrafficChartService extends TrafficChartData {
  
  private data: number[] = [
    300, 520, 435, 530,
    730, 620, 660, 860,
  ];
  
  getTrafficChartData(): Observable<number[]> {
    return observableOf(this.data);
  }
}
