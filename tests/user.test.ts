import request from 'supertest';
import app from '../src/app';

describe('Auth Endpoints', () => {
  it('should register a new user', async () => {
    const res = await request(app).post('/auth/register').send({
      email: 'test@example.com',
      password: '123456',
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe('Usuario registrado con éxito');
  });

  it('should login the user', async () => {
    const res = await request(app).post('/auth/login').send({
      email: 'test@example.com',
      password: '123456',
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
  });
});
