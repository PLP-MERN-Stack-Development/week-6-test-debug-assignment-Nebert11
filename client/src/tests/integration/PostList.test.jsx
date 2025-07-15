import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import PostList from '../../components/PostList';

beforeAll(() => {
  global.fetch = jest.fn();
});

afterAll(() => {
  global.fetch.mockRestore();
});

it('renders posts fetched from API', async () => {
  const mockPosts = [
    { _id: '1', title: 'First Post' },
    { _id: '2', title: 'Second Post' }
  ];
  fetch.mockResolvedValueOnce({
    json: async () => mockPosts
  });

  render(<PostList />);
  expect(screen.getByText(/loading/i)).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText('First Post')).toBeInTheDocument();
    expect(screen.getByText('Second Post')).toBeInTheDocument();
  });
}); 