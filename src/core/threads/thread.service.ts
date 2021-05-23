import { ThreadStore, threadStore } from './thread.store';

const BASE_URL = 'https://www.reddit.com/r/';

export class ThreadService {
  // eslint-disable-next-line no-useless-constructor
  constructor(private store: ThreadStore) {}

  public closeCurrentPost = () => {
    this.store.update(() => ({
      selectedPostId: '',
      selectedPost: null,
    }));
  };

  public getThread = (threadSlug: string) => {
    this.store.update(() => ({
      isSearching: true,
      threadSlug,
      posts: [],
      selectedPostId: '',
      selectedPost: null,
    }));

    fetch(`${BASE_URL}${threadSlug}.json`)
      .then(response => response.json())
      .then(threads =>
        this.store.update(() => ({
          isSearching: false,
          posts: threads.data.children,
        })),
      )
      .catch(error => this.store.update(() => ({ error, isSearching: false })));
  };

  public getPost = (threadSlug: string, postId: string) => {
    this.store.update(() => ({
      isLoading: true,
      selectedPostId: postId,
      selectedPost: null,
    }));

    fetch(`${BASE_URL}${threadSlug}/${postId}.json`)
      .then(response => response.json())
      .then(([post, comments]) =>
        this.store.update(() => ({
          isLoading: false,
          selectedPost: {
            data: post.data.children[0].data,
            comments: comments.data.children,
          },
          selectedPostComments: comments.data.children,
        })),
      )
      .catch(error => this.store.update(() => ({ error, isLoading: false })));
  };
}

export const threadService = new ThreadService(threadStore);
