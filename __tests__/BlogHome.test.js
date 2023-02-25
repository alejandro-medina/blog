import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';

import BlogHome from 'app/page';

describe('Blog Home', () => {

  beforeEach(() => {
    fetch.resetMocks();
    fetch.mockResponseOnce(JSON.stringify(
      [
        {
          "userId": 1,
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
          "userId": 1,
          "id": 2,
          "title": "qui est esse",
          "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        }
      ]
    ));
  });

  it('should render a list of blog posts', async () => {
    await act(() => {
      render(<BlogHome />);
    });
    const posts = screen.getAllByRole('blog_post');
    expect(posts).toHaveLength(2);
  });

  it('should have a link to the post', async () => {
    await act(() => {
      render(<BlogHome />);
    });
    const posts = screen.getAllByRole('blog_post');
    posts.forEach(post => {
      const likElement = post.querySelector('a');
      expect(likElement).toBeTruthy();
      expect(likElement).toHaveAttribute('href');
      expect(likElement.getAttribute('href')).not.toBe('');
    });
  });
});