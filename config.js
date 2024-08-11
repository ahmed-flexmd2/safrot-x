const fs = require('fs')
const chalk = require('chalk')



global.owner = ['201115618853']
global.NomeDoBot = `𝙎𝙖𝙛𝙧𝙤𝙩-𝘽𝙤𝙩`
global.premium = ['']
global.travaSend = '10'
global.packname = ''
global.author = ''
global.sessionName = ''
global.prefa = ['','!','.']
global.sp = '>'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Atualizado= '${__filename}'`))
	delete require.cache[file]
	require(file)
})
