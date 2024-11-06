import { Activity } from './activity.interface';
import { IDay } from './day.interface';

export interface Itinerary {
  days: IDay[];
}

export class Itinerary implements Itinerary {
  constructor(public days: IDay[] = []) {}

  //Metodo para obtener todas las actividades por día
  getActivitiesByDay(dayIndex: number): Activity[] {
    if (dayIndex >= 0 && dayIndex < this.days.length) {
      return this.days[dayIndex].activities;
    }
    return [];
  }
}
