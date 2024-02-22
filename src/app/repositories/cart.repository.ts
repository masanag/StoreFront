import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";

export interface OrderResponse {
  status: number;
  message: string;
}

export abstract class CartRepository {
  abstract completeOrder(): Observable<OrderResponse | never>;
}

@Injectable()
export class CartMockSuccessRepository extends CartRepository {
  constructor(private http: HttpClient) {
    super();
  }

  completeOrder(): Observable<OrderResponse>{
    return of({status: 200, message: 'Order submitted'})
  }
}

@Injectable()
export class CartMockErrorRepository extends CartRepository {
  constructor(private http: HttpClient) {
    super();
  }

  completeOrder(): Observable<never>{
    return throwError(()=> new HttpErrorResponse({
      status: 500,
      statusText: 'Internal Server Error'
    }))
  }
}