export type ProductImage = {
  thumbnail: string,
  mobile: string,
  tablet: string,
  desktop: string
}

export type Product = {
  id: number,
  image: ProductImage
  name: string,
  category: string,
  price: number
}

export type ProductState = {
  products: Product[]
}