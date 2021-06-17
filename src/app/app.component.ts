import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Cards Game',
      url: '/cardsgame'
    },
    {
      title: 'Pokemon Cards',
      url: '/pokemoncard'
    },    
    {
      title: 'Trainer Stats',
      url: '/trainerstats'
    }
  ];

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private router: Router,
    private splashScreen: SplashScreen
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.show();      
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
  }

  goToPage(i: number): void {
    this.selectedIndex = i;    
    setTimeout(() => {
      this.router.navigateByUrl(this.appPages[i].url);
    },200)
  }
}
