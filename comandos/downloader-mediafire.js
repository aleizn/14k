import fs from 'fs'
import { mediafiredl } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `*[βππππβ] πΈπ½πΆππ΄ππ΄ ππ½ π΄π½π»π°π²π΄ ππ°π»πΈπ³πΎ π³π΄ πΌπ΄π³πΈπ°π΅πΈππ΄, π΄πΉπ΄πΌπΏπ»πΎ: ${usedPrefix + command} https://www.mediafire.com/file/xo6msugx6u2fhlw/1.19.30.apk/file*`
try {
let res = await mediafiredl(args[0])
let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
let caption = `
β π *NOMBRE:* ${filename}
β π¦ *PESO:* ${filesizeH}
β π° *TIPO:* ${ext}

*β° ENVIANDO ARCHIVO, POR FAVOR ESPERE. . . .* 
`.trim()
conn.reply(m.chat, caption, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'π³π΄ππ²π°ππΆπ°π π³π΄ πΌπ΄π³πΈπ°π΅πΈππ΄',
body: 'π©π π«πΆπΉπΉπ¨π»-π©πΆπ»-π΄π«',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/DIEGO-OFC/DORRAT-BOT-MD`}}})
conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
} catch (e) {
m.reply('*[β] ERROR, INTENTA DE NUEVO*\n\n*- COMPRUEBA QUE EL ENLACE SEA IGUAL A*\n*β https://www.mediafire.com/file/xo6msugx6u2fhlw/1.19.30.apk/file*')
console.log(e)
}}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.dorracoins = 1
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i
export default handler
