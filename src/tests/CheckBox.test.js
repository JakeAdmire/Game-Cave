import React from 'react';
import ReactDOM from 'react-dom';
import CheckBox from '../CheckBox';
import { shallow } from 'enzyme';

const updateChecksMock = jest.fn();

describe('CheckBox', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <CheckBox 
        updateChecks={updateChecksMock}
      />
    );
  });
  it('should match snapshop', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call updateChecks on app on input change', () => {
    wrapper.find('input').simulate('change');
    expect(updateChecksMock).toBeCalled();
  })
})