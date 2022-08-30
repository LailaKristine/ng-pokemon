import { Injectable } from '@angular/core';
import { User } from '../components/models/user.model';
import { StorageKeys } from '../enums/storage-key.enums';
import { StorageUtils } from '../utils/storage.util';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user?: User | undefined;

  get user(): User | undefined{
    return this._user;
  } 

  // We write ! because this can never be undefined
  set user(user: User | undefined){
    StorageUtils.storageSave<User>(StorageKeys.User, user!);
    this._user = user; 
  }

  constructor() {
    this._user = StorageUtils.storageRead<User>(StorageKeys.User);
  }
}
