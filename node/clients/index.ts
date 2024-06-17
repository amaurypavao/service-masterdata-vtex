import { IOClients } from '@vtex/api'

import { GetClientCL } from './getCL'
import { UpdateEntity } from './updateCL'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get GetClientCL() {
    return this.getOrSet('GetClientCL', GetClientCL)
  }

  public get UpdateEntity() {
    return this.getOrSet('UpdateEntity', UpdateEntity)
  }
}



