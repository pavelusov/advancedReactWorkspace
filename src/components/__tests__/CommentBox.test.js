import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import CommentBox from 'components/CommentBox';

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Root>
      <CommentBox/>
    </Root>);
});

afterEach(() => {
  wrapper.unmount();
});

it('показаны текстовая область и кнопка отправки формы', () => {
  expect(wrapper.find('[data-test="component-text-area"]').length).toEqual(1);
  expect(wrapper.find('[data-test="component-submit-button"]').length).toEqual(1);
});

describe('пользователь может ввести данные в текстовую область формы', () => {
  const value = 'Новый комментарий';
  const textArea = '[data-test="component-text-area"]';
  const form = '[data-test="component-form"]';

  beforeEach(() => {
    wrapper.find(textArea).simulate('change', { target: { value } });
    wrapper.update();
  });


  it('коментарий написан и отображается в текстовом поле', () => {
    expect(wrapper.find(textArea).prop('value')).toEqual(value);
  });

  it('После отправки формы текстовое поле очищается', () => {
    wrapper.find(form).simulate('submit');
    // wrapper.find('[data-test="component-submit-button"]').simulate('submit');
    wrapper.update();
    expect(wrapper.find(textArea).prop('value')).toEqual('')
  });
});
