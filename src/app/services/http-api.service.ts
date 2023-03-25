import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CreativeModel} from "../models/creatives-model";
import {BASE_URL} from "../consts";

@Injectable({
  providedIn: 'root'
})
export class HttpAPIService {

  constructor(private http: HttpClient) {
  }

  getIsAuth(token: any) {
    return this.http.get<any>(BASE_URL + '/user/auth', {
      headers: {Authorization: 'Bearer: ' + token}
    })
  }

  login(user: any) {
    return this.http.post<any>(BASE_URL + '/user/login', user)
  }

  register(user: any) {
    return this.http.post<any>(BASE_URL + '/user/register', user)
  }

  getCreative(id: string) {
    return this.http.get<CreativeModel>(BASE_URL + '/creative/by_id', {params: {id}})
  }

  getCreatives() {
    return this.http.get<CreativeModel[]>(BASE_URL + '/creative')
  }

  createCreative(creative: CreativeModel) {
    return this.http.post<CreativeModel>(BASE_URL + '/creative', creative)
  }

  updateCreative(creative: CreativeModel) {
    return this.http.put<CreativeModel>(BASE_URL + '/creative', creative)
  }

  deleteCreative(id: string) {
    return this.http.delete<CreativeModel>(BASE_URL + '/creative', {params: {id}})
  }

  getCampaign(id: string) {
    return this.http.get<any[]>(BASE_URL + '/campaign/by_id', {params: {id}})
  }

  getCampaigns(id: string) {
    return this.http.get<any[]>(BASE_URL + '/campaign', {params: {id}})
  }

  createCampaign(campaign: any) {
    return this.http.post<CreativeModel>(BASE_URL + '/campaign', campaign)
  }
}
