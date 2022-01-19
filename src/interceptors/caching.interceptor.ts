import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, of, tap} from 'rxjs';

@Injectable()
export class CachingInterceptor implements HttpInterceptor {

  responseCache = new Map();
  // สร้างตัวแปรไว้เป็น Map เก็บค่า response โดย Map กับ URL ของ API ที่ใช้
  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   //จะเป็นขั้นตอนการยิง API 
    const cache = this.responseCache.get(request.urlWithParams);
    //เอา url with parameter มาดึงจาก cache ดูก่อนว่ามี cache อยู่รึป่าว ถ้าเกิดเคยมีการยิง api แล้วจึงจะเข้าเงื่อนไข check cache แต่ถ้าไม่มีจะไป return ค่าด้านล่าง
    if(cache)
    {
      return of(cache);
      //ถ้ามี cache return คืนกลับเลย
    }
    return next.handle(request).pipe(tap(response =>{

      this.responseCache.set(request.urlWithParams,response)
      //เมื่อไหร่ก็ตามถ่้าได้  Response ก็ตาม ให้setใส่ใน map
    }));
  }

  canCache(request: HttpRequest<unknown>): boolean
  {
    return request.urlWithParams.includes('');
    //ใน .includes('ชื่อ api')
  }
}
