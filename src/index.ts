export * from './lib/TinyClient';

/**
 * The [@swiizyy/tiny-discord-framework](https://github.com/swiizyy/tiny-discord-framework) version.
 * An example use of this is showing it of in a bot information command.
 *
 * Note to developers: This needs to explicitly be `string` so it is not typed as the string that gets replaced by esbuild
 */
// eslint-disable-next-line @typescript-eslint/no-inferrable-types
export const version: string = '[VI]{{inject}}[/VI]';