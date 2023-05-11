export interface IItem {
  id: number;
  title: string;
  photo: string;
  price: number;
}

export interface FullItemCases {
  id: number;
  title: string;
  photo: string;
  price: number;
  type: string;
  view: string;
  recommendation: string;
  material: string;
  peculiarities: string;
  clasp: string;
  manufacturer: string;
}
