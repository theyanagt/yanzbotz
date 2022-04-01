let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel [0812-5893-0466]]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay [0812-5893-0466]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
