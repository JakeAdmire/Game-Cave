import React from 'react';
import ReactDOM from 'react-dom';
import PlatformBar from '../PlatformBar';
import { shallow } from 'enzyme';

let plats = ['PS4', 'PS3', 'XBOX']
describe('PlatformBar', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <PlatformBar platforms={plats}/>
    );
  });
  it('should match snapshop', () => {
    expect(wrapper).toMatchSnapshot();
  });
})