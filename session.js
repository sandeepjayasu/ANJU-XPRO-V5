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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUMvSmk1cUdzNEJVU0g4aXEvWDIvYmVuU28rWjdCT0hFcjJvTVBJTkQyND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT3V1OHZrUzV2QWNDVlhwTUo5QkRNOVB5bUVZUjBGQ3U1Q0NDZVg4Y3ZUOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjRG9VVnNUOU4vMXV4TEJyTURDbGFsRWlndEc4VU9TTU5xZnZqYVpVcUc0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJITEhQazBrQkpQN3hrSWhoT3BGajB1eitGRkkramJLbUxLRE05S2ZOZlZBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndCc3RWcUFodmZlbUZtVlZXRjE3WUwwU2EyM1JTUGIrT0hEM1lTd0s0Rms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InE5RXlnOG5aZkp3bG80ZTcwVDd0ZnBGZzUwQ2hHWVVPeDRMMnJFT3VPRlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia010dEgreTlMNHZmVHR5TmhVeGYvWkkvcktTbUxiVVlaYUVmeHlETzVFST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSHZuck9ZN2p0V3RZWVl5eTRxUFJ5Unh5bXdNSjFpRmxlanZTUXZNVENoUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRiekdjeW1iY3lXZjdOYjdVM0R2UGlsbDgwRTJxaEFSVjdxclN6ZUtEMlZBQkpIUzQvTk1HUzRjak9oenFxYVk4YWNYQkNqSkF1dmZtNE5uR1NKNWh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM1LCJhZHZTZWNyZXRLZXkiOiJ3K1NBb3BaSlVNZzc5ZHc1ek1UUzRFVDFlMm5NODJPK0tHRVBMN0pVSFhBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJEcm1OZjNqZ1FCYXYxUFBQUVZfVXRnIiwicGhvbmVJZCI6IjkwZDI5MGNlLTk1ZDEtNDcyNC04Y2Y1LWM0MDIyYjZiYzA4NiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSQXFPUVJELytTanJEVGdjY1I3R1FPWVhmcEE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQjMyaEFwM1NSR0hkL1hmcWxhdzlIZkVqTnJFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlE3UjlHNkdSIiwibWUiOnsiaWQiOiI5NDc2OTI0Nzc5MTo0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlNOIFdpY2hlciIsImxpZCI6IjI0NjM4OTk0MjU2Mjk2NTo0QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSlRiL3NRREVKQ1ZsY01HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoickF1Y1RqSnRLS3RLakpjZ0FsR3RPdWxNb1ZwTHUvR0dYNVF0OElJOTZCMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiOXhBNzc5VmdLUXRvRkkvVzQ5OTJpYlE4WldleDRxdHdnMFVJZXpacHBKQU0vcGtCaEM5ZDFTWU16VFdKMXhuQkZaUmo3T0dUS05XZzlxRmVjdzhpQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6IkFqYU16b0lhMDRqclRZZTd2RFJveVp0cUd5Mm9uVHFFTCtSSWdYTHZENG95K1hpSkN6eFd0YWREVHRldmowU3pjMXZ4OGxWMDdHeStNcE52SUgvMmd3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjkyNDc3OTE6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhd0xuRTR5YlNpclNveVhJQUpSclRycFRLRmFTN3Z4aGwrVUxmQ0NQZWdkIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTE0Njg3MDIsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRysvIn0=",
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
