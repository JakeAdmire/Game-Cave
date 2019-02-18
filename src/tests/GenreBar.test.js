import React from 'react';
import ReactDOM from 'react-dom';
import GenreBar from '../GenreBar';
import { shallow } from 'enzyme';

let cats = ['Action', 'Adventure', 'Fantasy']

describe('GenreBar', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <GenreBar genres={cats}/>
    );
  });
  it('should match snapshop', () => {
    expect(wrapper).toMatchSnapshot();
  });
})