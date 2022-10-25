import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
   async postHello(name:string): Promise<string> {
   
      const nome1 = Object.values(name); 

      return `Hello ${nome1[0]}!`;
  }
  
}
