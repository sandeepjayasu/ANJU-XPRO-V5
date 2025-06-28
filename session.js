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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU05b1FCQ2lqQVRuL3d5TUkzdldnL3lBbjFZVEk2K3Ryekdqd21qN3ZFQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiODFsRFVRdzk4SElsQ0orQTRJaTRRVksxUkVrc1FNT0NGT2trbnJPUFRrTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1SGw3S3lNMFBaU1hPUXBiRVBkeGI2VG5NOTFKSm9ZS2V0SU55WWp3UzFRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzZThScWs4ajNJeGhIRzQzMm85OERXM2dQdk40bzVOWUpNUXYxYlRvRnpjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdIbnZ0WTBXanI1aEVMbDYvMkh6UUZXL2ptY2NmS0YwZW44MTgwbTFERzQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVOb1FCVk00NjBIVitBODl5a1ZoME1SUVRvV2VrMHJkVTdEdkVWbzF5d0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUhTNlYvbnc4MFNuNHYydHhRVlF0ZDRPV0RtOWYzd0RGblFHWm1sUXZWWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUmpGcTdMdnZhOHQxNzJQczJ5VnJ2NkpJTHJ0L0RSLytwSkJSTVlVdnJEUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZIcFl2RUMzZ2NNUzFKNThPOUQ2VHBJZVlMZUN4WDZrTDZnaENrTGFsczNTS21vTEhXMGFSWWRnKzNvUXkrd1ZqUEoyVzI3YTF1OXk0VGtDZ1AxTmdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ4LCJhZHZTZWNyZXRLZXkiOiJZZlgveTU1S1RZYzN2OThvZ3pEVnY3VWdaRmhFRlV2dzFZckpyZnF4WUVFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJGdGY4clBTMFRhYVNSSnkyVVVWS3pBIiwicGhvbmVJZCI6ImI5NTJlZjA4LTQ1ZjgtNDhhNS1iNmE3LTM5MzFhMWI2NTRkNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUWWJTeDQrZkFGVWkrczFDZGhxVUtvbURndFE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSGZZYlBjc0FwQ0VPekx3dWtQUG1KNU5qS2FNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjMxTERKWTRBIiwibWUiOnsiaWQiOiI5NDc4NTkzMDcxNzo4MkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE0OTgwNDc1MTUzMjE0MDo4MkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0s2dmd1a0ZFSWF0Z01NR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjYrL2lPQUhzM3F3eFZuanpDdlZLcS9IWVQwUHBaYnBtZVY2RlREYVQxRVk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjY0SmtJZGEzYStud2FiWlBTTWpZS1ZsTDgrVkNLVzg3cU5XZW9uQ0dTaWlVRnFPY2xXZWlBWTJsUDZZSkQ0SGE4Z2NYRVAvcEJFckszVW95cWkwRkRBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJuQ2dnUHZDdEoyeU1wNXpYR2pncnpSR1l4R21NTnZ0dStsMk85TitZRnF6M1NSWGwvQzEyWXVlNnc5aFVjYmFaTWVKdXJvZ21za2xVWGY1aDNpOEdqZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzg1OTMwNzE3OjgyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmV2djRqZ0I3TjZzTVZaNDh3cjFTcXZ4MkU5RDZXVzZabmxlaFV3Mms5UkcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MTEyNzcwMCwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGQm8ifQ==",
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
