module.exports.milk = function milk(message) {
	if (!message) throw new Error('Message Parameter Required.')
	if (!message.guild.me.permissions.has('ADD_REACTIONS'))
		return message.channel.send(
			`Well, I was gonna react to your message with \`🐮\`, but I was missing the permissions to!`
		)

	let number = Math.floor(Math.random() * 100) + 1
	if (number < 10 || number == 10) return message.react('🥛')
	else if (number == 69) return message.react('🥩')
	else return
}

module.exports.cow = function cow(message) {
	if (!message) throw new Error('Message Parameter Required.')
	if (!message.guild.me.permissions.has('ADD_REACTIONS'))
		return message.channel.send(
			`Well, I was gonna react to your message with \`🐮\`, but I was missing the permissions to!`
		)

	let number = Math.floor(Math.random() * 100) + 1
	if (number > 90 || number == 90) return message.react('🐮')
	else if (number == 69) return message.react('🥩')
	else return
}
