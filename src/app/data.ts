import {Category, Product} from './models';

export const CATEGORIES: Category[] = [
  { id: 1, name: 'Boxes' },
  { id: 2, name: 'Wraps' },
  { id: 3, name: 'Rods' }
];

export const PRODUCTS: Product[] = [
  { id: 1, name: 'Boxes', sale: false, category: 1 },
  { id: 2, name: 'Wraps', sale: true, category: 1 },
  { id: 3, name: 'Rods', sale: false, category: 1 },
  { id: 1, name: 'Paper', sale: false, category: 1 },
  { id: 5, name: 'Table', sale: true, category: 1 },
  { id: 6, name: 'Pens', sale: false, category: 1 }
];
