import TelegramBot from "node-telegram-bot-api";
import { TELEGRAM_TOKEN, TELEGRAM_CHAT_ID } from "./config.js";

const bot = new TelegramBot(TELEGRAM_TOKEN, { polling: false });
/**
 * Envía una alerta a Telegram (texto o imagen)
 */
export const sendTelegramAlert = async (msg, imageUrl = null) => {
  try {
    if (imageUrl) {
      await bot.sendPhoto(TELEGRAM_CHAT_ID, imageUrl, { caption: msg });
      console.log("📸 Alerta con imagen enviada a Telegram");
    } else {
      await bot.sendMessage(TELEGRAM_CHAT_ID, msg);
      console.log("📩 Alerta enviada a Telegram");
    }
  } catch (err) {
    console.error("❌ Error enviando alerta a Telegram:", err.message);
  }
};

console.log("🤖 Bot de Telegram listo para enviar alertas");
