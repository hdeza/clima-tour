import { IActivity } from './activity.interface';

export interface IDay {
  id: number;
  title: string;
  activities: IActivity[];
}

export class Day implements IDay {
  constructor(
    public id: number,
    public title: string,
    public activities: IActivity[] = []
  ) {}

  // Metodo para agregar una actividad al día
  addActivity(activity: IActivity): void {
    this.activities.push(activity);
  }
}
