import express from "express";
import bodyParser from "body-parser";
import { sendTelegramAlert } from "./telegramBot.js";
import { PORT } from "./config.js";

const app = express();
app.use(bodyParser.json());

// Endpoint donde Dahua manda los eventos
app.post("/event", async (req, res) => {
  try {
    console.log("Evento recibido:", req.body);

    // Ejemplo típico de evento Dahua
    const { Code, Action, Index } = req.body;
    const msg = `🚨 *Evento detectado*\n📷 Tipo: ${Code}\n🎬 Acción: ${Action}\n🎯 Canal: ${Index}\n🕒 ${new Date().toLocaleString("es-AR")}`;

    await sendTelegramAlert(msg);
    res.status(200).send("OK");
  } catch (err) {
    console.error("Error manejando evento:", err.message);
    res.status(500).send("Error");
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en puerto ${PORT}`);
  console.log(`📡 Endpoint listo: http://localhost:${PORT}/event`);
});
