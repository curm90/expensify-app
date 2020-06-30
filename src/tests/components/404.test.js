import React from 'react';
import toJSON from 'enzyme-to-json';
import { shallow } from '../setupTests';
import NotFoundPage from '../../components/404';

it('should render 404 page', () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
