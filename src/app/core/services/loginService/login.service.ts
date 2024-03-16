import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private userRole = new BehaviorSubject("");
  getRole = this.userRole.asObservable();
  constructor() { }

  setRole(newRole: string): void{
    this.userRole.next(newRole);
  }
}
