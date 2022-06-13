export interface Categories{
  id: number;
  name: string;
  photo: string;
}

export interface Sliders{
 photo: string;
}

export interface Newoffers{
  name: string;
  RestauranthId: number;
  description: string;
  cover: string;
  cuisines: Array<{
    name: string;
  }>;
}

export interface HomeInterface {
  categories: Array<Categories>;
  sliders: Array<Sliders>;
  newoffers: Array<Newoffers>;
}
