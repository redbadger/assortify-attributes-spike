```mermaid
erDiagram

  Product {
    Int id PK 
    String pc9  
    String colorwayName  
    }
  

  ProductList {
    Int id PK 
    String title  
    }
  

  ProductInProductList {
    Int id PK 
    String exclusive  "nullable"
    String exclusiveComments  "nullable"
    Int minimumOrderQuantity  "nullable"
    }
  

  ProductLifecycleGroup {
    String name PK 
    String displayName  
    }
  
    ProductInProductList o{--|| Product : "product"
    ProductInProductList o{--|o ProductList : "productList"
    ProductInProductList o{--|o ProductLifecycleGroup : "productLifecycleGroup"
```
