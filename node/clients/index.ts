import { IOClients } from '@vtex/api'

import { UpdateEntity } from './updateCL'

// Extend the default IOClients implementation with our own custom clients.
  public get UpdateEntity() {
    return this.getOrSet('UpdateEntity', UpdateEntity)
  }
}



