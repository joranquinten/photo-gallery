import React from 'react';
import { shallow } from 'enzyme';

import Modal from './modal';

describe('Modal', () => {
  it('should render without crashing', () => {
    expect(shallow(<Modal closeModal={() => {}}>Child</Modal>)).toMatchSnapshot();
  });
});
