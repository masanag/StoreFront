import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";

export abstract class CartRepository {
  abstract completeOrder(): Observable<any>;
}

@Injectable()
export class CartMockSuccessRepository extends CartRepository {
  constructor(private http: HttpClient) {
    super();
  }

  completeOrder(): Observable<any>{
    return of({status: 200, message: 'Order submitted'})
  }
}

@Injectable()
export class CartMockErrorRepository extends CartRepository {
  constructor(private http: HttpClient) {
    super();
  }

  completeOrder(): Observable<any>{
    return throwError(()=> new HttpErrorResponse({
      status: 500,
      statusText: 'Internal Server Error'
    }))
  }
}