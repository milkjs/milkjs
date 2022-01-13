**BOT REQUIRES DISCORD.JS**

#

Welcome to `milk.js`

This is a package for discord. It reacts to your message with **🐮** if you use the cow function, or **🥛** if you use the milk function. There is a 10% chance of it reacting to your message, as of `v1.1.2`, and if you use both functions at the same time, it will never react both at once.

**PERMISSION HANDLING IS INCLUDED**

**Get Started**

To use the bot, you first import it with

```js
COMMON JS
const { cow, milk } = require('milk.js')
```

```js
ES6
import { cow, milk } from 'milk.js'
```

Then in your message create function, you call the function `cow()` or `milk()`. It requires you to enter the parameter you used for your `messageCreate` event. I will be using `message` as my example.

Example. (Done in COMMON JS)

```js
const discord = require('discord.js')
const client = new discord.Client({
	// your discord otpions here
})

client.on('messageCreate', message => {
	cow(message)
	milk(message)
})

client.login(/* Your token. */)
```

It's pretty self explanitory.

We have already created a bot for you, if you would like to see a example. You can invite it [here]('https://discord.com/api/oauth2/authorize?client_id=931122709285437470&permissions=2112&scope=bot').

**SUPPORT FOR THE `interactionCreate` event is coming soon!**
