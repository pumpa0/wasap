const { WAConnection, Browsers } = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const fs = require("fs-extra")
const figlet = require('figlet')
const { uncache, nocache } = require('./lib/loader')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const welcome = require('./message/group')
baterai = 'unknown'
charging = 'unknown'

//nocache
require('./dha.js')
nocache('../dha.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'cyan'), 'File is updated!'))
require('./message/group.js')
nocache('../message/group.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))

const starts = async (dha = new WAConnection()) => {
	dha.logger.level = 'warn'
	console.log(color(figlet.textSync('SHERLYNN BOTZ V2', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'cyan'))
	console.log(color('[SOURCE CODE INI DIJAGA DAN DI LINDUNGI OLEH Rendy\n\n', 'orange'), color('\n======TERIMKASIH BANYAK KEPADA======\n•MHANKBARBAR\n•NINO\n•IKYADS\n•Rendy\n•DAFFA PATNER SAYA\n•COPAS TEAM\n•PENYEDIA APIKEY\n•Ndyie Botz\n•SELURUH SUBSCRIBERKU\n•Ndyie Botz', 'yellow'))
	console.log(color('\n\nJANGAN DI JUAL ULANG BRO😑\nKALAU ADA YG MINTA SURUH CHAT ©Rendy😅\nWA Ndyie Botz 6283818744065😗', 'pink'))
	dha.browserDescription = ["SHERLYNN BOTZ", "Chrome", "3.0.0"];

	// Menunggu QR
	dha.on('qr', () => {
		console.log(color('[', 'pink'), color('!', 'red'), color(']', 'pink'), color('SCANLAH BROKAN LU OWNER GUA SEKARANG'))
	})

	// Menghubungkan
	fs.existsSync(`./${setting.sessionName}.json`) && dha.loadAuthInfo(`./${setting.sessionName}.json`)
	dha.on('connecting', () => {
		console.log(color('[ SHERLYNN ]', 'purple'), color('PROSES PENYAMBUNGAN'));
	})
const spinner = { 
  "interval": 120,
  "frames": [
    "R",
    "Re",
    "Ren",
    "Rend",
    "Rendy",
    "Rendy G",
    "Rendy GA",
    "Rendy GAN",
    "Rendy GANT",
    "Rendy GANTE",
    "Rendy GANTEN",
    "Rendy GANTENG",
    "Rendy GANTENG B",
    "Rendy GANTENG BA",
    "Rendy GANTENG BAN",
    "Rendy GANTENG BANG",
    "Rendy GANTENG BANGE",
    "Rendy GANTENG BANGET",
    "Rendy GANTENG BANGET A",
    "Rendy GANTENG BANGET AN",
    "Rendy GANTENG BANGET ANJ",
    "Rendy GANTENG BANGET ANJI",
    "Rendy GANTENG BANGET ANJIR",
    "Rendy GANTENG BANGET ANJIR, B",
    "Rendy GANTENG BANGET ANJIR, BT",
    "Rendy GANTENG BANGET ANJIR, BTW",
    "Rendy GANTENG BANGET ANJIR, BTW J",
    "Rendy GANTENG BANGET ANJIR, BTW JA",
    "Rendy GANTENG BANGET ANJIR, BTW JAN",
    "Rendy GANTENG BANGET ANJIR, BTW JANG",
    "Rendy GANTENG BANGET ANJIR, BTW JANGA",
    "Rendy GANTENG BANGET ANJIR, BTW JANGAN",
    "Rendy GANTENG BANGET ANJIR, BTW JANGAN J",
    "Rendy GANTENG BANGET ANJIR, BTW JANGAN JU",
    "Rendy GANTENG BANGET ANJIR, BTW JANGAN JUA",
    "Rendy GANTENG BANGET ANJIR, BTW JANGAN JUAL",
    "Rendy GANTENG BANGET ANJIR, BTW JANGAN JUAL S",
    "Rendy GANTENG BANGET ANJIR, BTW JANGAN JUAL SC",
    "Rendy GANTENG BANGET ANJIR, BTW JANGAN JUAL SC I",
    "Rendy GANTENG BANGET ANJIR, BTW JANGAN JUAL SC IN",
    "Rendy GANTENG BANGET ANJIR, BTW JANGAN JUAL SC INI",
    "Rendy GANTENG BANGET ANJIR, BTW JANGAN JUAL SC INI C",
    "Rendy GANTENG BANGET ANJIR, BTW JANGAN JUAL SC INI CO",
    "Rendy GANTENG BANGET ANJIR, BTW JANGAN JUAL SC INI COK"
  ]}

	//connect
	dha.on('open', () => {
		console.log(color('[ SHERLYNN ]', 'purple'), color('BOT SUDAH AKTIF SELAMAT MENGGUNAKAN'));
	})

	// session
	await dha.connect({
		timeoutMs: 30 * 1000
	})
	fs.writeFileSync(`./${setting.sessionName}.json`, JSON.stringify(dha.base64EncodedAuthInfo(), null, '\t'))

	// Baterai
	dha.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	dha.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})

	// welcome
	dha.on('group-participants-update', async (anu) => {
		await welcome(dha, anu)
	})

	dha.on('chat-update', async (message) => {
		require('./dha.js')(dha, message)
	})
}

starts()