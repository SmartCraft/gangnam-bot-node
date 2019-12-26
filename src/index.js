const TelegramBot = require('node-telegram-bot-api')
const mongoose = require('mongoose')
const config = require('./config')
const helper = require('./helper')
const keyboard = require('./keyboard')
const kb = require('./keyboard-buttons')
const database = require('../database.json')

helper.logStart()
mongoose.Promise = global.Promise
mongoose.connect(config.DB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err))


  require('./model/product.model')

  const Products = mongoose.model('myproducts')
 //database.myproducts.forEach(f => new Products(f).save().catch(e => console.log(e)))
//--------------------------------------------------

const ACTION_TYPE = {
  TOGGLE_NAV_COUNT: 'tnc',
  ACCEPT_BUY: 'ab',
  SHOW_CINEMAS_MAP: 'scm',
  SHOW_FILMS: 'sf'
}
const bot = new TelegramBot(config.TOKEN, {
  polling: true
})

bot.on('message', msg => {
  console.log('Working', msg.from.first_name)
  console.log('Текст сообщения', msg.text)
  const chatId = helper.getChatId(msg)
  switch (msg.text) {
    case kb.home.toner:
        bot.sendMessage(chatId, 'Выбирите интересующий вас брэнд',{
          reply_markup: {keyboard: keyboard.tonerBrands}
        })
      break
    case kb.home.essance:
      bot.sendMessage(chatId, 'Выбирите интересующий вас брэнд',{
        reply_markup: {keyboard: keyboard.essanceBrands}
      })
      break
    case kb.home.Ampoule:
          bot.sendMessage(chatId, 'Выбирите интересующий вас брэнд',{
            reply_markup: {keyboard: keyboard.AmpouleBrands}
          })
    break
    case kb.home.cream:
          bot.sendMessage(chatId, 'Выбирите интересующий вас брэнд',{
            reply_markup: {keyboard: keyboard.creamBrands}
          })
    break
    case kb.home.maskPack:
          bot.sendMessage(chatId, 'Выбирите интересующий вас брэнд',{
            reply_markup: {keyboard: keyboard.maskPackBrands}
          })
    break
    case kb.home.serum:
          bot.sendMessage(chatId, 'Выбирите интересующий вас брэнд',{
            reply_markup: {keyboard: keyboard.serumBrands}
          })
    break
    case kb.home.foam:
          bot.sendMessage(chatId, 'Выбирите интересующий вас брэнд',{
            reply_markup: {keyboard: keyboard.foamBrands}
          })
    break
    case kb.home.sun:
          bot.sendMessage(chatId, 'Выбирите интересующий вас брэнд',{
            reply_markup: {keyboard: keyboard.sunBrands}
          })
    break

    case kb.home.lip:
          bot.sendMessage(chatId, 'Выбирите интересующий вас брэнд',{
            reply_markup: {keyboard: keyboard.lipBrands}
          })
    break
    case kb.home.maskSheet:
          bot.sendMessage(chatId, 'Выбирите интересующий вас брэнд',{
            reply_markup: {keyboard: keyboard.maskSheetBrands}
          })
    break
    case kb.home.hand:
          bot.sendMessage(chatId, 'Выбирите интересующий вас брэнд',{
            reply_markup: {keyboard: keyboard.handBrands}
          })
    break
    case kb.home.maskSheet:
          bot.sendMessage(chatId, 'Выбирите интересующий вас брэнд',{
            reply_markup: {keyboard: keyboard.maskSheetBrands}
          })
    break
    case kb.home.pact:
          bot.sendMessage(chatId, 'Выбирите интересующий вас брэнд',{
            reply_markup: {keyboard: keyboard.pactBrands}
          })
    break
    case kb.tonerBrands.supiyo:
      //sendProductsByCat(chatId, {category: 'Supiyo Toner'})
     bot.sendMessage(chatId, 'Выбирите интересующий вас товар',{
        reply_markup: {keyboard: keyboard.tonerSupiyo}
      })
    break
    case kb.creamBrands.supiyo:
      //sendProductsByCat(chatId, {category: 'Supiyo Toner'})
     bot.sendMessage(chatId, 'Выбирите интересующий вас товар',{
        reply_markup: {keyboard: keyboard.creamSupiyo}
      })
    break
    case kb.AmpouleBrands.supiyo:
      //sendProductsByCat(chatId, {category: 'Supiyo Toner'})
     bot.sendMessage(chatId, 'Выбирите интересующий вас товар',{
        reply_markup: {keyboard: keyboard.AmpouleSupiyo}
      })
    break  
    case kb.essanceBrands.supiyo:
      //sendProductsByCat(chatId, {category: 'Supiyo Toner'})
     bot.sendMessage(chatId, 'Выбирите интересующий вас товар',{
        reply_markup: {keyboard: keyboard.essanceSupiyo}
      })
    break
    case kb.maskPackBrands.supiyo:
      //sendProductsByCat(chatId, {category: 'Supiyo Toner'})
     bot.sendMessage(chatId, 'Выбирите интересующий вас товар',{
        reply_markup: {keyboard: keyboard.maskPackSupiyo}
      })
    break 
    case kb.serumBrands.supiyo:
      //sendProductsByCat(chatId, {category: 'Supiyo Toner'})
     bot.sendMessage(chatId, 'Выбирите интересующий вас товар',{
        reply_markup: {keyboard: keyboard.serumSupiyo}
      })
    break
    case kb.foamBrands.supiyo:
      //sendProductsByCat(chatId, {category: 'Supiyo Toner'})
     bot.sendMessage(chatId, 'Выбирите интересующий вас товар',{
        reply_markup: {keyboard: keyboard.foamSupiyo}
      })
    break
    case kb.lipBrands.supiyo:
      //sendProductsByCat(chatId, {category: 'Supiyo Toner'})
     bot.sendMessage(chatId, 'Выбирите интересующий вас товар',{
        reply_markup: {keyboard: keyboard.lipSupiyo}
      })
    break
    case kb.sunBrands.supiyo:
      //sendProductsByCat(chatId, {category: 'Supiyo Toner'})
     bot.sendMessage(chatId, 'Выбирите интересующий вас товар',{
        reply_markup: {keyboard: keyboard.sunSupiyo}
      })
    break
    case kb.pactBrands.supiyo:
      //sendProductsByCat(chatId, {category: 'Supiyo Toner'})
     bot.sendMessage(chatId, 'Выбирите интересующий вас товар',{
        reply_markup: {keyboard: keyboard.pactSupiyo}
      })
    break
    case kb.handBrands.supiyo:
      //sendProductsByCat(chatId, {category: 'Supiyo Toner'})
     bot.sendMessage(chatId, 'Выбирите интересующий вас товар',{
        reply_markup: {keyboard: keyboard.handSupiyo}
      })
    break
    case kb.maskSheetBrands.supiyo:
      //sendProductsByCat(chatId, {category: 'Supiyo Toner'})
     bot.sendMessage(chatId, 'Выбирите интересующий вас товар',{
        reply_markup: {keyboard: keyboard.maskSheetSupiyo}
      })
    break 
    case kb.back:
      bot.sendMessage(chatId, 'Выберите интересующий вас товар',{
        reply_markup: {keyboard: keyboard.home}
      })
      break
  }
})
function sendProductsByCat(chatId, query){
  Products.find(query).then(myproducts => {
    console.log(myproducts)
    const html = myproducts.map((f, i) => {
      return `/<b>${i + 1}</b> ${f.name} - ${f.productId}`
    }).join('\n')
    bot.sendMessage(chatId, html, {
      
        parse_mode: 'HTML'
     
    })
  })
}
bot.on('message', msg =>{
  
  
  const chatId = helper.getChatId(msg)
  Products.findOne({name: msg.text}).then(product => {
    const caption = `Название: ${product.name}\nАртикул: ${product.productCode}\nОбъем: ${product.volume}\nЦена: ${product.price}`
    
    bot.sendPhoto(chatId, product.picture, {
      caption: caption,
      /*reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'Заказать',
              callback_data: JSON.stringify({
                type: 'BUY',
                parent: product.name
                
              })
            }
          ]
        ]
      }*/
    })
    bot.sendMessage(helper.getChatId(msg), "...", {
      reply_markup: {
        keyboard: keyboard[product.keyboardName]
      }
    })
  }).catch(function(e){
    console.log(e)
  })

})


bot.on('callback_query', query => {
  const {chat, message_id, text} = query.message
  
  let data
  
  try {
    data = JSON.parse(query.data)
  } catch (e) {
    throw new Error('Data is not an object')
  }
  const { type, parent, price, count } = data
  console.log(type, parent, price, count)

  if (type === "BUY") {
    bot.sendMessage(chat.id, 'Укажите количество',{
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: '1',
              callback_data: JSON.stringify({
                type: 'accept',
                count: '1'
              })
            },
            {
              text: '2',
              callback_data: JSON.stringify({
                type: 'accept',
                count: '2'
              })
            },
            {
              text: '3',
              callback_data: JSON.stringify({
                type: 'accept',
              })
            }          
          ],
          [
            {
              text: '4',
              callback_data: JSON.stringify({
                type: 'accept',
              })
            },
            {
              text: '5',
              callback_data: JSON.stringify({
                type: 'accept',
              })
            },
            {
              text: '6',
              callback_data: JSON.stringify({
                type: 'accept',
              })
            } 
          ],
          [
            {
              text: '7',
              callback_data: JSON.stringify({
                type: 'accept',
              })
            },
            {
              text: '8',
              callback_data: JSON.stringify({
                type: 'accept',
              })
            },
            {
              text: '9',
              callback_data: JSON.stringify({
                type: 'accept',
              })
            } 
          ],
          [
            {
              text: '10',
              callback_data: JSON.stringify({
                type: 'accept',
              })
            } 
          ]
        ]
      }
    })
  } else if (type === 'accept') {
    sendTotal(chat.id, parent)
    
  } else if (type === ACTION_TYPE.TOGGLE_FAV_FILM) {

  } else if (type === ACTION_TYPE.SHOW_FILMS) {
    
  }




})
bot.onText(/\/start/, msg => {

  const text = `Здравствуйте, ${msg.from.first_name}\nВыберите интересующую вас категорию товаров:`
  bot.sendMessage(helper.getChatId(msg), text, {
    reply_markup: {
      keyboard: keyboard.home
    }
  })

})


//------------------------------------
