const app=require('./config/server.js'); //importação do módulo
const rotaHome=require('./app/routes/home')(app); //importação da rota home
const rotaAdmin=require('./app/routes/admin')(app); //importação da rota admin
const rotaNoticias=require('./app/routes/noticias')(app); //importação da rota noticias

//Cria um servidor rodando na porta 3000
app.listen('3000',function(){
	console.log('Servidor rodando na porta 3000');
});