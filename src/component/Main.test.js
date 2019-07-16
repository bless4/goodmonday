import React from 'react';
import { shallow } from 'enzyme';
import Main from './Main';

describe('Main', () => {
  let component = null;
  
  it('renders correctly', () => {
    component = shallow(<Main />);
  });

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
 
  describe('check logic', () => {
    it('handle change function check', () => {
        const mockedEvent = {
            target: {
                name: 'arrayValue',
                value: '1,2,3,4,5,6'
            }
        };
        component.simulate('handleChange', mockedEvent);
    });
    it('handle inputed value to array value', () => {
        component.simulate('handleIntegerArray');
    });
  });
});
