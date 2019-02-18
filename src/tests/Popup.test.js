import React from 'react';
import ReactDOM from 'react-dom';
import Popup from '../Popup';
import { shallow } from 'enzyme';

describe('Popup', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Popup />
    );
  });
  it('should match snapshop', () => {
    expect(wrapper).toMatchSnapshot();
  });
})