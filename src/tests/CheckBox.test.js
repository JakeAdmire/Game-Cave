import React from 'react';
import ReactDOM from 'react-dom';
import CheckBox from '../CheckBox';
import { shallow } from 'enzyme';

describe('CheckBox', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <CheckBox />
    );
  });
  it('should match snapshop', () => {
    expect(wrapper).toMatchSnapshot();
  });

})