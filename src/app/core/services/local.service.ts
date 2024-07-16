import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor(
    private storageSvc: StorageService
  ) { }

  // Set the json data to local storage
  setJsonValue(key: string, value: any): void {
    this.storageSvc.secureStorage.setItem(key, value);
  }
  // Get the json value from local storage
  getJsonValue(key: string): any {
    return this.storageSvc.secureStorage.getItem(key);
  }
  // Clear the local storage
  clearToken(): void {
    return this.storageSvc.secureStorage.clear();
  }
  removeItem(key: string): void {
    this.storageSvc.secureStorage.removeItem(key);
  }
}
