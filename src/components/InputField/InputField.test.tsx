import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { InputField } from './InputField';

describe('InputField', () => {
  it('should render with default props', () => {
    expect.assertions(1);

    const input = renderer.create(<InputField />).toJSON();

    expect(input).toMatchSnapshot();
  });

  it('should render valid', () => {
    expect.assertions(1);

    const input = renderer.create(<InputField isValid />).toJSON();

    expect(input).toMatchSnapshot();
  });

  it('should render with type', () => {
    expect.assertions(1);

    const type = 'password';
    const input = renderer.create(<InputField type={type} />).toJSON();

    expect(input).toMatchSnapshot();
  });

  it('should render with label', () => {
    expect.assertions(1);

    const input = renderer.create(<InputField label="Label text" />).toJSON();

    expect(input).toMatchSnapshot();
  });

  it('should render with value', () => {
    expect.assertions(1);

    const value = 'test value';
    const input = renderer.create(<InputField value={value} />);

    expect(input).toMatchSnapshot();
  });

  it('should render with className props', () => {
    expect.assertions(1);

    const className = 'custom';
    const { container } = render(<InputField className={className} />);
    const parent = container.firstChild;

    expect(parent).toHaveClass(className);
  });

  it('should be changeable', () => {
    // expect.assertions(1);
    const newValue = 'test_value';
    const handleOnChange = jest.fn();
    const { getByRole } = render(<InputField onChangeHandle={handleOnChange} />);
    const input = getByRole('textbox');

    fireEvent.change(input, { target: { newValue } });

    expect(handleOnChange).toHaveBeenCalledTimes(1);
  });
});
