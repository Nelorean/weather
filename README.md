# 🌤️ Weather API

API REST para consulta de clima em tempo real integrada com a OpenWeatherMap, desenvolvida com Node.js e Express.

## 🌐 Deploy

API disponível em: https://weather-frontend-5k0y.onrender.com

## 🚀 Tecnologias

- **Node.js** + **Express** — servidor e roteamento
- **Axios** — requisições HTTP para a OpenWeatherMap
- **CORS** — permite comunicação com o frontend
- **Dotenv** — variáveis de ambiente

## 📁 Estrutura do Projeto

```
weather/
├── src/
│   ├── controllers/
│   │   └── weatherController.js
│   ├── routes/
│   │   └── weatherRoutes.js
│   └── app.js
├── .env.example
├── .gitignore
├── package.json
└── server.js
```

## ⚙️ Como rodar localmente

### Pré-requisitos
- Node.js instalado
- Conta na [OpenWeatherMap](https://openweathermap.org) (gratuito)

### Passo a passo

```bash
# Clone o repositório
git clone https://github.com/Nelorean/weather.git

# Entre na pasta
cd weather

# Instale as dependências
npm install

# Crie o arquivo .env baseado no .env.example
cp .env.example .env
```

Preencha o arquivo `.env` com suas credenciais:

```env
OPENWEATHER_API_KEY=sua_chave_aqui
PORT=3000
```

```bash
# Rode o servidor em modo desenvolvimento
npm run dev
```

A API estará disponível em `http://localhost:3000`

## 📌 Endpoints

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/weather/:city` | Retorna o clima atual da cidade |

### Buscar clima — `GET /weather/:city`

**Exemplo:**
```
GET /weather/Tokyo
GET /weather/São Paulo
GET /weather/London
```

**Resposta:**
```json
{
  "city": "Tokyo",
  "country": "JP",
  "temperature": 22.0,
  "feels_like": 21.5,
  "humidity": 63,
  "description": "nublado",
  "icon": "04d"
}
```

**Erros:**
```json
{ "message": "Cidade não encontrada" }
```

## 🌱 Variáveis de Ambiente

| Variável | Descrição |
|----------|-----------|
| `OPENWEATHER_API_KEY` | Chave de acesso da OpenWeatherMap |
| `PORT` | Porta do servidor (padrão: 3000) |

## 🔗 Frontend

O frontend desta aplicação está disponível em: https://github.com/Nelorean/weather-frontend
