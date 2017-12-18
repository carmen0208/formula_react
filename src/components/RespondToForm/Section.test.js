import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Section from './Section';


it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Section />, div);
})

it('renders the title in an h2', ()=> {
    const div = document.createElement('div')
    const title = "Second"

    const subject = shallow(<Section title = {title} />)

    expect(subject.text()).toMatch(/Second/) 
})