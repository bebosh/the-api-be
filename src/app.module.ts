import { Module } from '@nestjs/common';
import { CostumersModule } from './costumers/costumers.module';

@Module({
  imports: [CostumersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
