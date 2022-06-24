import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { Session } from "https://deno.land/x/oak_sessions/mod.ts";

const app = new Application();

// Instantiate session
const session = new Session();
const router = new Router();

// Include the session.initMiddleware on the routes you want to use sessions for
router.get("/session", session.initMiddleware(), async (ctx) => {

    // Examples of getting and setting variables on a session
    if (!await ctx.state.session.has("pageCount")) {
        await ctx.state.session.set("pageCount", 0);

    } else {
        await ctx.state.session.set("pageCount", await ctx.state.session.get("pageCount") + 1);
    }

    // If you only want a variable to survive for a single request, you can "flash" it instead
    await ctx.state.session.flash("message", "I am good for form validations errors, success messages, etc.")
    
    ctx.response.body = `Visited page ${await ctx.state.session.get("pageCount")} times`;
})
// When deleting a session, it's not recommended to do it with the session middleware in the route you perform the deletion.
.get('/delete', async (ctx) => {
    console.log('delete...')
    // Pass the router context as the parameter to deleteSession()
    await session.deleteSession(ctx)
    // Optionally, you can also just pass the string of the session ID in case you aren't within a routing context.
    // await session.deleteSession(ctx.cookies.get('session'))

    ctx.response.redirect('/session')
});

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });