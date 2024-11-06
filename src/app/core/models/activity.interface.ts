export interface IActivity {
  id: number;
  title: string;
  description: string;
  considerations: string;
}

export class Activity implements IActivity {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public considerations: string
  ) {}
}
