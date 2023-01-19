import React from "react";
import { render, screen } from "@testing-library/react";
import { PostCard } from '.';
import { postCardMock } from './mock';

const mock = postCardMock;

describe('<PostCard />', () => {
  it('should render PostCard correctly', () => {
    render(<PostCard {...mock} />);

    expect(screen.getByRole('img', { name: /title 1/i })).toHaveAttribute('src', 'img/img.png');
    expect(screen.getByRole('heading', { name: 'title 1 1' })).toBeInTheDocument();
    expect(screen.getByText('body 1')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<PostCard {...mock} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
