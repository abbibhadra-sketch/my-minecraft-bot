const mineflayer = require('mineflayer')
const express = require('express')
const app = express()

// Render web service active rakhne ke liye
app.get('/', (req, res) => res.send('Bot Active Hai'))
app.listen(3000, () => console.log('Server Active'))

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

bot.on('error', (err) => console.log('Error:', err))
bot.on('kicked', (reason) => console.log('Kick:', reason))
