import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CreativeModel} from "../models/creatives-model";
import {BASE_URL, GET_AUTH_URL, LOGIN_URL, REGISTER_URL} from "../consts";

@Injectable({
  providedIn: 'root'
})
export class HttpAPIService {

  constructor(private http: HttpClient) {
  }

  getIsAuth(token: any) {
    return this.http.get<any>(GET_AUTH_URL, {
      headers: {Authorization: `Bearer:${token}`}
    })
  }

  login(user: any) {
    return this.http.post<any>(LOGIN_URL, user)
  }

  register(user: any) {
    return this.http.post<any>(REGISTER_URL, user)
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
