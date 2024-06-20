import { UpdateEntity } from './updateCL'
import { IOClients } from '@vtex/api' // Certifique-se de importar o IOClients

class Clients extends IOClients {
  public get updateEntity() {
    return this.getOrSet('updateEntity', UpdateEntity)
  }
}

export { Clients }