let handler = async (m, { conn }) => {		
 conn.sendFile(m.chat, 'https://yog-apikey.herokuapp.com/api/bokep?apikey=YogGanz', 'asupan.mp4', 'Nih', m)
}
handler.help = ['bkp']
handler.tags = ['owner']

handler.command = /^(bkp)$/i
handler.rowner = true
handler.register = true
handler.limit = false
module.exports = handler
