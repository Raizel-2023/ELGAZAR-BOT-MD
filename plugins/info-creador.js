let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `
*—◉ رقم المطور
wa.me/201098906252*

*—◉ انضم لجروب الدعم♥✨ https://chat.whatsapp.com/LKmBPoBH1acGeUJHYjCcaq*

*—◉ اشترك بقناتي علي اليوتيوب♥✨
https://youtube.com/@ABDALLAH_MOHAMED*

*—◉ تابعني علي التيك توك♥✨ https://www.tiktok.com/@q.r.a.n_0?_t=8YP0m88y31R&_r=1*
`.trim()   
let buttonMessage= {
'document': { url: `https://chat.whatsapp.com/LKmBPoBH1acGeUJHYjCcaq` },
'mimetype': `application/${document}`,
'fileName': `「  مرحبا بك 」`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://chat.whatsapp.com/LKmBPoBH1acGeUJHYjCcaq',
'mediaType': 2,
'previewType': 'pdf',
'title': 'ELGAZAR BOT DE WHATSAPP⁩',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://youtube.com/@ABDALLAH_MOHAMED' }},
'caption': text,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '👾 القائمه 👾'}, type: 1}, 
{buttonId: `${usedPrefix}menu2`, buttonText: {displayText: '📮 القائمه2 📮'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;𝑩𝒓𝒖𝒏𝒐 𝑺𝒐𝒃𝒓𝒊𝒏𝒐 👑;;;\nFN:𝑩𝒓𝒖𝒏𝒐 𝑺𝒐𝒃𝒓𝒊𝒏𝒐 👑\nORG:𝑩𝒓𝒖𝒏𝒐 𝑺𝒐𝒃𝒓𝒊𝒏𝒐 👑\nTITLE:\nitem1.TEL;waid=5219996125657:+521 999 612 5657\nitem1.X-ABLabel:𝑩𝒓𝒖𝒏𝒐 𝑺𝒐𝒃𝒓𝒊𝒏𝒐 👑\nX-WA-BIZ-DESCRIPTION:[❗] ᴄᴏɴᴛᴀᴄᴛᴀ ᴀ ᴇsᴛᴇ ɴᴜᴍ ᴘᴀʀᴀ ᴄᴏsᴀs ɪᴍᴘᴏʀᴛᴀɴᴛᴇs.\nX-WA-BIZ-NAME:𝑩𝒓𝒖𝒏𝒐 𝑺𝒐𝒃𝒓𝒊𝒏𝒐 👑\nEND:VCARD`
//await conn.sendMessage(m.chat, { contacts: { displayName: 'Bruno Sobrino 👑', contacts: [{ vcard }] }}, {quoted: m})
//const data = global.owner.filter(([id, isCreator]) => id && isCreator)
//await conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator|المطور|propietario)$/i
export default handler
