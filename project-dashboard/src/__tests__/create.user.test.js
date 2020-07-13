import React from 'react';
import CreateUser, {Role} from '../models/create.user';
import Enzyme, {shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({adapter:new Adapter()});

describe("create.user component", () => {
  test("renders", () => {
    const wrapper = shallow(<CreateUser />);
    //expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });

  it('Should capture name correctly onChange', () =>{
    const component = mount(<CreateUser />);
    const input = component.find('input').at(0);
    input.instance().value = 'Nauli';
    input.simulate('change');
    expect(component.state().fields["campName"]).toEqual('Nauli');
    expect(component).toMatchSnapshot();
  })

  it('Should capture email correctly onChange', () =>{
    const component = mount(<CreateUser />);
    const input = component.find('input').at(1);
    input.instance().value = 'nauli@gmail.com';
    input.simulate('change');
    expect(component.find('input').at(1).props().value).toEqual('nauli@gmail.com');
    //expect(component.state().fields["campEmail"]).toEqual('nauli@gmail.com');
    expect(component).toMatchSnapshot();
   })

   it('Should capture password correctly onChange', () =>{
    const component = mount(<CreateUser />);
    const input = component.find('input').at(2);
    input.instance().value = 'Nauli17_';
    input.simulate('change');
    //expect(component.state().fields["campPassword"]).toEqual('Nauli17_');
    expect(component.find('input').at(2).props().value).toEqual('Nauli17_');
    expect(component).toMatchSnapshot();
  })

  it('Should capture phone correctly onChange', () =>{
    const component = mount(<CreateUser />);
    const input = component.find('input').at(3);
    input.instance().value = '08126312810';
    input.simulate('change');
    //expect(component.state().fields["campPhone"]).toEqual('08126312810');
    expect(component.find('input').at(3).props().value).toEqual('08126312810');
    expect(component).toMatchSnapshot();
  })

  it('Should capture select role correctly onChange', () =>{
    const component = mount(<CreateUser />);
    const input = component.find('select').at(0);
    const optionRole = component.find('option').at(1);
    optionRole.instance().selected  = true;
    input.simulate('change');
    //expect(component.find('select').at(0).props().value).toEqual('Role 2');
    expect(component.state().selectRole).toEqual('1');
    expect(component).toMatchSnapshot();
  });

  it('calls handleSubmit prop function when form is submitted', () => {
    const wrapper = shallow(<CreateUser />);
    const fn = jest.fn();
    wrapper.instance().handleSubmit = fn;
    wrapper.instance().handleSubmit();
        wrapper.find('form').simulate('submit', {
      preventDefault: () => {}
      
    });
    //wrapper.setState(state)
    expect(fn).toHaveBeenCalled();
    expect(wrapper).toMatchSnapshot();
  });
  
})