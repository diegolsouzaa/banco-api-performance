import http from 'k6/http';
import { sleep } from 'k6';
import { expect } from "https://jslib.k6.io/k6-testing/0.5.0/index.js";
import { obterToken } from '../helpers/autenticacao.js';
import { check } from 'k6';

export const options = {
  iterations: 1
};

export default function() {
  const token = obterToken();

  const url = 'http://localhost:3000/transferencias';

  const payload = JSON.stringify({

    contaOrigem: 1,
    contaDestino: 2,
    valor: 11,
    token: ""

  });

  const params = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ token
        },
    };

  const response = http.post(url, payload, params);
  console.log(response)

   check(response, {
      'Validar que o Status é 201': (res) => res.status === 201
    })
    sleep(1);

}
