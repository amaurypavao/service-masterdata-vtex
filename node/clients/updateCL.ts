import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

class UpdateEntity extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super(`http://${context.account}.vtexcommercestable.com.br`, context, {
      ...options,
      headers: {
        ...options?.headers,
        // VtexIdclientAutCookie: context.authToken,
        'X-VTEX-API-AppToken': process.env.AppToken || '',
        'X-VTEX-API-AppKey': process.env.AppKey || ''
      },
    })
  }

  public async updateEntity(entity: string, id: string, updateData: any): Promise<any> {
    return this.http.patch(
      `/api/dataentities/${entity}/documents/${id}`, updateData
    )
  }
}

export { UpdateEntity }