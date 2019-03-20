import { Query } from '@datorama/akita';

import { ThreadStore, threadStore } from './thread.store';
import { ThreadState } from './thread.state';

export class ThreadQuery extends Query<ThreadState> {
  constructor(protected store: ThreadStore) {
    super(store);
  }

  public getThread = () => this.select(state => state.posts);
  public getIsSearching = () => this.select(state => state.isSearching);
  public getCurrentPost = () => this.select(state => state.selectedPost);
  public getCurrentPostComments = () =>
    this.select(state => state.selectedPostComments);
}

export const threadQuery = new ThreadQuery(threadStore);
