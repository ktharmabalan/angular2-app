export class Product {
  constructor(
    public id: number,
    public name: string,
    public sale: boolean,
    public category: number) {}
}

export class Category {
  constructor(public id: number, public name: string) {}
}
