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
  it('should match snapshop', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state', () => {
    expect(wrapper.state()).toEqual({
      showPlatforms: false
    });
  })

  // it('should invoke updateState upon input change', () => {
  //   wrapper.find('form').simulate('change');
  //   expect(updateStateMock).toBeCalled();
  // })
})