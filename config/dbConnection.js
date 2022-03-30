const mysql=require('mysql'); //importação do módulo mysql

module.exports=function(){
    return mysql.createConnection({ //chama o módulo mysql e cria uma conexão e preenche com os dados da conexão
        host:'localhost',
        user:'root',
        password:'ifms',
        database:'portal_noticias'
    })   //conexao com o banco de dados e criação de uma variavel para guardar a conexao
}
	 