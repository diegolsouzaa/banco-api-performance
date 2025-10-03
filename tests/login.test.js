import http from 'k6/http';
import { sleep, check } from 'k6';

//obter o conteudo do arquivo postLogin e convertendo para Json
const postLogin = JSON.parse(open('../fixtures/postLogin.json')); 

export const options = {
  
  stages:[
    { duration:'10s', target: 10},
    { duration:'20s', target: 20},
    { duration:'10s', target: 0},
  ],

  thresholds: {
    http_req_duration: ['p(90)<3000', 'max<5000'],

    //a quantidade de requisições que falharam tem que ser de até 1%
     http_req_failed: ['rate<0.01']
  }
};

export default function () {
    const url = 'http://localhost:3000/login';

    //é possivel manipular os dados caso necessario
    postLogin.username = "junior.souza"

    // se quiser passar as informaçoes diretamente (não recomendado)    
    // const payload = JSON.stringify({
    //     username: 'julio.lima',
    //     senha: '123456',
    // });

    console.log(postLogin)
    const payload = JSON.stringify(postLogin);

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