import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor() {}
  public subject = new Subject<any>();

  emit<T>(data: T) {
    this.subject.next(data);
  }

  on<T>(): Observable<T> {
    return this.subject.asObservable();
  }

}
