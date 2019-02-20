import React from 'react';
import ReactDOM from 'react-dom';
import PlatformBar from '../PlatformBar';
import { shallow } from 'enzyme';

// const updateStateMock = jest.fn();

const plats = ['PS4', 'PS3', 'XBOX']
const toFilterMock = ['PS4', 'PS3']
describe('PlatformBar', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <PlatformBar 
        platformsToFilter={toFilterMock}
        platforms={plats}
        // updateState={updateStateMock}
        />
    );
  });
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    expect(wrapper.state()).toEqual({
      showPlatforms: false, mouseIn: false
    });
  })

  it('should toggle mouseIn on mouse leave', () => {
    expect(wrapper.state('mouseIn')).toEqual(false);
    wrapper.find('.console-bar').simulate('mouseleave');
    expect(wrapper.state('mouseIn')).toEqual(true);
  })

  it('should toggle mouseIn on mouse enter', () => {
    expect(wrapper.state('mouseIn')).toEqual(false);
    wrapper.find('.console-bar').simulate('mouseleave');
    expect(wrapper.state('mouseIn')).toEqual(true);
    wrapper.find('.console-bar').simulate('mouseenter');
    expect(wrapper.state('mouseIn')).toEqual(false);
  })

  it('should toggle showPlatforms when button is clicked', () => {
    expect(wrapper.state('showPlatforms')).toEqual(false);
    wrapper.find('.button').simulate('click');
    expect(wrapper.state('showPlatforms')).toEqual(true);
  })

  it('should change showPlatforms on blur', () => {
    wrapper.find('.button').simulate('click');
    expect(wrapper.state('showPlatforms')).toEqual(true);
    wrapper.find('.console-bar').simulate('blur');
    expect(wrapper.state('showPlatforms')).toEqual(false);
  })

  // it('should invoke updateState upon input change', () => {
  //   wrapper.find('form').simulate('change');
  //   expect(updateStateMock).toBeCalled();
  // })
})