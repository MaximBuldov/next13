import { ICat } from "./categories.model";

interface IImage {
  id: number,
  src: string,
  name: string,
}

interface IDefaultAttr {
  id: number,
  name: string,
  option: string
}

interface IAttributes {
  id: number,
  name: string,
  position: number,
  visible: boolean,
  variation: boolean,
  options: string[]
}

export interface IProduct {
  id: number,
  name: string,
  slug: string,
  description: string,
  sku: string,
  price: string,
  average_rating: string,
  categories: ICat[],
  images: IImage[],
  attributes: IAttributes[],
  default_attributes: IDefaultAttr[],
  variations: number[],
  acf: {
    rating: number
  }
}