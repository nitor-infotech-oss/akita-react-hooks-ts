import { Store, StoreConfig } from '@datorama/akita';

import { ThreadState, THREAD_INITIAL_STATE } from './thread.state';

@StoreConfig({ name: 'RedditApp' })
export class ThreadStore extends Store<ThreadState> {
  constructor() {
    super(THREAD_INITIAL_STATE);
  }
}

export const threadStore = new ThreadStore();
