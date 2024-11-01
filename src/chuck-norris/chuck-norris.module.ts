// src/chuck-norris/chuck-norris.module.ts

import { Module } from '@nestjs/common';
import { ChuckNorrisController } from './chuck-norris.controller';
import { ChuckNorrisService } from './chuck-norris.service';
import { HttpModule } from '@nestjs/axios'; // Certifique-se de que está importando do '@nestjs/axios'

@Module({
  imports: [HttpModule],
  controllers: [ChuckNorrisController],
  providers: [ChuckNorrisService],
})
export class ChuckNorrisModule { }
