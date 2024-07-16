import { Injectable } from '@angular/core';
import CryptoJS from 'crypto-js';
import SecureStorage from 'secure-web-storage';

const SECRET_KEY = 'daxu_air_mineral';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public secureStorage = new SecureStorage(localStorage, {
    hash: (key: any): any => {
      key = CryptoJS.SHA256(key, SECRET_KEY);
      return key.toString();
    },
    // Encrypt the localstorage data
    encrypt: (data: any) => {
      data = CryptoJS.AES.encrypt(data, SECRET_KEY);
      data = data.toString();
      return data;
    },
    // Decrypt the encrypted data
    decrypt: (data: any) => {
      data = CryptoJS.AES.decrypt(data, SECRET_KEY);
      data = data.toString(CryptoJS.enc.Utf8);
      return data;
    }
  });

  constructor() { }

}
