//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0lhMHM5WVR3TkZLSkhYUlBUcGg5U3lYaURZMGRZbFlPVWMwU3FQVGEwcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN0JvTDhaMkxkUDF3Wk90SXY1RWo3MFVrRUs4QTN1K0IxeVIyL2dpbW5FMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZRkw0T0YyTnpRSkJDQ2JobXgwcVpZS1JHL0FNWTF0U2VJTm9TQVFFTFhJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3OHRheTEzdE9oemZZVUFRUjJXVjM1RENaZ2pKNUxxRGJIOUxOdHlyYWtRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVJVjNjcC9yWUNwMXF3MU5xMit0Ky8yUTJoY0ZET0ZTTWZIQWxmaVV6RWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNiTWJycVZ5d0thQ1pQcjFGRGtpU2x6M0x4NzZFVzUzcTNrQ3RHaXFsVTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0d6SnNNL2lqeGdwTTJXQ0RkK2tBYlNUZWNTOUlnRGI5cHBNY3pPRGZYST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRGJGb1dpU2hvQkFtblZOQWF4cVl2ME1YSGRpTGZML3prOGtEdWpwNzJrcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImI4ZjQ2Y1MxUUtkVGZ6QVVFQVN6ck1HUkp5ZFI0NWRBR3ZVNFRYZTZlSEI5bEQvVlhCOS9hRGtqQ2J3QVoyand1aGVONTgydlBuT1JlcXlpcGIvNUJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc3LCJhZHZTZWNyZXRLZXkiOiJBWHhMMWkyYTBzQnQ2b3dOTFE1V2JlUXc0eEszOE9jcGFvQ0xlREMwTjlrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJISmhydkhPVFJkaWVMRkVyNVRwWXNnIiwicGhvbmVJZCI6IjMwYTMwNGU5LTlmYzAtNDhmNy1iNGFiLTJjNmNlN2Y4MjZkMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3dFRZNjExY3hQUllWc0FvVkNuUDR2ODViRjA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUNJQzJwTnNJOUloSFFoQzkzaW00d0hkVjVVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkRIUjFNTkNHIiwibWUiOnsiaWQiOiI5NDc4NTkzMDcxNzo5MkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE0OTgwNDc1MTUzMjE0MDo5MkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0srdmd1a0ZFTG1LaE1NR0dBb2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjYrL2lPQUhzM3F3eFZuanpDdlZLcS9IWVQwUHBaYnBtZVY2RlREYVQxRVk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkFtbW9ZbGdaWExQenh1aWdWQnhlNWhUdU85eldIUDNtWTg2RGxRU0pXa2RDWnhKZDRucEdNTHRZeVZIWUhtZXorNHFNMVFRc1NralVHemhjNVZsY0F3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJDZUlJZFp3OXBiU1YxVm5GMXRsY2hyanM1SVpMaE5udWR2eUREbjJhZDZRTS83MDJTUkhXUFlaOGNNc2U2a2ZMZWVRTHE5VEpzZmVRK05rOGdMSlpDUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzg1OTMwNzE3OjkyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmV2djRqZ0I3TjZzTVZaNDh3cjFTcXZ4MkU5RDZXVzZabmxlaFV3Mms5UkcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MTE4ODgwNiwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGQm8ifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94785930717",
  PASSWORD: 
    process.env.PASSWORD || "Sa1324@$#%",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
