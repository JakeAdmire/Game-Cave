import React from 'react';
import ReactDOM from 'react-dom';
import LuckyBar from '../LuckyBar';
import { shallow } from 'enzyme';

const updateStateMock = jest.fn();

describe('LuckyBar', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <LuckyBar 
      updateState={updateStateMock}/>
    );
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    expect(wrapper.state()).toEqual({
      active: false
    });
  })

  it('should invoke updateState when button is clicked', () => {
    wrapper.find('.button').simulate('click');
    expect(updateStateMock).toBeCalled();
  })

  it('should update active state on button click', () => {
    expect(wrapper.state('active')).toEqual(false);
    wrapper.find('.button').simulate('click');
    expect(wrapper.state('active')).toEqual(true);
  })
})