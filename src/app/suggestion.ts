export class Suggestion {
  id: number;
  author: string;
  suggestion: string;

  constructor(values: Object = {}) {
    Object.assign(this, values)
  }
}
