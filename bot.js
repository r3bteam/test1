const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready',  () => {
    console.log('تم تشغيل :dragon  ');
    console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.id} " ] channels! [ " ${client.channels.size} " ]`);
  });
client.on('ready',  () => {
let args = `**نحن بعيدون جداً من حيث المسافات والأميال :purple_heart: 
، ولكن يمكن للكلمات أن تؤثر فينا وتحرّك مشاعرنا :first_quarter_moon_with_face: 
، ويمكن للأفكار أن تجلب لنا الابتسامات. :speaking_head: 
حياكم سيرفر آولد : 
https://discord.gg/KFuEpj3
** `
console.log(`جار ارسال الرسالة |:white_check_mark:`);
client.users.forEach(m =>{
m.sendMessage(args)
})
});
    

client.login(process.env.BOT_TOKEN);
