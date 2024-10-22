import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./pages/products/products.routes").then( 
      mod => mod.productsRoutes 
    )
  }
];
