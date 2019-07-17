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
      expect(component.instance().handleChange(mockedEvent));
      expect(component.state('arrayValue')).toEqual(mockedEvent.target.value);
    });

    it('handle inputed value to array value', () => {
      component.simulate('handleIntegerArray');
      expect(component.state('arrayValue')).toBe('1,2,3,4,5,6');
      expect(component.instance().handleIntegerArray());
      expect(component.state('resultSum')).toEqual(33);
    });

    it('handle paired number array value', () => {
      const testArray = [1,2];
      component.simulate('handleArrayValue', testArray);
      expect(component.instance().handleArrayValue(testArray)).toEqual(2);
    });
    
    it('handle total', () => {
      let total = 0;
      let value = 1;
      component.simulate('handleFinalSum', total, value);
      expect(component.instance().handleFinalSum(total, value)).toEqual(1);
    });

    it('handle pair number array to string', () => {
      const values = [1,2,3,4,5,6];
      component.simulate('handlePairArrayToString', values);
      expect(component.instance().handlePairArrayToString(values)).toEqual('(1), (2), (3), (4), (5), (6), ');
    });
    
  });
});
