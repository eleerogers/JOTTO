import { EnzymeAdapter } from "enzyme";
import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from '../tests/testUtils';
import GuessedWords from './GuessedWords';

const defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }]
};

const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />)
}

test('Does not throw warning with expected props', () => {
  checkProps(GuessedWords, defaultProps);
})

describe('If there are no words guessed', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  })
  test('renders without error', () => {
    const appComponent = findByTestAttr(wrapper, 'component-guessed-words');
    expect(appComponent.length).toBe(1);
  });

  test('renders instructions to guess a word', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instructions').text();
    expect(instructions.length).toBeGreaterThan(0);
  });

})

describe('If there are words guessed', () => {
  // let wrapper;
  // beforeEach(() => {
  //   wrapper = setup(defaultProps);
  // })

})