import React from 'react';
import { shallow } from 'enzyme';
import InputWidget from './InputWidget';

describe('InputWidget', () => {
  let component = null;
  
  it('renders correctly', () => {
    component = shallow(<InputWidget />);
  });

  it('InputWidget snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
