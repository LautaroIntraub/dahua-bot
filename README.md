# 📹 Dahua Bot – Alertas en Telegram

Bot en **Node.js** que recibe eventos en tiempo real desde un **NVR o cámara Dahua (DMSS)** mediante el protocolo **HTTP Alarm Center**, y envía alertas instantáneas a **Telegram**.  

---

## 🚀 Características principales

- 📡 Recibe eventos de movimiento, cruce de línea, intrusión, etc.  
- 🤖 Envía alertas automáticas a un chat o grupo de Telegram.  
- 🧠 Basado en Node.js, Express y `node-telegram-bot-api`.  
- ☁️ Desplegable fácilmente en Render.  
- 🔒 Variables de entorno seguras (`.env`).

---

## 🧩 Estructura del proyecto

dahua-bot/
├── .env # Variables de entorno (no subir a GitHub)
├── .gitignore
├── package.json
├── config.js
├── server.js # Servidor principal Express (endpoint /event)
├── telegramBot.js # Módulo de envío de alertas


---

## ⚙️ Instalación local

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/LautaroIntraub/dahua-bot.git
cd dahua-bot

2️⃣ Instalar dependencias
npm install

3️⃣ Crear archivo .env
TELEGRAM_TOKEN=tu_token_del_bot
TELEGRAM_CHAT_ID=tu_chat_id
PORT=3000
⚠️Para obtener tu CHAT_ID, hablale al bot y abrí:
https://api.telegram.org/botTU_TOKEN/getUpdates

▶️ Ejecución
npm start


🧑‍💻 Autor

Lautaro Intraub
💼 Desarrollador | Seguridad & Automatización
📍 Argentina
