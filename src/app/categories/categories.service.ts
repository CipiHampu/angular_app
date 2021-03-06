import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpClient: HttpClient) {   }

  public createCategory(category: any){
    return this.httpClient.post("http://localhost:8080/categories/create", category);
  }

  public updateCategory(categoryId: number, category: any){
    return this.httpClient.put("http://localhost:8080/categories/"+categoryId, category);
  }

  public deleteCategory(categoryId: number){
    return this.httpClient.delete("http://localhost:8080/categories/"+categoryId);
  }

  public deleteCategoryForever(categoryId: number){
    return this.httpClient.delete("http://localhost:8080/categories/"+categoryId);
  }

  public getAllCategories(){
    return this.httpClient.get("http://localhost:8080/categories");
  }
}