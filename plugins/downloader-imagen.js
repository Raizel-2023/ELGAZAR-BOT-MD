import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙹𝙴𝙼𝙿𝙻𝙾 𝙳𝙴 𝚄𝚂𝙾 𝙳𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 ${usedPrefix + command} Minecraft*`
const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendHydrated(m.chat, `🔎 *عنوان البحث:* ${text}
🌎 *الموقع:* جوجل
`, author, link, link, '🔗 الرابط', null, null, [
['🔄 الصوره التاليه 🔄', `/imagen ${text}`]
], m)
}
handler.help = ['صوره <query>', 'صورة <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(صورة|image|صوره)$/i
export default handler
