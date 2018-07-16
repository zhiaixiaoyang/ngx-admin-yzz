import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class selfHttp {
  public restServer;
  public http;

  constructor(Http: HttpClient) {
    this.http = Http;
    this.restServer = 'http://127.0.0.0/';
  }

  public get(url, params?: Object, cb?: Function) {
    let httpParams = new HttpParams();
    console.log('开始请求')
    const vm = this;
    if (params) {
      for (const key in params) {
        if (params[key]) {
          httpParams = httpParams.set(key, params[key]);
        }
      }
    }
    vm.http.get(vm.restServer + url, {params: httpParams})
      .subscribe(data => {
        console.log('请求结束', data)
        cb(data);
      });
  }
}
