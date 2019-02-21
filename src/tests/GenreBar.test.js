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
      showGenres: false, mouseIn: false
    });
  })

  it('should toggle mouseIn on mouse leave', () => {
    expect(wrapper.state('mouseIn')).toEqual(false);
    wrapper.find('.genre-bar').simulate('mouseleave');
    expect(wrapper.state('mouseIn')).toEqual(true);
  })

  it('should toggle mouseIn on mouse enter', () => {
    expect(wrapper.state('mouseIn')).toEqual(false);
    wrapper.find('.genre-bar').simulate('mouseleave');
    expect(wrapper.state('mouseIn')).toEqual(true);
    wrapper.find('.genre-bar').simulate('mouseenter');
    expect(wrapper.state('mouseIn')).toEqual(false);
  })

  it('should toggle showGenres when button is clicked', () => {
    expect(wrapper.state('showGenres')).toEqual(false);
    wrapper.find('.button').simulate('click');
    expect(wrapper.state('showGenres')).toEqual(true);
  }) 

  it('should change showGenres on blur', () => {
    wrapper.find('.button').simulate('click');
    expect(wrapper.state('showGenres')).toEqual(true);
    wrapper.find('.genre-bar').simulate('blur');
    expect(wrapper.state('showGenres')).toEqual(false);
  })
})