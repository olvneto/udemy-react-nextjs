import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from '.';

// eslint-disable-next-line no-undef
describe('<Button />', () => {
  it('should render the button with the text "Load more"', () => {
    const fn = jest.fn();
    render(<Button text="Load more" actionFn={fn} />);

    expect.assertions(1);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument();
  });

  it('should call function on button click', async () => {
    const fn = jest.fn();
    render(<Button text="Load more posts" disabled={false} actionFn={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });

    await userEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);

  });

  it('should be disabled when disabled is true', () => {
    const fn = jest.fn();
    render(<Button text="Load more" disabled={true} actionFn={fn} />);
    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeDisabled();
  });

  it('should be enabled when disabled is false', () => {
    const fn = jest.fn();
    render(<Button text="Load more" disabled={false} actionFn={fn} />);
    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeEnabled();
  });
});
