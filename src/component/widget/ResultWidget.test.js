import React from 'react';
import { shallow } from 'enzyme';
import ResultWidget from './ResultWidget';

describe('ResultWidget', () => {
  let component = null;
  
  it('renders correctly', () => {
    component = shallow(<ResultWidget />);
  });

  it('result snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
