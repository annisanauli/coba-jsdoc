import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import ReadUser from '../models/read.user';
import Config from '../config/config';
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({adapter:new Adapter()});
 
jest.mock('axios', () => {
  const exampleUser = [
    { id: 1,
        name: "Nauli",
        email:"nauli@gmail.com",
        phone: '08126312810',
        password:"Nauli17_",
        roleId:2 }
  ];
  
  return {
    get: jest.fn(() => Promise.resolve(exampleUser)),
  };
});

const axios = require('axios');

it('fetch users on #loadUser', () => {
  const jsdomAlert = window.alert;  // remember the jsdom alert
  window.alert = () => {};  // provide an empty implementation for window.alert
  const readuser = shallow(<ReadUser />);
  const url = Config.baseUrl+"/users";
  readuser
    .instance()
    .loadUser()
    .then(() => {
      expect(axios.get).toHaveBeenCalled();
      expect(axios.get).toHaveBeenCalledWith(url);
      expect(readUser.state()).toHaveProperty('listUser', [
        { id: 1,
            name: "Nauli",
            email:"nauli@gmail.com",
            phone: '08126312810',
            password:"Nauli17_",
            roleId:2
         }
      ]);
      done();
      window.alert = jsdomAlert;  // restore the jsdom alert
    });
    //window.alert = jsdomAlert;  // restore the jsdom alert
});