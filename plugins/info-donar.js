let handler = async (m, { conn, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
let donar =`
*┏ ┅ ━━━━━━━━━━━━━ ┅ ━*
*┇     「 معلومات 」*
*┣ ┅ ━━━━━━━━━━━━━ ┅ ━*
*┃ هلا ${name} 💙*
*┃*
*┃ 👉🏻 هنا بعض البيانات*
*┃ في حاله كنت تريد الدعم:*
*┃*
*┃ ➤ المستفيد: 𝘌𝘓Ｇ𝘈𝘡𝘈𝘙 𝘈𝘓𝘞𝘈𝘡𝘌𝘙❤* 
*┃ ➤ المفهوم: APOYO*  
*┃ ➤ يوتيوب: https://www.paypal.me/unptoadrih15*
*┃*
*┃ 👉🏻 اتصل بي إذا كنت بحاجة إلى المزيد*
*┃ رقم المطور <𝟹*
*┃ wa.me/201098906252*
*┗ ┅ ━━━━━━━━━━━━━ ┅ ━*
`.trim()
conn.sendHydrated(m.chat, donar, wm, null, 'https://youtube.com/@ABDALLAH_MOHAMED', 'يوتيوب', null, null, [['قائمه الاوامر', '/menu']], m)}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|donar|apoyar$/i
export default handler
