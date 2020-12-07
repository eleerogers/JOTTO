import React from "react"
import Enzyme, { shallow } from "enzyme"
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {findByTestAttr} from '../tests/testUtils';
import Congrats from "./Congrats";

Enzyme.configure({ adapter: new Adapter() });

const setup = (props={}) => shallow(<Congrats {...props} />);


test('Renders without error', () => {
  const wrapper = setup();
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