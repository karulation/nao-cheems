//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +60177637943
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ytname = "YouTube: Karulation" //ur yt chanel name
global.socialm = "Instagram/TikTok : Karulation" //ur github or insta name
global.location = "Kuala Lumpur, Malaysia" //ur location

//new
global.botname = 'Nao Shion' //ur bot name
global.ownernumber = '60177637943' //ur owner number
global.ownername = 'Karu Shion' //ur owner name
global.websitex = "https://youtu.be/mu5m6aB6P5k"
global.wagc = "https://chat.whatsapp.com/I66bF7yF6Yr0D2Q34EMm3f"
global.themeemoji = '🪀'
global.wm = "Karulation"
global.botscript = 'https://chat.whatsapp.com/I66bF7yF6Yr0D2Q34EMm3f' //script link
global.packname = "Sticker By"
global.author = "Karu Shion\n\n+60177637943"
global.creator = "60177637943@s.whatsapp.net"
global.xprefix = '/'
global.premium = ["60177637943"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '-' //set autoblock country code
global.antiforeignnumber = '-' //set anti foreign number country code
global.welcome = true //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = true //show promote/demote message
global.groupevent = true //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Do you want to get bonk?',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
