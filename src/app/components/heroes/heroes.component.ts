import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  // Import the HeroesService on the constructor.
  constructor( private _heroesService: HeroesService,
              private router: Router) {
      //console.log('HeroesComponent constructor onFire!');
  }

  ngOnInit() {
    //console.log('HeroesComponent onInit running...');
    this.heroes = this._heroesService.getHeroes();
    //console.log(this.heroes);
  }

  seeMoreAboutHeroe(idx: number) {
    this.router.navigate( ['/heroe', idx] );
  }

}
