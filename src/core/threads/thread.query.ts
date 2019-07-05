import { Query } from '@datorama/akita';

import { ThreadStore, threadStore } from './thread.store';
import { IThreadState } from './thread.state';

export class ThreadQuery extends Query<IThreadState> {
  constructor(protected store: ThreadStore) {
    super(store);
  }

  public get thread() {
    return this.select(state => state.posts);
  }

  public get isSearching() {
    return this.select(state => state.isSearching);
  }

  public getIsSearching = () => this.select(state => state.isSearching);

  public get isLoading() {
    return this.select(state => state.isLoading);
  }

  public get currentPost() {
    return this.select(state => state.selectedPost);
  }

  public get currentPostId() {
    return this.select(state => state.selectedPostId);
  }

  public get currentPostComments() {
    return this.select(state => state.selectedPostComments);
  }
}

export const threadQuery = new ThreadQuery(threadStore);
