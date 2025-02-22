//my secript by @deltatech 𝐕𝟏6
//not sale this script

require("./database/module")

//GLOBAL PAYMENT
global.storename = "𝗥𝗶𝘆𝗮𝗻𝗗𝗲𝘃𝗥𝘆𝘂𝘅𝗶🐉"
global.dana = "chat admin"
global.qris = "chat admin"


// GLOBAL SETTING
global.owner = "6282123177848"
global.namabot = "𝗗𝗲𝗹𝘁𝗮𝗥𝗬𝘂𝗫𝗶𝗩𝟭𝟲🐉"
global.nomorbot = "6287825120566"
global.nameCreator = "𝗥𝗶𝘆𝗮𝗻𝗗𝗲𝘃𝗥𝘆𝘂𝘅𝗶🐉"
global.linkyt = "https://whatsapp.com/channel/0029Vb0OAGQJ93wV18eWMG2i"
global.autoJoin = false
global.antilink = true
global.versisc = '30'

// DELAY JPM
global.delayjpm = 5500



//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://pomf2.lain.la/f/y9gjy0sz.jpg'
global.isLink = "https://whatsapp.com/channel/0029Vb0OAGQJ93wV18eWMG2i"
global.packname = "𝗥𝗶𝘆𝗮𝗻𝗗𝗲𝘃𝗥𝘆𝘂𝘅𝗶🐉"
global.author = "ཀ͡༑𝗥𝗶𝘆𝗮𝗻𝗗𝗲𝘃𝗥𝘆𝘂𝘅𝗶🐉"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})