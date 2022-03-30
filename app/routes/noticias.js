module.exports=(app)=>{
	//rota para noticias exportada
    app.get("/noticias", (req, res)=>{
        const dbConnection = require("../../config/dBConnection");//importação banco de dados 
        const connection = dbConnection(); //execução da conexão com o banco de dados 
            connection.query("select * from noticias", (error, result)=>{
                if(error){
					//verificação do algum erro
                    console.log(error);
                }
                res.render("noticias/noticias.ejs", {noticias:result}); 
				//renderiza a tela noticias
		})
	}
};