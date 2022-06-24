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
        if (ctxPath === filter) {
          await action(ctx, next)
        }
      }
    }
  }
}