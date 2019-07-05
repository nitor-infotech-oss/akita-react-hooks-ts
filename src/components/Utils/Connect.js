// import React, { useReducer, useLayoutEffect, useEffect } from 'react';

// const useIsomorphicLayoutEffect =
//   typeof window !== 'undefined' ? useLayoutEffect : useEffect;

// const refEquality = (a, b) => a === b;

// /**
//  * export const ConnectedThreadList = Connect({
//  * threadsNew: threadQuery.thread,
//  * isSearchingNew: threadQuery.isSearching,
//  * })(ThreadList);
//  */

// // const [, forceRender] = useReducer(s => s + 1, 0);

// export const Connect = mapping => {
//   return Component => props => {
//     // useIsomorphicLayoutEffect(() => {
//     //   function checkForUpdates() {
//     //     try {
//     //       const newSelectedState = latestSelector.current(store.getState());
//     //       if (refEquality(newSelectedState, latestSelectedState.current)) {
//     //         return;
//     //       }
//     //       latestSelectedState.current = newSelectedState;
//     //     } catch (err) {
//     //       // we ignore all errors here, since when the component
//     //       // is re-rendered, the selectors are called again, and
//     //       // will throw again, if neither props nor store state
//     //       // changed
//     //       latestSubscriptionCallbackError.current = err;
//     //     }
//     //     forceRender({});
//     //   }
//     //   subscribe();
//     //   checkForUpdates();
//     //   return () => subscription.tryUnsubscribe();
//     // }, []);

//     return <Component {...props} {...mapping} />;
//   };
// };
