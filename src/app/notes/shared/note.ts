interface INote {
  id: number;
  title: string;
  value: string;
  color: string;
}

export class Note implements INote {
  constructor (public id: number, public title: string, public value: string, public color: string) {
    }
}
