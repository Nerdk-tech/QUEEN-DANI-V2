const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0pKbG16cmt0bUdpL0JYNnhOeW1yUklkTXZ0cUI1RVRiSHRqNEtwb3Azdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL2RFTlRmK25kakh1UER2YUFjS1d0Y2ZhYXU4c2VMMkF3T011aUF1QjAxdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXSkdKbjFRTjBGYkN4MzJVVUlFb2kvNGlMSXUzWU1UdXF3RXdObXdwVlY4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhYnRKaEpSMzU1Mnc2c3l4UTZWZjRFR0t4SThPQ0FpWHZWZTBJdXBIRm00PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklNd2xSYXVHMFZMcTlmSzFiai82YUVFVE1rLzRLelJrWnFIWHU1SVdmSE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5Ec3RQeUdlcmtNbEdtOFh2UUZiSldpcWZaeCs5eFREOWRlbTlvYVBVd1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUFIUGZIUGxyM2V1cXNZQnE3R3RxNlpiL01zWkFCNUROTmUvb1k0WU8xaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieXFSWXRZYTlLRFQ1VWZMRmR5N2JwaU1oK0FtYWpXb0dGNGxVRTNqc2NXWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlkySFcyT2NwTDZJM3lpYmsrWU5KcVk2emNGSTc3L0lIZUswcGVVOWtWNWFTZ3J4cW1lN2NLN2E1K3Fvc1pzSGp6cDNCSWN6OXQwV29SRG9iSzhzc2hnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTIsImFkdlNlY3JldEtleSI6ImxDeFNaSzkyL2p2VnMvbmtKUHlhSUNIU0ZIT205c1F2eHgvMlQ2ZXRDMDg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTM3NjU5MTI4ODhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNTkzRTYxODFEMjI0NUFCOUUwNUIzRUIyNzQxQzI0Q0UifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTMyNDAzOX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTM3NjU5MTI4ODhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRUZDNjgyM0JBODQ2NTRCMURFNjc5NDI5QjMxNUYzQTEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTMyNDAzOX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiOUpYTTNLRVYiLCJtZSI6eyJpZCI6IjkzNzY1OTEyODg4OjRAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI5NzU1MjMxMzYyNjgyMTo0QGxpZCIsIm5hbWUiOiJFbGxhMvCfkpcifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BxKzdwSUNFSUs5Z01VR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ii9NQWJzYzk3TXNpWEUwTW1wbzZiMDNKbVFSeGdYeE83aEtKcW9jTDkvR0k9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkpYNThWNnQ2eEhtalpURnNKWEp0R2JEa2pNVFJrRzJZZWJFWU5wbFJHT1hzUWJqeUhFZnlqa3RwTFNyWGFzeS9ac3h6RlVYdGhrSE53aUxMV1dsVUNnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJtTWRGTVE3ZnVhRU0vUkIyQ1BIbCtuSzhWbU9PUmNYZE94WWxHQ2hEVmtKNHkwRHdxWTBmcDBIbXpBVW1hQ2Ruemc2YllZaDJUd1B1K2tLN3BMcjdpZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkzNzY1OTEyODg4OjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZnpBRzdIUGV6TElseE5ESnFhT205Tnlaa0VjWUY4VHU0U2lhcUhDL2Z4aSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnUUF4QUEifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU1MzI0MDM3LCJsYXN0UHJvcEhhc2giOiIzZ1BVSmsiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUlwMSJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY QUEEN DANI-V2🤍*",
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
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/kkgd2r.png",
MENU_VIDEO_URL: process.env.MENU_VIDEO_URL || "https://files.catbox.moe/0bnxn4.mp4",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "𝒬𝓊𝑒𝑒𝓃 𝒟𝒶𝓃𝒾 𝒱2",
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
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/kkgd2r.png",
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
