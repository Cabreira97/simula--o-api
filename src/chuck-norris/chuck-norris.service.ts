import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ChuckNorrisService {
  constructor(private httpService: HttpService) { }

  getRandomJoke(): Observable<string> {
    return this.httpService.get('https://api.chucknorris.io/jokes/random')
      .pipe(map(response => response.data.value));
  }

  getCategories(): Observable<string[]> {
    return this.httpService.get('https://api.chucknorris.io/jokes/categories')
      .pipe(map(response => response.data));
  }

  searchJokes(query: string): Observable<string[]> {
    return this.httpService.get(`https://api.chucknorris.io/jokes/search?query=${query}`)
      .pipe(map(response => response.data.result.map(joke => joke.value)));
  }

  getRandomJokeByCategory(category: string): Observable<string> {
    return this.httpService.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
      .pipe(map(response => response.data.value));
  }
}
