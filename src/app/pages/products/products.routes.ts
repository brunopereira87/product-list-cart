import { Routes } from "@angular/router";
import { ProductsComponent } from "./products.component";

export const productsRoutes: Routes = [
  {
    path: "",
    redirectTo: "/products",
    pathMatch: "full"
  }, 
  {
    path: "products",
    component: ProductsComponent
  }
]