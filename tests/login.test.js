import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  iterations: 1,
};

export default function () {
    const url = 'http://localhost:3000/login';
    const payload = JSON.stringify({
        username: 'julio.lima',
        senha: '123456',
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

  const response = http.post(url, payload, params);

  check(response, {
    'Validar que o Status é 200': (res) => res.status === 200,
    'Validar que o token é string': (res) => typeof(res.json().token) == 'string'
  })
  sleep(1);
  console.log(response);
}