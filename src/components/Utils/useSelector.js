import { useReducer, useEffect, useLayoutEffect, useRef } from 'react';
import { subscribe, subscribeFunction } from './Subscriber';

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const refEquality = (a, b) => a === b;

export const useSelector = (selector, defaultValue) => {
  const [, forceRender] = useReducer(s => s + 1, 0);
  const latestSelector = useRef();
  const latestSelectedState = useRef(defaultValue);
  const selectedState = latestSelectedState.current;

  useIsomorphicLayoutEffect(() => {
    latestSelector.current = selector;
    latestSelectedState.current = selectedState;
  });

  useIsomorphicLayoutEffect(() => {
    const updateState = newState => {
      if (refEquality(newState, latestSelectedState.current)) {
        return;
      }
      latestSelectedState.current = newState;
      forceRender({});
    };

    return typeof selector === 'function'
      ? subscribeFunction(selector, updateState)
      : subscribe(selector, updateState);
  }, [selector]);

  return selectedState;
};
