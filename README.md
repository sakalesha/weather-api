# 🌦️ Advanced Weather Intelligence API  
A production-grade backend API that provides real-time weather summaries, city autocomplete search, and intelligent caching.  
Built using **Node.js, Express, Axios, Open-Meteo API**, with **rate limiting, logging, caching, and clean architecture**.

---

## 🚀 Features

### ✅ Weather Intelligence  
- Real-time weather summary  
- Temperature, wind speed, weather code, updated timestamp  
- Clean, processed response returned from backend  

### ✅ City Autocomplete  
- Suggests cities as the user types  
- Fast lookup from optimized in-memory dataset  

### ✅ Production-Level Features  
- **Response Caching** (Node-Cache, 5 min TTL)  
- **Rate Limiting** (20 requests/min)  
- **Logging** using Morgan  
- **Centralized Error Handling**  
- Modular **Controller → Service → Routes** structure  
- Environment variables support  

### 🛠 Tech Stack ###

- Node.js
- Express.js
- Axios
- Node-Cache
- Morgan
- Express Rate Limit
- Open-Meteo API
- Render (deployment)

### ✅ Deployment  
- 100% cloud-ready via **Render / Railway / Vercel**

---

## 📁 Project Structure
```
weather-intelligence-api/
│── src/
│ ├── routes/
│ │ ├── weatherRoutes.js
│ │ └── cityRoutes.js
│ ├── controllers/
│ │ ├── weatherController.js
│ │ └── cityController.js
│ ├── services/
│ │ ├── weatherService.js
│ │ └── cityService.js
│ ├── middleware/
│ │ ├── errorMiddleware.js
│ │ ├── rateLimit.js
│ │ └── logger.js
│ ├── utils/
│ │ ├── cache.js
│ │ └── cityData.js
│ └── app.js
│── index.js
│── package.json
│── .env
```
---

## 🔧 Installation & Setup

### 1️⃣ Clone the repository
```
git clone <your-repo-link>
cd weather-intelligence-api
```
### 2️⃣ Install dependencies
```
npm install
```
### 3️⃣ Create `.env` file
```
PORT=3000
```
### 4️⃣ Start server
```
node index.js
```
Server will run on:

```
http://localhost:3000
```
---

## 🌐 API Documentation

### 🔹 Base URL  
```
https://your-deployed-url.com
```
---

## 1️⃣ **Get Weather Summary**
### Endpoint  
```
GET /weather?city=<city_name>
```
### Example  
```
/weather?city=bangalore
```
### Sample Response  
```json
{
  "success": true,
  "data": {
    "city": "bangalore",
    "temperature": "26°C",
    "wind_speed": "5 km/h",
    "condition_code": 1,
    "updated_at": "2025-12-05T11:00"
  }
}
```

---

## 2️⃣ ** City Autocomplete Searchry**
### Endpoint  
GET /city/search?q=<keyword>

###Example
```
/city/search?q=ba
```

### Response
```
{
  "success": true,
  "results": ["bangalore"]
}
```
---

## 🧪 **Test Cases (Verified)**

| Test Type               | Status |
| ----------------------- | ------ |
| Valid weather responses | ✅      |
| Invalid city handling   | ✅      |
| Missing query errors    | ✅      |
| Autocomplete matching   | ✅      |
| No match case           | ✅      |
| Cache performance check | ✅      |
| Rate limiter test       | ✅      |
| Error middleware output | ✅      |

All test cases have been successfully passed.

--- 

## ☁️ Deployment Instructions (Render)

1. Push repository to GitHub
2. Visit (https://render.com)
3. Create → Web Service
4. Choose repository
5. Set:
Build Command: (empty)
Start Command: node index.js
6. Deploy → Get Public URL

---

## 👨‍💻 Author

Ronada Sakalesha
[LinkedIn](https://www.linkedin.com/in/ronada-sakalesha/)
[GitHub](https://github.com/sakalesha)