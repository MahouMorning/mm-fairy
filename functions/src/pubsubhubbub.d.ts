declare module pubsubhubbub {

/*~ Write your module's methods and properties in this class */
export class PubSubHubBub {
    constructor(someParam?: string);

    subscribe(topic: string, hub: string, callbackURL: string, callback: Function) : undefined;
}

export function createServer(options?: {
    callbackUrl?: string;
    secret?: string;
    maxContentSize?: number;
    username?: string;
    password?: string;
}): any;
}
