import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';

let wrapper;

beforeEach(() => {
  wrapper = mount(<CommentBox/>);
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

  beforeEach(()=>{
    wrapper.find(textArea).simulate('change', { target: { value } });
    wrapper.update();
  });

  it('состояние компонента обновленно после ввода комментария', ()=>{
    expect(wrapper.state().comment).toEqual(value);
  });

  it('коментарий написан и отображается в текстовом поле', ()=>{
    expect(wrapper.find(textArea).prop('value')).toEqual(value);
  })
});
