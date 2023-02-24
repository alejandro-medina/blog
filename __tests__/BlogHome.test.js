import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import BlogHome from 'app/page';

describe('Blog Home', () => {

  it('should render the Blog Home Page', () => {
    render(<BlogHome />);
  })

  it('should render a list of blog posts', () => {
    render(<BlogHome />);
    const posts = screen.getAllByRole('blog_post');
    expect(posts).length > 0
  });

  it('should have a description', () => {
    render(<BlogHome />);
    const posts = screen.getAllByRole('blog_post');
    posts.forEach(post => {
      const hasDescriptionElement = post.querySelector('.description');
      expect(hasDescriptionElement).toBeTruthy();
    });
  });

  it('should have a link to the post', () => {
    render(<BlogHome />);
    const posts = screen.getAllByRole('blog_post');
    posts.forEach(post => {
      const likElement = post.querySelector('a');
      expect(likElement).toBeTruthy();
      expect(likElement).toHaveAttribute('href');
    });
  });
});