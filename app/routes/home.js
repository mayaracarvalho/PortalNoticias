module.exports=function(app){
    //rota para a página principal do app
    app.get('/',function(req,res){
	res.render('home/index.ejs'); //renderiza a tela home
});
}