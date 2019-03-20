export interface ThreadState {
  threadSlug: string;
  posts: any[];
  selectedPostId: string;
  selectedPost: any;
  selectedPostComments: any[];
  error: any;
  sortCriteria: any;
  isLoading: boolean;
  isSearching: boolean;
}

export const THREAD_INITIAL_STATE: ThreadState = {
  threadSlug: '',
  posts: [],
  selectedPostId: '',
  selectedPost: null,
  selectedPostComments: [],
  error: null,
  sortCriteria: {},
  isLoading: false,
  isSearching: false,
};
