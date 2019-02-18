import React from 'react';
import ReactDOM from 'react-dom';
import MultiBar from '../MultiBar';
import { shallow } from 'enzyme';

describe('MultiBar', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <MultiBar />
    );
  });
  it('should match snapshop', () => {
    expect(wrapper).toMatchSnapshot();
  });
})