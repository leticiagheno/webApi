package softle.raiz.Conexao;

import java.sql.Connection;
import java.sql.DriverManager;

public class Conexao {

    private static final String USUARIO = "root";
    private static final String SENHA = "";
    private static final String URL = "jdbc:mysql://localhost:3306/dbmoney";
    private static final String DRIVER = "com.mysql.jdbc.Driver";

    // Conectar ao banco
    public static Connection abrir() throws Exception 
    {
        
        try {

            Class.forName(DRIVER);
            Connection conn = DriverManager.getConnection(URL, USUARIO, SENHA);
            return conn;
            
        } catch (Exception e) {
            throw e;
        }
    }

}