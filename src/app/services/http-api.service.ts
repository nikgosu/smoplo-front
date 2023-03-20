import { Injectable } from '@angular/core';
import {BASE_URL} from "../../mock";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpAPIService {

  constructor(private http: HttpClient) { }
  getCreative(id: string) {
    return this.http.get(BASE_URL ,{
      params: {
        id
      }
    })
  }
  getCreatives() {
    return this.http.get(BASE_URL)
  }
  createCreative(creative: any) {
    return this.http.post(BASE_URL, creative)
  }
  updateCreative(creative: any) {
    return this.http.put(BASE_URL, creative)
  }
  deleteCreative(id: string) {
    return this.http.delete(BASE_URL, {
      params: {
        id
      }
    })
  }
}
