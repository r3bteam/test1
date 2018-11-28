const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready',  () => {
    console.log('تم تشغيل :dragon  ');
    console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.id} " ] channels! [ " ${client.channels.size} " ]`);
  });
client.on('ready',  () => {
let args = `**يا هلا بالقمر الي جانا ونور سمانا .. بدون وجودك أنسى من هو أنا , :sparkles:

مثل مابقيـــنا , بوجودك إلتَّميــــنا , وتشرفـــنا بيكك ياقمــــــــرنا ,, :sparkles::kiss:

تنورنابا وجودك :
**__**https://discord.gg/KFuEpj3**__ `
console.log(`جار ارسال الرسالة |:white_check_mark:`);
client.users.forEach(m =>{
m.sendMessage(args)
})
});
    

client.login(process.env.BOT_TOKEN);
