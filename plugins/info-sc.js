let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `*https://chat.whatsapp.com/LKmBPoBH1acGeUJHYjCcaq*`
let buttonMessage= {
'document': { url: `https://github.com/BrunoSobrino/TheMystic-Bot-MD` },
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
'title': 'ELGAZAR BIT DE WHATSAPP⁩',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://youtube.com/@ABDALLAH_MOHAMED' }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: 'القائمه'}, type: 1}, 
{buttonId: `${usedPrefix}menu2`, buttonText: {displayText: 'القائمه2'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = ['sc','سكريبت']
export default handler
