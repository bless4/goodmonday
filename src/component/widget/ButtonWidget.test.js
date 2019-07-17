import React from 'react';
import { shallow } from 'enzyme';
import ButtonWidget from './ButtonWidget';

describe('ButtonWidget', () => {
  let component = null;
  
  it('renders correctly', () => {
    component = shallow(<ButtonWidget />);
  });

  it('ButtonWidget snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
