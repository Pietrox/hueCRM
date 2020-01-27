import {Injectable} from '@angular/core';
import {Observable, of as observableOf} from 'rxjs';
import {StatsBarData} from '../data/stats-bar';

@Injectable()
export class StatsBarService extends StatsBarData {
  
  private statsBarData: number[] = [
    300, 520, 435, 530,
    730, 620, 660, 860,
  ];
  
  getStatsBarData(): Observable<number[]> {
    return observableOf(this.statsBarData);
  }
}
