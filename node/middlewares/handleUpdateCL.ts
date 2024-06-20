import { json } from 'co-body'

export async function handleUpdateCL(ctx: Context, next: () => Promise<any>) {
  try {
    const { clients } = ctx
    const { entity } = ctx.vtex.route.params
    const body = await json(ctx.req)

    if (!body.documentId || !entity || !body.updateData) {
      ctx.status = 400
      ctx.body = 'Missing required parameters (id, entity, data)'
      return
    }

    const updatedData = await clients.updateEntity.updateEntity(entity as string, body.documentId, body.updateData)

    ctx.body = updatedData
    ctx.status = 200
  } catch (error) {
    ctx.status = error.status || error.response?.status || 500
    console.log(error)
  }

  await next()
}