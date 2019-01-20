const Discord = require("discord.js");
const client = new Discord.Client();
const moha = new Discord.Client();
const moha1 = new Discord.Client();
const moha2 = new Discord.Client();
const moha3 = new Discord.Client();


client.on('ready',  () => {
let args = `كسمكم لعيون مرتضى يخوات القحبة 
كسمكم اتش بي ناكو عرض اكس ومشو يخوات القحبة
عمكم دراكون مر من هنا .. كسمكم مافي مستوى اخرتكم تطبعو شات يخوات شرموطه متت هههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههه `
console.log(`جار ارسال الرسالة |:white_check_mark:`);
client.users.forEach(m =>{
m.sendMessage(args)
})
});
moha.on('ready',  () => {
let args = `كسمكم لعيون مرتضى يخوات القحبة 
كسمكم اتش بي ناكو عرض اكس ومشو يخوات القحبة
عمكم دراكون مر من هنا .. كسمكم مافي مستوى اخرتكم تطبعو شات يخوات شرموطه متت هههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههه `
console.log(`جار ارسال الرسالة |:white_check_mark:`);
moha.users.forEach(m =>{
m.sendMessage(args)
})
});
moha1.on('ready',  () => {
let args = `كسمكم لعيون مرتضى يخوات القحبة 
كسمكم اتش بي ناكو عرض اكس ومشو يخوات القحبة
عمكم دراكون مر من هنا .. كسمكم مافي مستوى اخرتكم تطبعو شات يخوات شرموطه متت هههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههه `
console.log(`جار ارسال الرسالة |:white_check_mark:`);
moha1.users.forEach(m =>{
m.sendMessage(args)
})
});
    moha2.on('ready',  () => {
let args = `كسمكم لعيون مرتضى يخوات القحبة 
كسمكم اتش بي ناكو عرض اكس ومشو يخوات القحبة
عمكم دراكون مر من هنا .. كسمكم مافي مستوى اخرتكم تطبعو شات يخوات شرموطه متت هههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههه `
console.log(`جار ارسال الرسالة |:white_check_mark:`);
moha2.users.forEach(m =>{
m.sendMessage(args)
})
});
moha3.on('ready',  () => {
let args = `كسمكم لعيون مرتضى يخوات القحبة 
كسمكم اتش بي ناكو عرض اكس ومشو يخوات القحبة
عمكم دراكون مر من هنا .. كسمكم مافي مستوى اخرتكم تطبعو شات يخوات شرموطه متت هههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههه `
console.log(`جار ارسال الرسالة |:white_check_mark:`);
moha3.users.forEach(m =>{
m.sendMessage(args)
})
});
client.login(process.env.BOT_TOKEN);
moha.login(process.env.BOT_TOKEN1);
moha1.login(process.env.BOT_TOKEN2);
moha2.login(process.env.BOT_TOKEN3);
moha3.login(process.env.BOT_TOKEN4);

