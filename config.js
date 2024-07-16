
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "923072380380";
global.owner = process.env.OWNER_NUMBER || "923072380380";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0pTZHV5NDl3L1VPM2NLQnM5YU9lblJ5ZjRRU21DbWt1cUE4bHM0TXZWYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicTR1ZWloaTdvRzlnNnRhaUFCYjJJWFNOZlRTcHl0RXlEck5iZmVhN0JqMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBQ1NZQlNHajNOL0QrbFhnVkM5R0Y2ZzhBaldKc0xkdE1pOHhEY25tRm1NPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwZjhmL3B4NkxGY3B1WTZQQmJMajQ4RW9PWGRYWUVDc3FQRlRTMG5tRTA4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktDVVh4SXZkaHdQV21Bb3VWQVZXYWdCMXdBWjV3U1RWSXZ0d3RkQWVrV0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imp5WHBxR0tsRk1VK0FiYmkzZVVQeFlBR0FvaHgxSDRXOEpqdDdUUHVPQms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU5tbmJ3YjViakE1Uzh1enp4NGVxTTNuNU52UW91WGE4eGUyemxpazVXQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZmJDdmk2UytadHpPTm5na3I0cjh3K1JiNTdaUnZKOVNhQjBQZjROZzlFST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImExS0JLK0phMm5BRGFhV01HS2tUajFaZG5Wbmp0aEkrQW5WSWRqUmNWZHFiTDQ0eWY4L3VSejVTY0pISlZNU1phb3dtS0FxOFRtRGg0OW5rTWxTM0RRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ5LCJhZHZTZWNyZXRLZXkiOiJNRk56S3lHeHVEdUdKQ1hndGx2SDRpdFRjRXdodDU5a05MYjljT0xZeGcwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiItUHllVFc1bFJGU2xnMmJLTmZ4MWtRIiwicGhvbmVJZCI6IjY3ODFkZjE3LWEzZDQtNGJhMC05NDE0LTBmODBhODMxYTdmNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFaVJiNWE0aHJJdnB2NFFBamQ5Smt5aUMvWWc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS1ZlbFZlUkI1alkxWkEzUm15OGZxOXRkMDFzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlYxNURKNE5EIiwibWUiOnsiaWQiOiIyNTQ3OTE0MTM4NTE6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJLaW5ncGluIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOeTJoK1lDRVBPMDI3UUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJoTHprT2YyN1BqTU5qY1ltTnltVzJJeTMxUmtWRmFJK00reGFpVWd4V0NrPSIsImFjY291bnRTaWduYXR1cmUiOiI2MnVuVDVmZGZlSSt3MXIwMEY2Z3h3RTRYRHZ5UUhvS1RRMkxvTnpmYSs2MHJ2WXhxcnorN21jSG1mVEl6ODQ0SktXa3VtZ1czaHFUZmRsVkplN1JBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUit1cktLQVZjS1hmWnhVSGxyMVB3MFcwV0FURjNlRndzUzdDOG80b1hkbTBCSVJvQ0IreUp4QTRSL1ZGSGFYeFBhemtsRktTb0NzVGM4WUZldndEQkE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3OTE0MTM4NTE6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZUzg1RG45dXo0ekRZM0dKamNwbHRpTXQ5VVpGUldpUGpQc1dvbElNVmdwIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxMTYyMzY4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUx6TiJ9" //Make sure session id starts with Byte;;;
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "BYTE-MD",
  ownername: process.env.OWNER_NAME || "Hamza",
  errorChat: process.env.ERROR_CHAT || "923072380380",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
