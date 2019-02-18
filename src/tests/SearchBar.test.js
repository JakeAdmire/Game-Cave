import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../SearchBar';
import { shallow } from 'enzyme';

describe('SearchBar', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <SearchBar />
    );
  });
  it('should match snapshop', () => {
    expect(wrapper).toMatchSnapshot();
  });
})