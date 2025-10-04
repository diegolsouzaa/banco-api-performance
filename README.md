Testes de Performance da API do Banco com K6
============================================

[](https://github.com/juliodelimas/banco-api-performance?tab=readme-ov-file#testes-de-performance-da-api-do-banco-com-k6)

Repositório com testes de performance automatizados desenvolvidos com a ferramenta [Grafana K6](https://k6.io/) e escritos em JavaScript, voltados para a API do sistema bancário.

🔗 Repositório: [github.com/juliodelimas/banco-api-performance](https://github.com/juliodelimas/banco-api-performance)

* * * * *

📌 Introdução
-------------

[](https://github.com/juliodelimas/banco-api-performance?tab=readme-ov-file#-introdu%C3%A7%C3%A3o)

Este projeto tem como objetivo simular diferentes cargas e cenários de uso para a API do banco, avaliando seu desempenho e identificando possíveis gargalos. Os testes são escritos com foco em modularidade, organização por contexto e reutilização de modelos de dados.

* * * * *

⚙️ Tecnologias Utilizadas
-------------------------

[](https://github.com/juliodelimas/banco-api-performance?tab=readme-ov-file#%EF%B8%8F-tecnologias-utilizadas)

-   [K6](https://k6.io/) -- Ferramenta open source de testes de carga e performance.
-   JavaScript (ES6)
-   [GJSON](https://github.com/tidwall/gjson) -- Para extração de dados em respostas JSON.
-   Variáveis de ambiente para configuração dinâmica (ex: `BASE_URL`).

* * * * *

📁 Estrutura do Repositório
---------------------------

[](https://github.com/juliodelimas/banco-api-performance?tab=readme-ov-file#-estrutura-do-reposit%C3%B3rio)

```
banco-api-performance/
├── fixtures/               # Dados de entrada para os testes (ex: usuários, payloads)
├── helpers/            # Funções utilitárias reutilizáveis para interação com a API
├── tests/              # Casos de teste organizados por módulo da API
├── utils /              # Funções utilitárias reutilizáveis
├── config/        # Arquivos de configuração de variáveis de ambiente
└── README.md           # Este documento

```

* * * * *

🗂️ Objetivo de Cada Grupo de Arquivos
--------------------------------------

[](https://github.com/juliodelimas/banco-api-performance?tab=readme-ov-file#%EF%B8%8F-objetivo-de-cada-grupo-de-arquivos)

-   `fixtures/`: Dados de entrada para os testes (ex: usuários, payloads).
-   `helpers/`: Funções utilitárias reutilizáveis para interação com a API.
-   `tests/`: Casos de teste organizados por módulo da API
-   `utils/`: Funções utilitárias reutilizáveis.
-   `config/`: Arquivos de configuração de variáveis de ambiente

* * * * *

💻 Instalação e Execução
------------------------

[](https://github.com/juliodelimas/banco-api-performance?tab=readme-ov-file#-instala%C3%A7%C3%A3o-e-execu%C3%A7%C3%A3o)

### 1\. Clone o Repositório

[](https://github.com/juliodelimas/banco-api-performance?tab=readme-ov-file#1-clone-o-reposit%C3%B3rio)

```source-shell
git clone https://github.com/juliodelimas/banco-api-performance.git
cd banco-api-performance
```

### 2\. Configure as Variáveis de Ambiente

[](https://github.com/juliodelimas/banco-api-performance?tab=readme-ov-file#2-configure-as-vari%C3%A1veis-de-ambiente)

Altere o arquivo `config.local.json` e defina a URL base da API a ser testada:

```source-json
{
    "baseUrl": "http://localhost:3000"
}
```

> 💡 Essas variáveis serão usada dinamicamente nos testes para montar as requisições.

### 3\. Execute um Teste

[](https://github.com/juliodelimas/banco-api-performance?tab=readme-ov-file#3-execute-um-teste)

```source-shell
k6 run tests/login.test.js
```

Certifique-se de passar a variável de ambiente `BASE_URL`, caso não esteja usando um `config.local.json` ou uma abordagem de carregamento automático:

```source-shell
k6 run tests/autenticacao/login.test.js -e BASE_URL=http://localhost:3000
```

### 4\. Acompanhamento em Tempo Real + Exportação de Relatório

[](https://github.com/juliodelimas/banco-api-performance?tab=readme-ov-file#4-acompanhamento-em-tempo-real--exporta%C3%A7%C3%A3o-de-relat%C3%B3rio)

Você pode ativar o modo dashboard do K6 e exportar o relatório ao final do teste:

```source-shell
K6_WEB_DASHBOARD=true\
K6_WEB_DASHBOARD_EXPORT=html-report.html\
k6 run tests/autenticacao/login.test.js\
-e BASE_URL=http://localhost:3000
```

Após a execução, o relatório estará salvo como `html-report.html`.
