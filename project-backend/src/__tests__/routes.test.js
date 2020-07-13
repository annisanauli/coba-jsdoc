const app = require('../App');
const request = require('supertest');

describe('Test Endpoints', () => {
  
  test('should create a new post', async done => {
    const res = await request(app)
      .post('/users')
      .send({
        name: 'testing3',
        email:'testing3@gmail.com',
        password:'dweSSA.44',
        phone:'081263276672',   
        role:3
      })
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('data');
    expect(res.body.message).toBe('Data successfully created');
    done();
  });

  test('should get all posts', async done => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('data');
    expect(res.body.message).toBe('Get all data is success');
    // expect(res.body.data).toHaveLength(18);
    done()
    });

    test('should get a single post', async done => {
    const id = 59;
    const res = await request(app).get('/users/${id}');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('data');
    done();
  });
  
  test('should delete a post', async done => {
    const res = await request(app).delete('/users/67');
    expect(res.statusCode).toEqual(200);
    done();
  });

  test('should respond with status code 404 if resource is not found', async done => {
    const id = 67;
    const res = await request(app).get('/users${id}');
    expect(res.statusCode).toEqual(404);
    done();
  });

 

  // it('should respond with status code 404 if resource is not found', async () => {
  //   const id = 57;
  //   const res = await request(app).get('/users/${id}');
  //   expect(res.statusCode).toEqual(200);
  // });

 
});
