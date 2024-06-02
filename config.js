const fs = require("fs");
const chalk = require("chalk");
//const fs = require('fs-extra')
//if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//to enable function - true
//to disable function - false
//
global.available = true;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = true;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = true;                 //make true to view statuses 


//
/*global.Owner = process.env.OWNER || "2347045174399";// Owner number
global.OwnerNumber = process.env.OWNER_NUMBER || "2347045174399" ;// Also owner number
global.ownertag = process.env.OWNER_TAG || "2347045174399";// Also owner number
global.sessID = process.env.sessID || ""; //Session ID here.
global.OwnerName = process.env.OWNER_NAME || "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";// Owner Name
global.BotName = "🐦Makino-md-v2";//Do not change 🥵
global.packname = process.env.PACKNAME || "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";//Sticker pack name.
global.author = "🐦Makino-md-v2 ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";//Do not change                            //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change or bot will not function.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.
*/
global.Owner = ["ANONYMOUS"];
global.OwnerNumber = ["2349137924240"];
global.ownertag = ["ANONYMOUS TAG"]; 
global.OwnerName =  "ANONYMOUS";
global.BotName = "🐦-md-v2";
global.packname = "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";                             //Do not change.
global.author = "🐦Makino md ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.sessID = process.env.sessID || "{"noiseKey":{"private":{"type":"Buffer","data":"YDDSDWNiBUEUaMVJWPdwgF4buIpXk4elRoCXuyNreVM="},"public":{"type":"Buffer","data":"hHi16eJDtpM1RMUhHryoORRSKtE820HB5V84CcDpjyc="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"2MnJV/udYSbhFcjW1fiCdign9qnrmGsKUlmdm8Ibkls="},"public":{"type":"Buffer","data":"tFEL739Mj5NoRRBBVTNoUb4epsTeAhFSo9OqvBlewT0="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"oKYDkgSBwKe3BgsbCVVnXQxNTl7UB1gk22iFi0HxHUo="},"public":{"type":"Buffer","data":"fEmhhNtIfR0D6gSeh7kWjdgLr4H5NPjoZ80WwNRI4kc="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"YDukaBAxWPAwgwyALyFbwbKSiQZoZVrmN1tCnoLi9EU="},"public":{"type":"Buffer","data":"fvD8PUx8Kv4lMEpGjD6QBoauaezwTt4RtvkLnsVUykc="}},"signature":{"type":"Buffer","data":"isn+dJXbgIHDKiBpf8McEYWkqP2liExxAZb83tApIrS+gau5o8ZHFgPLjLe3RN/o0DMwl1ZmS//Qw4nSabfxgA=="},"keyId":1},"registrationId":242,"advSecretKey":"Hq837cQIHhfLDjDCldPokCat6SlSoJbu62qSwPEaOoA=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"juNZ7k84QDG4UBDprjBH1A","phoneId":"81dabc8d-7dda-44e5-ad17-aeab45f0f489","identityId":{"type":"Buffer","data":"DyAQpXcbTuxTQg4FLctyJNdPdIU="},"registered":true,"backupToken":{"type":"Buffer","data":"uA9GH3IA2c97MdNvqbQ38ooDLHo="},"registration":{},"pairingCode":"BJXS1SZR","me":{"id":"2349137924240:81@s.whatsapp.net"},"account":{"details":"COO85ZIHEPPp8LIGGAUgACgA","accountSignatureKey":"QXOI498/h8tKo8udm54h0OkK8VIjq8JmJzXxojGvYCw=","accountSignature":"vlpHipDHLgdvZJ4cboTvxPSgJsRj/00BZu08m+r+HG4+vsTBHdGfKRI1d541s3+dAdmp1mGtuTaQSa4Huws4Bg==","deviceSignature":"Sf4oqiB/tr4aFFJ3/n6pWEGWBN9ffDTFvgdXNNSEqcOmfYG8Ag1lgthRcwVgv3GVmxMkkc9SAm08sDPoWb7rgA=="},"signalIdentities":[{"identifier":{"name":"2349137924240:81@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BUFziOPfP4fLSqPLnZueIdDpCvFSI6vCZic18aIxr2As"}}],"platform":"android","lastAccountSyncTimestamp":1717318913}"; //Session ID here.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.
//
global.sessionName = "session";                          //Do not change.


//
global.prefa = ["/"];
//process.env.PREFIX || "/";// Prefix                                 //Default prefix here.
global.openAiAPI = "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";


//
global.location = "Lagos, Nigeria";                   
global.reactmoji = "🐦";
global.themeemoji = "😏";
global.vidmenu = { url: 'https://tenor.com/view/jujutsu-kaisen0-yuta-okkotsu-gif-26767662' };
global.websitex = "https://github.com/anonphoenix007";
global.lolhuman = "KaysaS";


//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}

global.limitawal = {
  premium: "Infinity",
  free: 2,
  monayawal: 1000,
};

global.limitawal = {
  rakyat: "Infinity",
  free: 100,
};

global.APIs = {
  zenz: "https://zenzapis.xyz",
};
global.APIKeys = {
  "https://zenzapis.xyz": "5d1197db351b",
};
