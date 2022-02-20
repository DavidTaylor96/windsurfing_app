import { observable } from "mobx";

let mock = false;
let lockStores = false;


export function Store<T>(jsobject: T): T & { mock: (obj: T) => T } {
  let obj: T & { mock?: (obj: T) => T } = jsobject;
  obj.mock = (mockjsobject: T) => {
    const mockHandler = {
      set: (obj: any, prop: string, value: any) => {
        console.warn("you can not edit the value in mock mode");
        return true;
      },
    };
    const mockProxy = new Proxy(mockjsobject, mockHandler);
    if (mock) {
      return lockStores ? mockProxy : (observable(mockjsobject as any) as unknown as T);
    } else {
      return observable(obj) as T;
    }
  };
  const mockHandler = {
    set: (obj: any, prop: string, value: any) => {
      console.warn("you can not edit the value in mock mode");
      return true;
    },
  };
  const mockProxy = new Proxy(jsobject, mockHandler);
  return mock ? mockProxy : observable(obj);
}

export function EnableMock(lock = true) {
  lockStores = lock;
  mock = true;
}

export function IsMockEnabled() {
  return mock;
}
