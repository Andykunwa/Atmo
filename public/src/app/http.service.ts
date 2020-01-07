import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {}

  //CRUD functions established in case I add in model/database functionality.
  getAll() {
    return this._http.get('/api/model');
  }

  getOne(id) {
    return this._http.get(`/api/model/${id}`);
  }

  update(updateProduct) {
    return this._http.put(`api/model/update/${updateProduct._id}`, updateProduct);
  }

  create(newProduct) {
    return this._http.post('/api/model/create', newProduct);
  }

  destroy(id) {
    return this._http.delete(`api/model/destroy/${id}`);
  }

  //In this case only, I've left the weather key viewable
  grabWeather(lat, lon) {
    console.log("gettting weather")
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=dfbf0fc643a7d347b07b35fbc098c285`);
  }

  grabPlaylists(playlistJSONurl) {
    return this._http.get(playlistJSONurl);
  }
}
