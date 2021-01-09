/* eslint-disable jest/expect-expect */
import React from 'react';
import { render } from '@testing-library/react';
import Tridi from '../src/index';

describe('react-tridi', () => {
  it('should render correctly', () => {
    const options = {
      element: '.tridi-test-with-classname',
      location: '/images/test',
      format: 'jpg',
      count: 36,
    };

    const options2 = {
      element: '#tridi-test-with-id-name',
      location: '/images/test',
      format: 'jpg',
      count: 36,
    };

    render(<Tridi {...options} />);
    render(<Tridi {...options2} />);
  });
});
