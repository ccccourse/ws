export class Router {
  constructor() {
    this.triggers = []
  }
  get(filter, action) {
    this.triggers.push({filter, action})
    return this
  }
  routes() {
    let self = this
    return async function(ctx, next) {
      var ctxPath = ctx.request.url.pathname
      for (let {filter, action} of self.triggers) {
        if (typeof filter === 'string') {
          if (ctxPath === filter) {
            await action(ctx, next)
          }
        } else if (filter instanceof RegExp) {
          ctx.match = ctxPath.match(filter)
          if (ctx.match) {
            await action(ctx, next)
          }
        }
      }
    }
  }
}