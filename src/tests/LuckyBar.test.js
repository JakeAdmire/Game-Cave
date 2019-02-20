import React from 'react';
import ReactDOM from 'react-dom';
import LuckyBar from '../LuckyBar';
import { shallow } from 'enzyme';

describe('LuckyBar', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <LuckyBar />
    );
  });

  it('should match snapshop', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    expect(wrapper.state()).toEqual({
      active: false
    });
  })
})