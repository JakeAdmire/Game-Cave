import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../SearchBar';
import { shallow } from 'enzyme';

const updateStateMock = jest.fn();

describe('SearchBar', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <SearchBar 
        updateState = {updateStateMock}/>
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call updateState on app on input change', () => {
    wrapper.find('.search').simulate('change', {target: {value: 'pam'}});
    expect(updateStateMock).toBeCalled();
  })
})