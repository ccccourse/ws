// database.ts file

import { Sabr, SabrTable } from "https://deno.land/x/sabr@1.1.1/mod.ts";

// Create the database class
const sabr = new Sabr();

// Creates a db object that can be imported in other files.
export const db = {
	// This will allow us to access table methods easily as we will see below.
	sabr,
	// Sets up a table. If this table did not exist, it will create one.
	users: new SabrTable(sabr, "users"),
	// These examples also show how to provide clean TypeScript interfaces to have a much better TS experience.
	client: new SabrTable<ClientSchema>(sabr, "client"),
	// When you run methods on this like `db.guilds.get("someid")` It will show give you a GuildSchema type object.
	guilds: new SabrTable<GuildSchema>(sabr, "guilds"),
};

// This is important as it prepares all the tables.
await sabr.init();