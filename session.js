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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUdxdENZSWlPb2hhRm9LQXhaL1crd2JDZCtibjBpUGhhaDg1T0ZZYUwxRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidkwvTEpkN2MvMXpZN0FGbFFvRlFEZWx4d2k1aXFsZ1ovWEt3aHFxK2dqST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDSjhLRnRTZFAwV0l0QzhBU1FhUGlnVXQ4Y2syZHNEVlR3dDBKNFNTcUhRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFSW1CdlBqWEJJZnZyb3NIRTRhM3ZzL1B2dDlZanpWVm9TdkJMTTVqWHlzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtHN0ZISVpqMC9iQWpxVEhFcEluaCtSM0hPWVlHb3BBYVhrMU9HME5PVnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkQ4cHNKdWRQU2xnbVA5K0Y3aTdQTXRjV0tFV0pRVDMrNWI5WU1ndDJRRms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUVjM25YZHZ4UkdzUUpXd0VHdm1PS1ZaY0JLVzRZWHRIKzVpU2RXOHRGWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV21Zc3l0dWZCakQzQ1FCeXRXOGRnUHJFNzYyNitnS0lvbWgyVDlJeGlDOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZ0dXJ4ZzUza3lXbUE2U0hqRmUwUU5DTEVET0ZJSENybG53R3hpbTkvNG56b3VYL3JWVGpxZkJIMTBEWEFFWE80ZGVnUElKMkxSczZpVmZLM2V2QmdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ0LCJhZHZTZWNyZXRLZXkiOiJzdW9wSDFkdEtCRDc2c2wzOUczYytXTEV0RlhONWhMWFVkdTNZTVBub1M0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJJZDMtaEtsNVJqcXk0eHNZZy1mYVdnIiwicGhvbmVJZCI6ImJjZWNlZTc0LWZmMDQtNDNlNy04Zjk1LTI0OTU1MDE5MDZmZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrTTdyZVRjOGhJODdFRUpYTFBQNUpYdEV4U009In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVjlxUGdNbmp2WUFidkJBOTQ5WllwNkhqVldRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkJGMzhWQVBaIiwibWUiOnsiaWQiOiI5NDc2OTI0Nzc5MTo3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlNOIFdpY2hlciIsImxpZCI6IjI0NjM4OTk0MjU2Mjk2NTo3QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSlhiL3NRREVOYU5tOE1HR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoickF1Y1RqSnRLS3RLakpjZ0FsR3RPdWxNb1ZwTHUvR0dYNVF0OElJOTZCMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiakc0dzhkNkFRbFJjSlpnVGUweVVhV0VEbDJFWFJldzNCVnlNaUtNSHo0Y1RMc0ZxR1M4amVPZGVLMSszWlpuUmt0SDBUcE9FTUxsdWMvaVBrdHphREE9PSIsImRldmljZVNpZ25hdHVyZSI6Imt1Y0VtWlJuWVZNWlZ5bW4yaW9Jd1ViSnE1dEovR3BTMzZ5clFGK3g5blNzSWZRaFhUY2paaFBPRkJhQ0ZtQVRScEpBbmtPcXJBdklvaU03WHU5Q2lRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjkyNDc3OTE6N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhd0xuRTR5YlNpclNveVhJQUpSclRycFRLRmFTN3Z4aGwrVUxmQ0NQZWdkIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTE1NjYwNTEsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR0JXIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "",
  PASSWORD: 
    process.env.PASSWORD || "Sa1324@$#%",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
