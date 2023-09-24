import { Injectable } from '@nestjs/common';

@Injectable()
export class CostumersService {
  findCostumer() {
    return {
      id: 1,
      email: 'pippo@plutou.com',
      createdAt: new Date(),
    };
  }
}
