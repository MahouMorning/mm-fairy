declare module 'pubsubhubbub' {
  export class PubSubHubbub;
  export function subscribe(topic: string, hub: string, callbackURL: string, callback: Function) : undefined;
}
