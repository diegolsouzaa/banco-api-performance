import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus:10,
  duration: '30s',
  thresholds: {
    http_req_duration: ['p(90)<3000', 'max<5000'],
    //a quantidade de requisições que falharam tem que ser de até 1%
     http_req_failed: ['rate<0.01']
  }
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
}