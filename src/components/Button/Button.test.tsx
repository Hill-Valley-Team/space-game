import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';

describe('Button', () => {
  it('should render with text as prop', () => {
    expect.assertions(1);

    const button = renderer.create(<Button text="Text" />).toJSON();

    expect(button).toMatchSnapshot();
  });

  it('should render with text as children', () => {
    expect.assertions(1);

    const button = renderer.create(<Button>Children</Button>).toJSON();

    expect(button).toMatchSnapshot();
  });

  it('should render with type', () => {
    expect.assertions(1);

    const button = renderer.create(<Button type="reset">Reset</Button>).toJSON();

    expect(button).toMatchSnapshot();
  });

  it('should render disabled', () => {
    expect.assertions(1);

    const { getByRole } = render(<Button disabled>Disabled</Button>);
    const button = getByRole('button');

    expect(button).toBeDisabled();
  });

  it('should render with className props', () => {
    expect.assertions(4);

    const view = 'secondary';
    const align = 'center';
    const className = 'custom';
    const width = 'auto';
    const { getByRole } = render(
      <Button view={view} align={align} width={width} className={className}>
        Secondary
      </Button>,
    );
    const button = getByRole('button');

    expect(button.className).toContain(align);
    expect(button.className).toContain(className);
    expect(button.className).toContain(width);
    expect(button.className).toContain(view);
  });

  it('should be clickable', () => {
    expect.assertions(1);

    const handleOnClick = jest.fn();
    const { getByRole } = render(<Button onClick={handleOnClick}>Click Me!</Button>);
    const button = getByRole('button');

    fireEvent.click(button);

    expect(handleOnClick).toHaveBeenCalledTimes(1);
  });
});
