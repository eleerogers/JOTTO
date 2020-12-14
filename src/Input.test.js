import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../tests/testUtils';
import Input, { UnconnectedInput } from './Input';

const setup = (initialState={}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />).dive().dive();
  return wrapper;
};


describe('render', () => {
  describe('word has not been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = {success: false};
      wrapper = setup(initialState)
    })
    test('renders component without error', () => {
      const inputComponent = findByTestAttr(wrapper, 'component-input')
      expect(inputComponent.length).toBe(1);
    });
    test('renders input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box')
      expect(inputBox.length).toBe(1);
    });
    test('renders submit button', () => {
      const submitBtn = findByTestAttr(wrapper, 'submit-btn')
      expect(submitBtn.length).toBe(1);
    });
  });
  describe('word has been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = {success: true};
      wrapper = setup(initialState)
    })
    test('renders component without error', () => {
      const inputComponent = findByTestAttr(wrapper, 'component-input')
      expect(inputComponent.length).toBe(1);
    });
    test('does not render input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box')
      expect(inputBox.length).toBe(0);
    });
    test('does not render submit button', () => {
      const submitBtn = findByTestAttr(wrapper, 'submit-btn')
      expect(submitBtn.length).toBe(0);
    });
  });
});

describe('redux props', () => {
  test('has success piece of state as prop', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  test('guessWord action creator is a function prop', () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  })
})

describe('guessWord action is correctly called', () => {
  let guessWordMock, wrapper
  const guessedWord = 'train';
  beforeEach(() => {
    guessWordMock = jest.fn();
    wrapper = shallow(<UnconnectedInput guessWord={guessWordMock} />)
    wrapper.setState({ currentGuess: guessedWord })
    const submitBtn = findByTestAttr(wrapper, 'submit-btn');
    submitBtn.simulate('click', { preventDefault: () => {}});
  })
  test('guessWord runs when submit button is clicked', () => {
    const guessWordMockCallsLength = guessWordMock.mock.calls.length;
    expect(guessWordMockCallsLength).toBe(1);
  })
  test('guessWord sends correct word from input box', () => {
    const guessWordArgs = guessWordMock.mock.calls[0]
    console.log(guessWordArgs);
    expect(guessWordArgs[0]).toBe(guessedWord);
  })
  test('input box clears on submit', () => {
    const stateAfterSubmit = wrapper.state('currentGuess');
    expect(stateAfterSubmit).toBe('');
  })
});