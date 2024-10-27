import { Client, type ClientOptions, type Snowflake } from 'discord.js';

export interface TinyClientOptions {}

export class TinyClient<Ready extends boolean = boolean> extends Client<Ready> {
	public constructor(options: ClientOptions) {
		super(options);
	}
}

declare module 'discord.js' {
	interface Client {
		id: Snowflake | null;
	}

	interface ClientOptions extends TinyClientOptions {}
}
