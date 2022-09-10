import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {

    const data = {
      "Projeto": "Ecowmilk",
      "Autores": "Gabriel",
      "Professor": "XXXX",
      "Descricao": "Ecowmilk"
    }

    const projectHello = JSON.stringify(data)

    return projectHello
  }
}
 