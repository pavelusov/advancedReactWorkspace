import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import Root from '../Root';
import App from '../components/App';

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Root>
      <App/>
    </Root>
  );
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [
      { name: 'Fetch comment #1' },
      { name: 'Fetch comment #2' },
      { name: 'Fetch comment #3' }
    ]
  });
});

afterEach(() => {
  moxios.uninstall();
  wrapper.unmount();
});

it('получить список с комментариями и отобразить их на экране', (done) => {

  const fetchButtonElement = '[data-test="component-fetch-button"]';
  const commentElement = '[data-test="comment"]';
  wrapper.find(fetchButtonElement).simulate('click');

  moxios.wait(() => {
    wrapper.update();
    expect(wrapper.find(commentElement).length).toEqual(3);
    done();
  });
});
