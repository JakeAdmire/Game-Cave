import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../Footer';
import { shallow } from 'enzyme';

describe('Footer', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Footer />
    );
  });
  it('should match snapshop', () => {
    expect(wrapper).toMatchSnapshot();
  });
})