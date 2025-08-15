const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic05MVlJjeHVrRTgvYm9FMTlXVG1JQXJ2Mm0zMDdpUmswRkdFUXZzV3gzND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWFLbEg0Kzg1dkZ2d1RlMTZRdnh2cUxwbnNmMUFkcTN3WWhNdEEyejZuaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4UGU0dC8vR2RtWVhkQk1RcjUrQXU0cGVZTDNkdmdDQXVTRC9XMVFCZ1VjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKbGZxdW5EYmh0a1Y2eWd4WkszL3E3YmJRVjRvYVl4VE9WNDV2Q1VlUGxvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVKSGdjMDVUVmxWS3h0TWpvdm5hVkVTVmtGN2R0TVhmZzBXZHdnck5UR0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iktza3BnUGxiK3hCMmFkOGxWblBEeDFzUGF6bUZsbHduMTB5dk4ycFRJa289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkRzS3oySVpGSmVob0M1MGhlM0t1YTRnRXAwMWswZVo3OGszWElick4wYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieGhLOGZqbGVkTUtqTVlrMTZVV0FldDVjaXVRTDZiQTYza1hnQkJJcUdtST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBaOE9BRkVBdm5UMUl6aTh6aXcxWEFGa0xkMHJnK2p3TWlRcmtMbUNBMWlyZ1B2d1RVcmVTRWVyaEdDb1pSRVh3aHlQN3JIVTk0L1RSbThEeEpCNGpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAyLCJhZHZTZWNyZXRLZXkiOiJvS0UyZDdNN0JrYS9lRHBrbGdvL3NDVEY1NVJhNWpJMk9lQ25PV0dRZldZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJFS1NaMjJGVyIsIm1lIjp7ImlkIjoiOTM3NjU5MTI4ODg6M0BzLndoYXRzYXBwLm5ldCIsImxpZCI6Ijk3NTUyMzEzNjI2ODIxOjNAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQbSs3cElDRUxmUy9zUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIvTUFic2M5N01zaVhFME1tcG82YjAzSm1RUnhnWHhPN2hLSnFvY0w5L0dJPSIsImFjY291bnRTaWduYXR1cmUiOiI4TjViTVBja3BJbElIL3d2OGxNbklIdUFReDNTczA0VnR0MWU5S042SmN6TmZTLzdnbUoyZEhJRzN1S0tHeWhROEMrREdXenpWbUludklwNm5PVDdBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiaVRMV1owaVpzdjRQNkZNUFZMd1BvMzdQWlk3cWJTWDRnZ09EczNReU5WSEJZRVJBbm1iQnpISDhRMDU0YmUyYUZ6YWZvU3dVZFlPMjVJcmxtT3MrakE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5Mzc2NTkxMjg4ODozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZ6QUc3SFBlekxJbHhOREpxYU9tOU55WmtFY1lGOFR1NFNpYXFIQy9meGkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ1FBeEFBIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTI5NDAxMCwibGFzdFByb3BIYXNoIjoiM2dQVUprIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY QUEEN DANI-V2 🤍*",
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
BOT_NAME: process.env.BOT_NAME || "𝒬𝓊𝑒𝑒𝓃 𝒟𝒶𝓃𝒾 𝒱2  ",
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
LIVE_MSG: process.env.LIVE_MSG || "> i'm Dami's wifee🥹",
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
