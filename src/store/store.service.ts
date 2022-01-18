import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, map, Observable, shareReplay, Subject } from 'rxjs';
export interface AppState {
  limit: number;
  offset: number;
}
@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private state = new BehaviorSubject<AppState>(
    {
      limit: 10,
      offset: 0
    }
  );
  // ในเครื่องหมาย <> ต้องกำหนด Generic ของ state management
  // BehaviorSubject จะทำหน้าที่แทน Reducer
  private increaseLimitAction = new Subject<number>();
  private decreaseLimitAction = new Subject<number>();
  private increaseOffsetAction = new Subject<number>();
  private decreaseOffsetAction = new Subject<number>();


  // "$" ตัวนี้จะทำหน้าที่กำหนดให้เป็นตัว observable
  //ถ้าต้องการดึงค่า state.limit , state.offset จาก state หลัก
  limit$ = this.createSeletor(state =>  state.limit);
  offset$ = this.createSeletor(state => state.offset);
  
  //Subject จะทำหน้าที่แทน Action 
  //ใส่ private แล้่วต้องสร้าง method 
  constructor() 
  {
    //สร้าง REducer
    this.createReduce(this.increaseLimitAction,(state,limit) =>
    {
      state.limit +=limit;
      return state;
    })
    this.createReduce(this.decreaseLimitAction,(state,limit) =>
    {
      state.limit -=limit;
      return state;
    })
    this.createReduce(this.increaseOffsetAction,(state,offset) =>
    {
      state.offset +=offset;
      return state;
    })
    this.createReduce(this.decreaseOffsetAction,(state,offset) =>
    {
      state.offset -=offset;
      return state;
    })
    //สร้าง REducer
  }
  increaseLimit(limit: number) {
    this.increaseLimitAction.next(limit)
  }
  decreaseLimit(limit: number) {
    this.decreaseLimitAction.next(limit)
  }
  increaseOffset(offset: number) {
    this.increaseOffsetAction.next(offset)
  }
  decreaseOffset(offset: number) {
    this.decreaseOffsetAction.next(offset)
  }

//method ที่ช่วยสร้าง selector
private createSeletor<T>
                        (
                          selector : (
                                      state : AppState
                                      )=> T

                        ): 
  //Method นี้จะรับ argument ในรูปแบบของ function 
  //state argumentของ selector เป็น argument ทีื function  ที่เป็น type interface ที่เรากำหนด
  //แล้วจะ reture ค่่าของ state ที่เราต้องการเพื่อเอาไปให้ companant ที่เราต่องการ
  //reture ในรูปแบบของ observable
                        Observable<T>
 
{
  return this.state.pipe
  //state เป็น behaviorsubject 
    (
      map(selector),
      //เอากำหนดเป็นค่าที่ต้องการโดนกำหนดด้วยค่า function "selector"
      distinctUntilChanged(),
      //ค่า state ไม่เปลี่ยนไม่ต้องทำงาน ซ้ำ
      shareReplay(1)
      //ใส่ opperator shareReplay() เพืื่อให้ companant ไหนก็คตามที่มา subscribe
      //จะได้ค่าล่าสุดออกไปจาก observable
    )
}

  /// method ที่ใช้ช่วยสร้าง Reducer
  private createReduce<T>(
    action$: Observable<T>, // argument ตัวที่ 1 เป็นตัวส่งค่า
    accumlator: (state: AppState, action: T) => AppState 
    //argument ตัวที่ 2 เป็น function ที่รับมา 2 argument 
    //argument ตัวแรก รับ เป็น state ที่มี type เป็น appstate(interfaceที่สร้าง) 
    //argument ตัวที่ 2 เป็นค่าของ action ที่ถูกเรียกใช้งาน
    // function accumlator จะสร้าง state ใหม่ขึ้นมา 
  ) {
    action$.subscribe
    //เมื่อไหร่ก็ตามที่ action$ มี action จะให้ทำงานในส่วนของ functuion ของ subscribe
      (
        (action) => {
                      const state = { ...this.state.value };
                      //ดึง state เก่า ออกมา แล้ว clone object state เก่า จะดึงค่าของ BehaviorSubject              
                      const newState = accumlator(state, action);
                      //นำ state เก่ามาแทนใน function accumlator 
                      this.state.next(newState);
                      //แล้วให้ behavior ปล่อย state ใหม่
                    }
        // Subscribe's function 
      );
  }
  //ใน Reducer นี้จะเก็บ argument 2 ตัวคือ 
}
