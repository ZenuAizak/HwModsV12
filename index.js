/*
› Create By Haikal
› Base Ori Haikal

🌷 KALAU MAU RENAME TARO CREDITS GUA : ⽂ - 𝑳𝒊𝖝𝖝𝒛𝒚㕚 */

require('./hwkal')
const { default: makeWASocket, useSingleFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@adiwajshing/baileys")
const fs = require('fs')
const pino = require('pino')
const chalk = require('chalk')
const path = require('path')
const _ = require('lodash')
const axios = require('axios')
const FileType = require('file-type')
const yargs = require('yargs/yargs')
const { Boom } = require('@hapi/boom')
const PhoneNumber = require('awesome-phonenumber')
const { hello } = require('./baseikal/welcome/hello/hello')
const { bye } = require('./baseikal/welcome/bye/bye')
const { state, saveState }= useSingleFileAuthState(`./${sessionName}.json`)
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./baseikal/lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./baseikal/lib/myfunc')
//=================================================//
var low
try {
low = require('lowdb')
} catch (e) {
low = require('./baseikal/lib/lowdb')}
//=================================================//
const { Low, JSONFile } = low
const mongoDB = require('./baseikal/lib/mongoDB')
//=================================================//
global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')
//=================================================//
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
//=================================================//
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
/https?:\/\//.test(opts['db'] || '') ?
new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
new mongoDB(opts['db']) :
new JSONFile(`baseikal/dbnye/database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
if (global.db.data !== null) return
global.db.READ = true
await global.db.read()
global.db.READ = false
global.db.data = {
users: {},
chats: {},
database: {},
game: {},
settings: {},
others: {},
sticker: {},
...(global.db.data || {})}
  global.db.chain = _.chain(global.db.data)}
loadDatabase()
//=================================================//
// save database every 30seconds
if (global.db) setInterval(async () => {
if (global.db.data) await global.db.write()
  }, 30 * 1000)
//=================================================//
async function startHaikal() {
const haikal = makeWASocket({
logger: pino({ level: 'silent' }),
printQRInTerminal: true,
browser: ['Haikal Multi Device','Safari','3.1.0'],
auth: state})
//=================================================//
store.bind(haikal.ev)
//=================================================//
haikal.ev.on('messages.upsert', async chatUpdate => {
try {
mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!haikal.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
m = smsg(haikal, mek, store)
require("./haikal")(haikal, m, chatUpdate, store)
} catch (err) {
console.log(err)}})
//=================================================//
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}
let doku = [f1,f2,f3,f4,f5,f6]
let feler = pickRandom(doku)
//=================================================//
haikal.ev.on('group-participants.update', async (anu) => {
console.log(anu)
if (!wlcm.includes(anu.id)) return
try {
let metadata = await haikal.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
// Get Profile Picture User
try {
ppuser = await haikal.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'}
//=================================================//
// Get Profile Picture Group
try {
ppgroup = await haikal.profilePictureUrl(anu.id, 'image')
} catch {
ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'}
//=================================================//
if (anu.action == 'add') {
var buffer = await getBuffer(ppuser)
let fgclink = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6285765134804@whatsapp.net"}, "message": {orderMessage: {itemCount: 9999999,status: 200, thumbnail: buffer, surface: 200, message: `${metadata.subject}`, orderTitle: 'memek', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
he = `HELLO 👋 SELAMAT DATANG DI GROUP ${metadata.subject} @${num.split("@")[0]}\n\n${metadata.desc}`
let link = `https://youtube.com/@user-pb3qt2ek1x`
let buttons = [
{buttonId: `⽂ - 𝑳𝒊𝖝𝖝𝒛𝒚㕚`, buttonText: {displayText: hello}, type: 1},
]
let buttonMessage = {
document: fs.readFileSync('./baseikal/lib/tes.xlsx'),
mimetype: feler,
jpegThumbnail:buffer,
mentions: [num],
fileName: `HELLO 👋 SELAMAT DATANG DI GROUP ${metadata.subject}`,
fileLength: 99999999999999,
caption: he,
footer: `© ⽂ - 𝑳𝒊𝖝𝖝𝒛𝒚㕚`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `Jangan Lupa Tersenyum ☺️`,
body: `SUBSCRIBE ⽂ - 𝑳𝒊𝖝𝖝𝒛𝒚㕚`,
mediaType:2,
thumbnail: buffer,
sourceUrl: link,
mediaUrl: link,}}}
//=================================================//
haikal.sendMessage(anu.id, buttonMessage, {quoted:fgclink})
} else if (anu.action == 'remove') {
let fgclink = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6285765134804@whatsapp.net"}, "message": {orderMessage: {itemCount: 9999999,status: 200, thumbnail: buffer, surface: 200, message: `${metadata.subject}`, orderTitle: 'memek', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
he = `SELAMAT TINGGAL KAWAN 👋 ${metadata.subject} @${num.split("@")[0]}\n\n${metadata.desc}`
let link = `https://youtube.com/@user-pb3qt2ek1x`
let buttons = [
{buttonId: `⽂ - 𝑳𝒊𝖝𝖝𝒛𝒚㕚`, buttonText: {displayText: bye}, type: 1},
]
let buttonMessage = {
document: fs.readFileSync('./baseikal/lib/tes.xlsx'),
mimetype: feler,
jpegThumbnail:buffer,
mentions: [num],
fileName: `SELAMAT TINGGAL 👋 ${metadata.subject}`,
fileLength: 99999999999999,
caption: he,
footer: `© ⽂ - 𝑳𝒊𝖝𝖝𝒛𝒚㕚`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `Jangan Lupa Tersenyum ☺️`,
body: `SUBSCRIBE ⽂ - 𝑳𝒊𝖝𝖝𝒛𝒚㕚`,
mediaType:2,
thumbnail: buffer,
sourceUrl: link,
mediaUrl: link,}}}
haikal.sendMessage(anu.id, buttonMessage, {quoted:fgclink})}}
} catch (err) {
console.log(err)}})
haikal.ev.on('group-participants.update', async (anu) => {
console.log(anu)
if (!wlcmm.includes(anu.id)) return
try {
let metadata = await haikal.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
// Get Profile Picture User
try {
ppuser = await haikal.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'}
//=================================================//
// Get Profile Picture Group
try {
ppgroup = await haikal.profilePictureUrl(anu.id, 'image')
} catch {
ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'}
if (anu.action == 'demote') {
var buffer = await getBuffer(ppuser)
let fgclink = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6285765134804@whatsapp.net"}, "message": {orderMessage: {itemCount: 9999999,status: 200, thumbnail: buffer, surface: 200, message: `${metadata.subject}`, orderTitle: 'memek', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
he = `YAH DI DEMOTE 😂 ${metadata.subject} @${num.split("@")[0]}\n\n${metadata.desc}`
let link = `https://eclass.iainsalatiga.ac.id/app/upload/users/1/10892/my_files/XhiroMhonshine.html'`
let buttons = [
{buttonId: `⽂ - 𝑳𝒊𝖝𝖝𝒛𝒚㕚`, buttonText: {displayText: 'KASIAN'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./baseikal/lib/tes.xlsx'),
mimetype: feler,
jpegThumbnail:buffer,
mentions: [num],
fileName: `KASIAN SIH DI DEMOTE 😂 ${metadata.subject}`,
fileLength: 99999999999999,
caption: he,
footer: `© ⽂ - 𝑳𝒊𝖝𝖝𝒛𝒚㕚`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `YANG SABAR YAH MAKANYA JADI ADMIN YANG BETUL 😡️`,
body: `SUBSCRIBE ⽂ - 𝑳𝒊𝖝𝖝𝒛𝒚㕚`,
mediaType:2,
thumbnail: buffer,
sourceUrl: link,
mediaUrl: link,}}}
haikal.sendMessage(anu.id, buttonMessage, {quoted:fgclink})
} else if (anu.action == 'promote') {
let fgclink = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6285765134804@whatsapp.net"}, "message": {orderMessage: {itemCount: 9999999,status: 200, thumbnail: buffer, surface: 200, message: `${metadata.subject}`, orderTitle: 'memek', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
he = `CIEEE JADI ADMIN 😘 ${metadata.subject} @${num.split("@")[0]}\n\n${metadata.desc}`
let link = `https://eclass.iainsalatiga.ac.id/app/upload/users/1/10892/my_files/XhiroMhonshine.html'`
let buttons = [
{buttonId: `⽂ - 𝑳𝒊𝖝𝖝𝒛𝒚㕚`, buttonText: {displayText: 'SELAMAT'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./baseikal/lib/tes.xlsx'),
mimetype: feler,
jpegThumbnail:buffer,
mentions: [num],
fileName: `SELAMAT TELAH JADI ADMIN 🤗 ${metadata.subject}`,
fileLength: 99999999999999,
caption: he,
footer: `© ⽂ - 𝑳𝒊𝖝𝖝𝒛𝒚㕚`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `JADI LAH ADMIN YANG BIJAK KAWAN 🌷️`,
body: `SUBSCRIBE ⽂ - 𝑳𝒊𝖝𝖝𝒛𝒚㕚`,
mediaType:2,
thumbnail: buffer,
sourceUrl: link,
mediaUrl: link,}}}
haikal.sendMessage(anu.id, buttonMessage, {quoted:fgclink})}}
} catch (err) {
console.log(err)}})
//=================================================//
// Setting
haikal.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid}
//=================================================//
haikal.ev.on('contacts.update', update => {
for (let contact of update) {
let id = haikal.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }}})
//=================================================//
haikal.getName = (jid, withoutContact  = false) => {
id = haikal.decodeJid(jid)
withoutContact = haikal.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = haikal.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === haikal.decodeJid(haikal.user.id) ?
haikal.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')}

haikal.sendContact = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: await haikal.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await haikal.getName(i + '@s.whatsapp.net')}\nFN:${await haikal.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:denyp857@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://https://www.instagram.com/hikal_857/?hl=id\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`})}
//=================================================//
haikal.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })}
//=================================================//
//=================================================//
//Kalau Mau Self Lu Buat Jadi False
haikal.public = true
//=================================================//
haikal.serializeM = (m) => smsg(haikal, m, store)
haikal.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); haikal.logout(); }
else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); startHaikal(); }
else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); startHaikal(); }
else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); haikal.logout(); }
else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Scan Again And Run.`); haikal.logout(); }
else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); startHaikal(); }
else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); startHaikal(); }
else haikal.end(`Unknown DisconnectReason: ${reason}|${connection}`)}
console.log('Connected...', update)})
//=================================================//
haikal.ev.on('creds.update', saveState)
haikal.sendListMsg = (jid, text = '', footer = '', title = '' , butText = '', sects = [], quoted) => {
let sections = sects
var listMes = {
text: text,
footer: footer,
title: title,
buttonText: butText,
sections}
haikal.sendMessage(jid, listMes, { quoted: quoted })}
//=================================================//
haikal.sendText = (jid, text, quoted = '', options) => haikal.sendMessage(jid, { text: text, ...options }, { quoted })
 //=================================================//
 haikal.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
// save to file
await fs.writeFileSync(trueFileName, buffer)
return trueFileName}
//=================================================//
haikal.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
return buffer} 
//=================================================//
haikal.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)}
//=================================================//

//=================================================//
await haikal.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}
//=================================================//
haikal.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
let types = await haikal.getFile(path, true)
let { mime, ext, res, data, filename } = types
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }}
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require('./baseikal/lib/exif')
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await haikal.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)}
//=================================================//
haikal.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)}
//=================================================//
await haikal.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}
//=================================================//
haikal.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message}}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo}} : {})} : {})
await haikal.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage}
//=================================================//
haikal.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await haikal.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })}
//=================================================//
haikal.sendTextWithMentions = async (jid, text, quoted, options = {}) => haikal.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })
//=================================================//
haikal.cMod = (jid, copy, text = '', sender = haikal.user.id, options = {}) => {
//let copy = message.toJSON()
let mtype = Object.keys(copy.message)[0]
let isEphemeral = mtype === 'ephemeralMessage'
if (isEphemeral) {
mtype = Object.keys(copy.message.ephemeralMessage.message)[0]}
let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
let content = msg[mtype]
if (typeof content === 'string') msg[mtype] = text || content
else if (content.caption) content.caption = text || content.caption
else if (content.text) content.text = text || content.text
if (typeof content !== 'string') msg[mtype] = {
...content,
...options}
if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
copy.key.remoteJid = jid
copy.key.fromMe = sender === haikal.user.id
return proto.WebMessageInfo.fromObject(copy)}

haikal.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
//if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'}
filename = path.join(__filename, '../baseikal/dbnye/' + new Date * 1 + '.' + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
res,
filename,
size: await getSizeMedia(data),
...type,
data}}
haikal.sendFile = async(jid, PATH, fileName, quoted = {}, options = {}) => {
let types = await haikal.getFile(PATH, true)
let { filename, size, ext, mime, data } = types
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require('./baseikal/lib/sticker.js')
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: global.packname, author: global.packname2, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await haikal.sendMessage(jid, { [type]: { url: pathFile }, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)}
haikal.parseMention = async(text) => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}
return haikal}
//=================================================//
startHaikal()
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})