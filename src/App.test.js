import React from "react"
import Enzyme, {configure, shallow} from "enzyme"
import EnzymeAdapter from 'enzyme-adapter-react-16'
import App from './App'

configure({adapter: new EnzymeAdapter() })

let wrapper;
describe('testing click counter app', () => {

const findByAttr = (val) => {
  return wrapper.find(`[data-test="${val}"]`);
}
  beforeEach(() => {
    wrapper = shallow(<App />);
  })
  test('renders without app crashing', () => {
    // const wrcvvapper = shallow(<App />) // Moved to beforeEach
    // const comsdfponent = wrapper.find(`[data-test="counter-component"]`); created findByAttr function
    const component = findByAttr('counter-component');
    expect(component.length).toBe(1)
  });

  test('Increment button renders', () => {
    const button = findByAttr('increment-button')
    expect(button.length).toBe(1);
  })

  test('render count display', () => {
    const counter = findByAttr('display-counter')
    expect(counter.length).toBe(1);
  })

  test('render count starts at zero', () => {
    const count = findByAttr('count').text()
    expect(count).toBe('0')
  })

  test('counter increments when button is clicked', () => {
    const button = findByAttr('increment-button')
    button.simulate('click')

    // check the counter after click
    const count = findByAttr('count').text()
    expect(count).toBe("1");
  })
})
