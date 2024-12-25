import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Item } from './items/items'; // Ensure correct import path

@Injectable({
providedIn: 'root'
})
export class DataService {

apiUrl = 'http://localhost:3000/items'; // Replace with your actual API endpoint

constructor(private http: HttpClient) { }

// GET all items
getItems(): Observable<Item[]> {
return this.http.get<Item[]>(this.apiUrl);
}

// GET a single item by ID
getItem(id: string): Observable<Item> {
return this.http.get<Item>(`${this.apiUrl}/${id}`);
}

// CREATE a new item
createItem(item: Item): Observable<Item> {
if (!item.name) {
return throwError("Name field is required.");
}

const { _id, ...newItem } = item;

return this.http.post<Item>(this.apiUrl, newItem).pipe(
catchError((error: any) => {
return throwError("Failed to create item.");
})
);
}

// UPDATE an existing item
updateItem(id: string, item: Item): Observable<any> {
console.log('Updating item with ID:', id, 'and data:', item);

return this.http.put<Item>(`${this.apiUrl}/${id}`, item).pipe(
catchError((error: any) => {
console.error('Error updating item:', error);
return throwError("Failed to update item.");
})
);
}

// DELETE an item
deleteItem(id: string): Observable<any> {
return this.http.delete(`${this.apiUrl}/${id}`);
}
}