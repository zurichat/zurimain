import { Centrifuge, type EventMap, type SubscriptionEvents } from "centrifuge";
import { WS_CONNECTION_URL } from "./constants";

// Setup Centrifugo Route
const centrifuge = new Centrifuge(WS_CONNECTION_URL, {
  token: sessionStorage.getItem("token")
});

type cbs<Events extends EventMap> = {
  [K in keyof Events]?: Events[K] extends (...args: any[]) => any
    ? (...args: Parameters<Events[K]>) => void
    : never;
};
/**
 * @param {string} channelName - name of the channel to subscribe to
 * @param {cbs<SubscriptionEvents>} cbs function to be called when a message is received
 *
 * @description subscribe to channel from which you want to receive real-time messages.
 *
 * @example
 * ```ts
 * subscribeToChannel("channelName", {
 *  publication: (ctx) => {
 *    console.log(ctx.data);
 *  }
 * }
 * ```
 */
export const subscribeToChannel = (
  channelName: string,
  cbs?: cbs<SubscriptionEvents>
) => {
  const sub = centrifuge.newSubscription(channelName, {});

  if (cbs) {
    let key: keyof cbs<SubscriptionEvents>;
    for (key in cbs) {
      // The types are not being properly propagated in the callback
      // @ts-expect-error
      sub.on(key, cbs[key]);
    }
  }

  sub.subscribe();
};

centrifuge.connect();
