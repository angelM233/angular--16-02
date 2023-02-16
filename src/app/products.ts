export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  stock: number;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    stock: 0,
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    stock: 0,
  },
  {
    id: 3,
    name: 'Xiaomi',
    price: 1000,
    description: 'Redmi note 8',
    stock: 0,
  },
  {
    id: 3,
    name: 'Alcatel',
    price: 1000,
    description: '',
    stock: 0,
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/