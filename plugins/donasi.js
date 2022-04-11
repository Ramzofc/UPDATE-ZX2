let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel [081355383396]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay [081341554776]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
