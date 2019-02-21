import React from 'react';
import ReactDOM from 'react-dom';
import MultiBar from '../MultiBar';
import { shallow } from 'enzyme';

const updateStateMock = jest.fn();

describe('MultiBar', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <MultiBar 
      updateState={updateStateMock}/>
    );
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke updateState when button clicked', () => {
    wrapper.find('.button').simulate('click');
    expect(updateStateMock).toBeCalled()
  })
})