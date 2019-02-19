import React from 'react';
import ReactDOM from 'react-dom';
import PlatformBar from '../PlatformBar';
import { shallow } from 'enzyme';

const updateStateMock = jest.fn();

let plats = ['PS4', 'PS3', 'XBOX']
describe('PlatformBar', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <PlatformBar platforms={plats}
        updateState= {updateStateMock}/>
    );
  });
  it('should match snapshop', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke updateState upon input change', () => {
    wrapper.find('.platform-check').simulate('change');
    expect(updateStateMock).toBeCalled();
  })
})