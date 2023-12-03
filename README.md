# API de Autenticação de Usuário

![GitHub repo size](https://img.shields.io/github/repo-size/davimcostaa/api-auth?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/davimcostaa/api-auth?style=for-the-badge)

> API Rest desenvolvida em Express com autenticação de usuários.

![image](https://shields.io/badge/JavaScript-F7DF1E?logo=JavaScript&logoColor=000&style=for-the-badge)
![image](https://shields.io/badge/Express-FFFFFF?logo=express&logoColor=000&style=for-the-badge)
![image](https://shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=000&style=for-the-badge)

## RoadMap

- [x] Token JWT
- [x] Senha criptografada
- [x] Rota privada
- [x] Cadastro
- [x] Login
      
## 🔗 Deploy na Vercel

 - https://api-auth-sooty.vercel.app/api/user/register
 - https://api-auth-sooty.vercel.app/api/user/login
 - https://api-auth-sooty.vercel.app/api/getuser

## ☕ Uso

### Request

`POST /api/user/register/`

### Exemplo de requisição

    {
     	"nome": "Taylor Swift",
    	"email": "taylor@outlook.com",
    	"senha": "taylor_123",
    	"telefones": [{"numero": "993456798", "ddd": "61"}]
    }


    
`POST /api/user/login/`

### Exemplo de requisição

    {
	    "email": "taylor@outlook.com",
	    "senha": "taylor_123"
    }

### Exemplo de resposta

    {
	    "_id": "38gbjg8593",
	    "data_criacao": "2023-12-03T17:25:47.875Z",
	    "data_atualizacao": null,
	    "ultimo_login": "2023-12-03T17:26:21.756Z",
	    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTZjYmExYjM1ODhiNzgzZWE4MWQxZTAiLCJpYXQiOjE3MDE2MjQzODEsImV4cCI6MTcwMTYyNjE4MX0.fljPRBE4uZI_DheogkTdNbsPZZxw3-_jMN4biqtBtJo"
    }

    
`GET /api/user/getuser/`

### Exemplo de requisição

    **Cabeçalho:** Bearer {token}
    
### Exemplo de resposta

    {
    	"_id": "656cbb856650329128dbbac6",
    	"nome": "Davi Marques",
    	"email": "davimarques334@outlook.com",
    	"senha": "$2a$10$rPSeNuTeoNMKXJrSECV8GebZtDjUgS3fDhw65DzpBvDQ9nT5L0g4W",
    	"telefones": [
    		{
    			"numero": "993456798",
    			"ddd": "61",
    			"_id": "656cbb856650329128dbbac7"
    		}
    	],
    	"data_atualizacao": null,
    	"ultimo_login": null,
    	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTZjYmI4NTY2NTAzMjkxMjhkYmJhYzYiLCJpYXQiOjE3MDE2MjQ3MTAsImV4cCI6MTcwMTYyNjUxMH0.CWSOGFDU9hUtW9ZnbNJXbEND7dbURxV795CwG4WzHII",
    	"data_criacao": "2023-12-03T17:31:49.861Z",
    	"__v": 0
    }
    



