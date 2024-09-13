global.owner = ['62857167372547']  
global.mods = ['62857167372547'] 
global.prems = ['62857167372547']
global.nameowner = 'ᴍʀ.x ✪'
global.numberowner = '62857167372547' 
global.mail = 'mr.x18052005@gmail.com' 
global.gc = 'https://chat.whatsapp.com/I2yYduKhrqo9RxwZcCTiTp'
global.instagram = 'https://instagram.com/madz.maa'
global.wm = '✅KAYNA BOT'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'Kayna bot | madz'
global.autobio = false // Set true untuk mengaktifkan autobio
global.maxwarn = '2' // Peringatan maksimum
global.versi = '2.0.0'

//INI WAJIB DI ISI!//
global.btc = 'raffxsukatobrut' 

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.lann = 'btzraffxzer'

global.APIs = {   
  btc: 'https://api.botcahx.eu.org'
}
global.APIKeys = { 
  'https://api.botcahx.eu.org': 'raffxsukatobrut' 
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
