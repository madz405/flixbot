const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*jkcu/i.test(m.quoted.text)) return !0
  this.tebakjkt = this.tebakjkt ? this.tebakjkt : {}
  if (!(id in this.tebakjkt)) return m.reply('Soal itu telah berakhir')
  if (m.quoted.id == this.tebakjkt[id][0].id) {
    let json = JSON.parse(JSON.stringify(this.tebakjkt[id][1]))
    // m.reply(JSON.stringify(json, null, '\t'))
    if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
      global.db.data.users[m.sender].exp += this.tebakjkt[id][2]
      global.db.data.users[m.sender].tiketcoin += 1
      m.reply(`*Benar!*\n+${this.tebakjkt[id][2]} kredit sosial!`)
      clearTimeout(this.tebakjkt[id][3])
      delete this.tebakjkt[id]
    } else if ((m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(`*Dikit Lagi!*`)
    else m.reply(`*Salah!*`)
  }
  return !0
}
handler.exp = 0

module.exports = handler