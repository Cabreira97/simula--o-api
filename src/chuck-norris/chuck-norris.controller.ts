import { Controller, Get, Query } from '@nestjs/common';
import { ChuckNorrisService } from './chuck-norris.service';
import { Observable } from 'rxjs';

@Controller('jokes')
export class ChuckNorrisController {
  constructor(private readonly chuckNorrisService: ChuckNorrisService) { }

  @Get('random')
  getRandomJoke(): Observable<string> {
    return this.chuckNorrisService.getRandomJoke();
  }

  @Get('categories')
  getCategories(): Observable<string[]> {
    // Aqui você pode retornar as categorias de uma maneira estática ou via serviço
    return this.chuckNorrisService.getCategories();
  }

  @Get('search')
  searchJokes(@Query('query') query: string): Observable<string[]> {
    return this.chuckNorrisService.searchJokes(query);
  }

  @Get('random/category')
  getRandomJokeByCategory(@Query('category') category: string): Observable<string> {
    return this.chuckNorrisService.getRandomJokeByCategory(category);
  }
}
