import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messagesService: MessagesService
  ) { }

  getHeroes(): Observable<Hero[]> {
    this.messagesService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messagesService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
