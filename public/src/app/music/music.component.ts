import { Component, OnInit, SecurityContext, Sanitizer } from '@angular/core';
import { HttpService } from '../http.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})

export class MusicComponent {
  constructor(private _httpService: HttpService, sanitizer: DomSanitizer) {
    this.getLocation();
    //Most required info is recieved with this function below. However, we put it on a timer to get our coordinates first. 
    setTimeout(() => {
      this.grabWeatherJSON();
    }, 500);
    //The below assignment is put on a longer delay to assure we have all info prior to giving the HTML iframe security clearance.
    setTimeout(() => {
      console.log(this.playlist);
      this.iframe = sanitizer.bypassSecurityTrustResourceUrl(this.playlist)
    }, 1500);
  }

  iframe: SafeResourceUrl;
  weather;
  icon;
  iconPNG;
  playlist;
  weatherMood;
  day = new Date();
  timeOfDay;
  temperature;
  callApi;
  longitude;
  latitude;

  clearSky;
  fewClouds;
  scatteredClouds;
  brokenClouds;
  showerRain;
  rain;
  thunderstorm;
  snow;
  mist;

  clearSkyNight;
  fewCloudsNight;
  scatteredCloudsNight;
  brokenCloudsNight;
  showerRainNight;
  rainNight;
  thunderstormNight;
  snowNight;
  mistNight;

  //Gets weather API, assigns variables according to API data, Grabs a random associated Spotify playlist according to that data.
  public grabWeatherJSON() {
    let obs = this._httpService.grabWeather(this.latitude, this.longitude);
    obs.subscribe(data => {
      console.log(data);
      this.weather = data;
      this.icon = this.weather.weather[0].icon;
      this.temperature = Math.floor(this.weather.main.temp);
      this.weatherMood = this.weather.weather[0].description;
      console.log(this.weatherMood);
      this.grabWeatherIcon(this.icon);
      this.timeOfDay = this.day.getHours();
      console.log(this.timeOfDay);
      this.genPlaylist();
    })
  }

  //Checks your geolocation and assigns your coordinates to be used in the grabWeather() service function.
  getLocation(): void{
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position)=>{
          this.longitude = position.coords.longitude;
          console.log(this.longitude);
          this.latitude = position.coords.latitude;
          console.log(this.latitude);
        });
    } else {
      console.log("No support for geolocation")
    }
  }

  grabWeatherIcon(icon) {
    console.log(icon)
    this.iconPNG = `http://openweathermap.org/img/w/${icon}.png`;
  }

  genPlaylist() {

    /////////////////////PLAYLISTS ASSOICATED WITH WEATHER & DAY/NIGHT////////////////////////

    this.clearSky = [
      "https://open.spotify.com/embed/playlist/37i9dQZF1DWSf2RDTDayIx?si=opH0ARoCQz-3oTJTldsKlQ",
      "https://open.spotify.com/embed/playlist/37i9dQZF1DX7cZxYLqLUJl?si=6-0vJuyAQ0yNHSECl8iiug",
      "https://open.spotify.com/embed/playlist/37i9dQZF1DWUE76cNNotSg?si=bkEqlW_RSXKrItQ5x8DgSA"
    ]
    this.fewClouds = [
      "https://open.spotify.com/embed/playlist/37i9dQZF1DX9RwfGbeGQwP?si=eXbQ2cFGT_SeBR59TlzWog",
      "https://open.spotify.com/embed/playlist/37i9dQZF1DX5g856aiKiDS?si=Uqu-upW8QziE2YgC4ISLJA"
    ]
    this.scatteredClouds = [
      "https://open.spotify.com/embed/playlist/37i9dQZF1DWUvZBXGjNCU4?si=nmOSBEX2RwK10R4wde3H6Q",
      "https://open.spotify.com/embed/playlist/37i9dQZF1DX32oVqaQE8BM?si=7UNZcQRiTi6erzajvfUvOw"
    ]
    this.brokenClouds = [
      "https://open.spotify.com/embed/playlist/37i9dQZF1DWYoYGBbGKurt?si=-ZCJ8QT2T9-k3h4A5ZXq7A",
      "https://open.spotify.com/embed/playlist/37i9dQZF1DX0x36cwEyOTG?si=Yvovc0laR0GM1VGIkrJMVg"
    ]
    this.showerRain = [
      "https://open.spotify.com/embed/playlist/3l8cJSGMaYQ56Rr2EaT6NX?si=7u54N4qtSzCQ4apoGDJ4YA",
      "https://open.spotify.com/embed/playlist/37i9dQZF1DWVvXA824aCbn?si=JvmOVxv2RK6FCqtZowC1SA",
      "https://open.spotify.com/embed/playlist/37i9dQZF1DWYxwmBaMqxsl?si=bbkf2HLRReuaRlW2n4GQqA"
    ]
    this.rain = [
      "https://open.spotify.com/embed/playlist/37i9dQZF1DX0SM0LYsmbMT?si=-RiUfQrRSjyXOHE7THMTqg",
      "https://open.spotify.com/embed/playlist/37i9dQZF1DWTcEjayzrZ4x?si=CR5rL2yjTLWzIsVXJWmYPQ"
    ]
    this.thunderstorm = [
      "https://open.spotify.com/embed/playlist/37i9dQZF1DX2vYju3i0lNX?si=s2A-NSBQQbeZzxcHd2Svuw",
      "https://open.spotify.com/embed/playlist/37i9dQZF1DX8Uebhn9wzrS?si=d9xQhiIyQZmcWd06BzfFmw"
    ]
    this.snow = [
      "https://open.spotify.com/embed/playlist/37i9dQZF1DX8OUvJF6ATAB?si=x6FjOv2SQBOD-8X8yHhF6g",
      "https://open.spotify.com/embed/playlist/37i9dQZF1DWViKwLyOBsJF?si=lMbdrCZZSx-HnMUj_X8jug"
    ]
    this.mist = [
      "https://open.spotify.com/embed/playlist/37i9dQZF1DX3qCx5yEZkcJ?si=SBvpBEqgTRiY-0OZ-jPLuQ",
      "https://open.spotify.com/embed/playlist/37i9dQZF1DX2n5hpuulC75?si=mmBbNEJzSmSEIECdoKSC2Q"
    ]
    this.clearSkyNight = [
      "https://open.spotify.com/embed/playlist/37i9dQZF1DXcEKFjZJYZcc?si=2FP2-H5aTVK2M-BKiT6AZw",
      "https://open.spotify.com/embed/playlist/37i9dQZF1DX9uKNf5jGX6m?si=eFeX3n28QmyMhxPE95mpNQ",
      "https://open.spotify.com/embed/playlist/37i9dQZF1DWVtzubo4lvxd?si=elOfO-znRb2lOlW9MIr5tw"
    ]
    this.fewCloudsNight = [
      "https://open.spotify.com/embed/playlist/37i9dQZF1DWZrc3lwvImLj?si=lkybh7_vTYyE4x66QCVweA",
      "https://open.spotify.com/embed/playlist/37i9dQZF1DXcG4kXwIFULb?si=JD4gciyYTVqM8j3CiSVS8g"
    ]
    this.scatteredCloudsNight = [
      "https://open.spotify.com/embed/playlist/37i9dQZF1DWZrc3lwvImLj?si=lkybh7_vTYyE4x66QCVweA",
      "https://open.spotify.com/embed/playlist/37i9dQZF1DWVFJtzvDHN4L?si=cquVN31-R7WF-pZw1VbmXQ"
    ]
    this.brokenCloudsNight = [
      "https://open.spotify.com/embed/playlist/37i9dQZF1DWZrc3lwvImLj?si=lkybh7_vTYyE4x66QCVweA",
      "https://open.spotify.com/embed/playlist/37i9dQZF1DXcY4tn4nPCV1?si=i29SbFU1QTOX-bSXo511FA"
    ]
    this.showerRainNight = [
      "https://open.spotify.com/embed/playlist/37i9dQZF1DX2TRYkJECvfC?si=ZZ23-T5xQWG2Xu5Y_pFLPw",
      "https://open.spotify.com/embed/playlist/37i9dQZF1DXdCsscAsbRNz?si=nQOrYyWCSjqC9z_slnE70w"
    ]
    this.rainNight = [
      "https://open.spotify.com/embed/playlist/37i9dQZF1DXdCsscAsbRNz?si=nQOrYyWCSjqC9z_slnE70w",
      "https://open.spotify.com/embed/playlist/37i9dQZF1DX4wta20PHgwo?si=Jj-b6UyXQTuELZrQDbdxBA"
    ]
    this.thunderstormNight = [
      "https://open.spotify.com/embed/playlist/37i9dQZF1DWWtqHeytOZ8f?si=_TeeSOLbTaa3DFzG4-pfrg",
      "https://open.spotify.com/embed/playlist/37i9dQZF1DWZeKCadgRdKQ?si=4bClOh0zRoeFLF81_CLc5A"
    ]
    this.snowNight = [
      "https://open.spotify.com/embed/playlist/37i9dQZF1DXebxttQCq0zA?si=liAaBhIaQqqWcM90rKZlTQ",
      "https://open.spotify.com/embed/playlist/37i9dQZF1DXcBbGCLlic3p?si=SSh17X4SQnKPRHiI36kvAw",
      "https://open.spotify.com/embed/playlist/37i9dQZF1DXdRynaRsnoZs?si=F2lKro-4QM-J89xcpZENIQ"
    ]
    this.mistNight = [
      "https://open.spotify.com/embed/playlist/37i9dQZF1DWZqd5JICZI0u?si=sNAw5eV6QACyGYILb5VtNg",
      "https://open.spotify.com/embed/playlist/37i9dQZF1DWZ7mSWCFIT7v?si=XyoVePB8Tx6CajUkTR_8qw"
    ]

    //This establishes which set of playlists to choose from depending on the weather and time of day.
    //NOTE: extended weather descriptions have been added via the open weather map API. App will run an error if it encounters one not listed.
    if(this.weatherMood == "clear sky" && this.timeOfDay <= 17) {
      this.playlist = this.clearSky[Math.floor(Math.random() * this.clearSky.length)]; 
      console.log(this.playlist);
    }
    else if(this.weatherMood == "few clouds" && this.timeOfDay <= 17){
      this.playlist = this.fewClouds[Math.floor(Math.random() * this.fewClouds.length)];
      console.log(this.playlist);
    }
    else if(this.weatherMood == "scattered clouds" && this.timeOfDay <= 17){
      this.playlist = this.scatteredClouds[Math.floor(Math.random() * this.scatteredClouds.length)];
      console.log(this.playlist);
    }
    else if(this.weatherMood == "broken clouds" && this.timeOfDay <= 17){
      this.playlist = this.brokenClouds[Math.floor(Math.random() * this.brokenClouds.length)];
      console.log(this.playlist);
    }
    else if(this.weatherMood == "overcast clouds" && this.timeOfDay <= 17){
      this.playlist = this.brokenClouds[Math.floor(Math.random() * this.brokenClouds.length)];
      console.log(this.playlist);
    }
    else if(this.weatherMood == "shower rain" && this.timeOfDay <= 17){
      this.playlist = this.showerRain[Math.floor(Math.random() * this.showerRain.length)];
      console.log(this.playlist);
    }
    else if(this.weatherMood == "rain" && this.timeOfDay <= 17 && this.weatherMood == "light rain" && this.timeOfDay <= 17){
      this.playlist = this.rain[Math.floor(Math.random() * this.rain.length)];
      console.log(this.playlist);
    }
    else if(this.weatherMood == "thunderstorm" && this.timeOfDay <= 17){
      this.playlist = this.thunderstorm[Math.floor(Math.random() * this.thunderstorm.length)];
      console.log(this.playlist);
    }
    else if(this.weatherMood == "snow" && this.timeOfDay <= 17){
      this.playlist = this.snow[Math.floor(Math.random() * this.snow.length)];
      console.log(this.playlist);
    }
    else if(this.weatherMood == "mist" && this.timeOfDay <= 17){
      this.playlist = this.mist[Math.floor(Math.random() * this.mist.length)];
      console.log(this.playlist);
    }
    
    /////////////////NIGHT TIME//////////////////////

    else if(this.weatherMood == "clear sky" && this.timeOfDay > 17) {
      this.playlist = this.clearSkyNight[Math.floor(Math.random() * this.clearSkyNight.length)];
      console.log(this.playlist);
    }
    else if(this.weatherMood == "few clouds" && this.timeOfDay > 17){
      this.playlist = this.fewCloudsNight[Math.floor(Math.random() * this.fewCloudsNight.length)];
      console.log(this.playlist);
    }
    else if(this.weatherMood == "scattered clouds" && this.timeOfDay > 17){
      this.playlist = this.scatteredCloudsNight[Math.floor(Math.random() * this.scatteredCloudsNight.length)];
      console.log(this.playlist);
    }
    else if(this.weatherMood == "broken clouds" && this.timeOfDay > 17){
      this.playlist = this.brokenCloudsNight[Math.floor(Math.random() * this.brokenCloudsNight.length)];
      console.log(this.playlist);
    }
    else if(this.weatherMood == "overcast clouds" && this.timeOfDay > 17){
      this.playlist = this.brokenCloudsNight[Math.floor(Math.random() * this.brokenCloudsNight.length)];
      console.log(this.playlist);
    }
    else if(this.weatherMood == "shower rain" && this.timeOfDay > 17){
      this.playlist = this.showerRainNight[Math.floor(Math.random() * this.showerRainNight.length)];
      console.log(this.playlist);
    }
    else if(this.weatherMood == "rain" && this.timeOfDay > 17){
      this.playlist = this.rainNight[Math.floor(Math.random() * this.rainNight.length)];
      console.log(this.playlist);
    }
    else if(this.weatherMood == "thunderstorm" && this.timeOfDay > 17){
      this.playlist = this.thunderstormNight[Math.floor(Math.random() * this.thunderstormNight.length)];
      console.log(this.playlist);
    }
    else if(this.weatherMood == "snow" && this.timeOfDay > 17){
      this.playlist = this.snowNight[Math.floor(Math.random() * this.snowNight.length)];
      console.log(this.playlist);
    }
    else if(this.weatherMood == "mist" && this.timeOfDay > 17){
      this.playlist = this.mistNight[Math.floor(Math.random() * this.mistNight.length)];
      console.log(this.playlist);
    }
    else{
      console.log("ERROR IN DETERMINING WEATHERMOOD OR TIMEOFDAY");
    }
  }
}

