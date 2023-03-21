import {Injectable} from '@angular/core';
import {BASE_URL} from "../../mock";
import {HttpClient} from "@angular/common/http";
import {CreativeModel} from "../models/creatives-model";

@Injectable({
  providedIn: 'root'
})
export class HttpAPIService {

  constructor(private http: HttpClient) {
  }

  getCreative(id: string) {
    return this.http.get<CreativeModel>(BASE_URL + '_by_id', {
      params: {
        id
      }
    })
  }

  getCreatives() {
    return this.http.get<CreativeModel[]>(BASE_URL)
  }

  createCreative(creative: CreativeModel) {
    return this.http.post<CreativeModel>(BASE_URL, creative)
  }

  updateCreative(creative: CreativeModel) {
    return this.http.put<CreativeModel>(BASE_URL, creative)
  }

  deleteCreative(id: string) {
    return this.http.delete<CreativeModel>(BASE_URL, {
      params: {
        id
      }
    })
  }
}
