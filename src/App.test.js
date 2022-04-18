import React from "react"
import Enzyme, {configure, shallow} from "enzyme"
import EnzymeAdapter from 'enzyme-adapter-react-16'
import App from './App'

configure({adapter: new EnzymeAdapter() })

let wrapper;
describe('testing click counter app', () => {

  beforeEach(() => {
    wrapper = shallow(<App />)
  })
  test('renders without crashing', () => {
    // const wrapper = shallow(<App />)
    const component = wrapper.find(`[data-test="counter-component"]`);
    expect(component.length).toBe(1)
    // console.log(wrapper.debug())
  });

  test('Increment button renders', () => {
    const button = wrapper.find('[data-test="increment-button"]')
    expect(button.length).toBe(1);
  })

  test('render count display', () => {
    const counter = wrapper.find('[data-test="display-counter"]')
    expect(counter.length).toBe(1);
  })

  test('render count starts at zero', () => {
    const count = wrapper.find('[data-test="count"]')
    expect(count.text()).toBe('0')
  })

  test('counter increments when button is clicked', () => {
    const  button = wrapper.find('[data-test="increment-button"]')
    button.simulate('click')
    // check the counter
    const count = wrapper.find('[data-test="count"]').text();
    expect(count).toBe("1");
  })
})
