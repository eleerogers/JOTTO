import React from "react"
import { shallow } from "enzyme"
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {findByTestAttr, checkProps} from '../tests/testUtils';
import Congrats from "./Congrats";




const defaultProps = { success: false }


const setup = (props={}) => {
  const setupProps = {...defaultProps, ...props}
  return shallow(<Congrats {...setupProps} />)
};


test('Renders without error', () => {
  const wrapper = setup({success: false});
  const congratsComponent = findByTestAttr(wrapper, 'congrats');
  expect(congratsComponent.length).toBe(1);
});

test('Renders no text when "success" prop is false', () => {
  const wrapper = setup({success: false});
  const congratsComponentText = findByTestAttr(wrapper, 'congrats').text();
  expect(congratsComponentText).toBe("");
});

test('Renders non-empty success message when success prop is true', () => {
  const wrapper = setup({success: true});
  const congratsComponentText = findByTestAttr(wrapper, 'congrats').text();
  expect(congratsComponentText.length).toBeGreaterThan(0);
});

test('Does not throw warning with expected props', () => {
  checkProps(Congrats, { success: false });
});
