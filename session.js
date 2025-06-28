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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUlCU2Q1ajNnM0V3M0F0eVUrZm41NitDelBwN1l1NDFJZ0NqV2JSbjIwZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaXVld0ZWUkhPemt1aGRTbm9rK1RiRWJLNTRzU1JvdVlHTEJzQi9RaUUyUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3R2VVQnlCVmV2TkEvV2hYZnpRUE83L0s4d3VyZ3l2ekNmdzQwY1ZjUm5JPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQdXY3dThFNVhNMTN2c2hEYXh5c3E0cnlDK1YvOWwycVNKZWUveEhEcWlFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVIYUdRaXluYVpNaVFqR2NPblVZVGlvZ25OV2xUTXUwQlJhSGFPS1JhRTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImE0VUZ3M05Ma25VeWtQRHYySk0zcUNlK3U4TmRPN2FpcXBVYXd0MTdrVE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0srN1lIVnlRQmFoekU5dGpMa08wWTY5dGE0UWJGanp3bTRMR0NGRHoyTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiemJrbWsxWkptVlFDVnRqNlRUd0VmcTUxNW5YR1VFYTZBdldTWGplZXVVdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InQvc2IzcXZFQVdvZ0pnNDR1Rmt6UGFZTHJoOE5yakRkdjZuQlNPd2J2d2RiZjVMSVR0OWNQemJJekdKSUpQT2t1b1VYUm9JOWRJWk56SGZlY1Z1QWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAwLCJhZHZTZWNyZXRLZXkiOiJCVWZrTFRld1lYcUM0OGVwRDRhcXI5ZnBrRmRiK1pKckR0blJhWlJneTA4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJiemhjd2xhOVNKZXFDTUo0aE5ocGtnIiwicGhvbmVJZCI6IjkyNzNmNWMyLTRhMTctNDdhZC1iYjMyLTlkOWNhMDY0NzdhZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvRnNxQ3NIUW1jRlBOR3pyUUdBRGpyWTU1WHc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVzRXanR2bUdxdkRWeStEbDlWTEpPQkxFbERRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkhXSFNQSktUIiwibWUiOnsiaWQiOiI5NDc4NTkzMDcxNzo4M0BzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE0OTgwNDc1MTUzMjE0MDo4M0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0srdmd1a0ZFUEMyZ01NR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjYrL2lPQUhzM3F3eFZuanpDdlZLcS9IWVQwUHBaYnBtZVY2RlREYVQxRVk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjY3RVU5aWhqbVYrSEFlUlhWbDRHUlR0QnVMMVliZ1A2bEdKMHJzMjh3T2Y4YjlidHFvQXBySnBndU1ZQ2VxamlyM1VndEpqSzE4T0t1d1dxaFdOWEJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJOWEJJYjg4ei9LS0M2WHJFeE9INVJvVGpNYi9NV3pTeC9sYWpjaFBEMW80RXd5UGozczZtU0o3cG1ocjVVdkxZY2Vtek1xMkkycHBlNmowOFFpMW9ndz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzg1OTMwNzE3OjgzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmV2djRqZ0I3TjZzTVZaNDh3cjFTcXZ4MkU5RDZXVzZabmxlaFV3Mms5UkcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MTEyODk1NywibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGQm8ifQ==",
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
