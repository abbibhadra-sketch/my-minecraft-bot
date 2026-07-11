const mineflayer = require('mineflayer')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

// Render web service active rakhne ke liye
app.get('/', (req, res) => res.send('Bot Active Hai!'))
app.listen(PORT, () => console.log(Server running on port ${PORT}))

// Minecraft Bot ki Settings
const bot = mineflayer.createBot({
  host: 'winsumsmp.playserver.pro',
  port: 20740,
  username: 'DontHitMe',
  version: '1.21.4' 
})

// Game me aate hi kya karega
bot.on('spawn', () => {
  console.log('Bot Minecraft Server me ghus gaya hai!')
  bot.setControlState('sneak', true) 
  bot.setControlState('jump', true)
})

bot.on('error', (err) => console.log('Error aa gayi:', err))
bot.on('kicked', (reason) => console.log('Bot kick ho gaya:', reason))
const mineflayer = require('mineflayer')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

// Render web service active rakhne ke liye
app.get('/', (req, res) => res.send('Bot Active Hai!'))
app.listen(PORT, () => console.log(Server running on port ${PORT}))

// Minecraft Bot ki Settings
const bot = mineflayer.createBot({
  host: 'winsumsmp.playserver.pro',
  port: 20740,
  username: 'DontHitMe',
  version: '1.21.4' 
})

// Game me aate hi kya karega
bot.on('spawn', () => {
  console.log('Bot Minecraft Server me ghus gaya hai!')
  bot.setControlState('sneak', true) 
  bot.setControlState('jump', true)
})

bot.on('error', (err) => console.log('Error aa gayi:', err))
bot.on('kicked', (reason) => console.log('Bot kick ho gaya:', reason))
﻿
Tickety 
APP
Tickety
#1627
 
Take full control with the most powerful system for managing tickets, applications, giveaways, and member verification.
» Website:  https://tickety.top/
» Documentation:  https://tickety.top/docs
» Setup Command: /quicksetup
» Help Command: /help