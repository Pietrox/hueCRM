import {Injectable} from '@angular/core';
import {Observable, of as observableOf} from 'rxjs';
import {UserActive, UserActivityData} from '../data/user-activity';
import {PeriodsService} from './periods.service';

@Injectable()
export class UserActivityService extends UserActivityData {
  
  data = {};
  
  constructor(private periods: PeriodsService) {
    super();
    this.data = {
      week: this.getDataWeek(),
      month: this.getDataMonth(),
      year: this.getDataYear(),
    };
  }
  
  getUserActivityData(period: string): Observable<UserActive[]> {
    return observableOf(this.data[period]);
  }
  
  private getRandom = (roundTo: number) => Math.round(Math.random() * roundTo);
  
  private generateUserActivityRandomData(date) {
    return {
      date,
      pagesVisitCount: this.getRandom(1000),
      deltaUp: this.getRandom(1) % 2 === 0,
      newVisits: this.getRandom(100),
    };
  }
  
  private getDataWeek(): UserActive[] {
    return this.periods.getWeeks().map((week) => {
      return this.generateUserActivityRandomData(week);
    });
  }
  
  private getDataMonth(): UserActive[] {
    const currentDate = new Date();
    const days = currentDate.getDate();
    const month = this.periods.getMonths()[currentDate.getMonth()];
    
    return Array.from(Array(days)).map((_, index) => {
      const date = `${index + 1} ${month}`;
      
      return this.generateUserActivityRandomData(date);
    });
  }
  
  private getDataYear(): UserActive[] {
    return this.periods.getYears().map((year) => {
      return this.generateUserActivityRandomData(year);
    });
  }
}
