import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { HeroesService, Heroe } from '../../services/heroes.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  private heroes: Heroe[] = [];
  private term: string = '';

  constructor( private activatedRoute: ActivatedRoute,
              private router: Router, private _HeroesService: HeroesService ) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.term = params['term'];
      this.heroes = this._HeroesService.searchHeroes(this.term);
    });
  }

  seeMoreAboutHeroe(idx: number) {
    this.router.navigate( ['/heroe', idx] );
  }

}
