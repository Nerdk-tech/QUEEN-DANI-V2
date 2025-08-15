const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT1BNZUlua2lkZ3FjM0JLTENBcUhUVEJXOVdVY091c0NKTFFIdHlOUUlHOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRWp5MVEzeTI3S1cvVlY2Z01xQmk2ejVnNDVxbUtEZlY2WU9GZlZQN29GZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjSi9XRDdudmliWk1BbCs2allzSkd1aFhmTWNXS2I0TFVkaEZjK0d3bVVRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxaE1TZG9Ic2I4SjlmNUlFcjBaaFZzdlBjUXRwUWd1WjgvU0hlZTdxQlNjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNGQ1pQY1d0OWZpKzBEN0xuUXJmbXlxOXA4blZTcm4vLzJHSXozNTR6MjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBWZU1LSzJzZUh6MEQ2aldiNzhyUHdMejlnNG1kSG9BczczLzZ2OHg4RW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0NBRWpRL0FIU0E0WlZOU1ZBdDBBQmQ0Q2U1ekNmc05XRXVhUGtPVEVrST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieEM1dUIzRXE1akVGM29CdkMvK1BlaWI5L2ZuVGQxR1NJMlZRbldQMTAyRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFoU3JDb3lkUGttSy8xelZwTlVXRmhZQVh4bXhWdWNxbnhrU2t6bE1McDFlQk95SmlvTmZDSEhtOElBUFJjWXl2NnQzOHlmY0JITE8xTExvTk51dUJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OCwiYWR2U2VjcmV0S2V5IjoiKzF0YWcxZWdUT1Jhem1jdUFYSVppU0RrQ2x2MzIzWWx2WTNJeHdOR2pyND0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiI5Mzc2NTkxMjg4OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1NDNGNzQwRUU4RDM5M0YyRDA1RTBFOTdBNzk1MTlFNyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU1MjkzMzE0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5Mzc2NTkxMjg4OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxMEFGQzdDMENFMERBQUEzRTU3OERFNEYyNTgzQzA0MiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU1MjkzMzE0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiIzVjFYTVA5NCIsIm1lIjp7ImlkIjoiOTM3NjU5MTI4ODg6MkBzLndoYXRzYXBwLm5ldCIsImxpZCI6Ijk3NTUyMzEzNjI2ODIxOjJAbGlkIiwibmFtZSI6IkVsbGEy8J+SlyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUGkrN3BJQ0VQdk0vc1FHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiL01BYnNjOTdNc2lYRTBNbXBvNmIwM0ptUVJ4Z1h4TzdoS0pxb2NMOS9HST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQS8zOUd3aFMyZm1hcUtDSHN3TFdqTm80K0pyai95NFdBVWVwMHdvUHZTSkNIblEvSG5Na2dGblZVdVRpSjZyTmdJMjhHZ0FPU3pWSHdvVzd2K3k3Q2c9PSIsImRldmljZVNpZ25hdHVyZSI6IitNZjVjRlZlWitrRVRYTG9lMnl6MkxtcVJMVEVHeCt1Y0VBeU43NUx5dDEwWDFWampDekVFVVkyREZzTXlnTTNwRmdZSkVpOUN4UnNZOXMzcWM2Y0J3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTM3NjU5MTI4ODg6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmekFHN0hQZXpMSWx4TkRKcWFPbTlOeVprRWNZRjhUdTRTaWFxSEMvZnhpIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdRQXhBQSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTUyOTMzMTIsImxhc3RQcm9wSGFzaCI6IjNnUFVKayIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQzllIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY QUEEN DANI-MD 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/tawf5r.png",
MENU_VIDEO_URL: process.env.MENU_VIDEO_URL || "https://files.catbox.moe/0bnxn4.mp4",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ⵕUEEṈ-DȺṈƗ-MD  ",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "danixdami md",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "2348054671458",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*DAMĪNĪ*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Damini and his wife🌚*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/tawf5r.png",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> i'm Dami's wifee💅",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "2348054671458",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
