let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*الرساله:* ${pesan}`
let teks = `*⺀منشن للكل🗿⺀*\n\n❏ ${oi}\n\n❏ *قائمه الورعان🗿:*\n`
for (let mem of participants) {
teks += `┣➥ @${mem.id.split('@')[0]}\n`}
teks += `*𝘌𝘓Ｇ𝘈𝘡𝘈𝘙 𝘉𝘖𝘛❤*\n\n*▌│█║▌║▌║║▌║▌║▌║█*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|منشن|invocacion|todos|تاك)$/i
handler.admin = true
handler.group = true
export default handler
