import http from 'k6/http';
import { sleep } from 'k6';
import { obterToken } from '../helpers/autenticacao.js';
import { check } from 'k6';
import { obterBaseUrl } from '../utils/variaveis.js';

export const options = {
  iterations: 1
};

export default function() {
  const token = obterToken();

  const url = obterBaseUrl() + '/transferencias';

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
