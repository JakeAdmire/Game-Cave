import React from 'react';
import ReactDOM from 'react-dom';
import GenreBar from '../GenreBar';
import { shallow } from 'enzyme';

const mockGenres = ['Action', 'Adventure', 'Fantasy']
const mockFilters = ['Action', 'Adventure']

describe('GenreBar', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <GenreBar 
        genres={mockGenres}
        genresToFilter={mockFilters}
      />
    );
  });
  it('should match snapshop', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should have default state', () => {
    expect(wrapper.state()).toEqual({
      showGenres: false
    });
  })
})