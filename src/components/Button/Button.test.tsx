import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from './Button';

describe('Button', () => {
  it('render with default props', () => {
    const tree = renderer.create(<Button text="Button" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
