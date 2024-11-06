<?php


/**Database Connection */
class Dbconnect {
    private $server = 'localhost';
    private $user = 'root';
    private $dbname = 'react-crud';
    private $pass = '';

    public function connect() {
        try {
            // Correcting the DSN string
            $conn = new PDO('mysql:host='.$this->server.';dbname='.$this->dbname, $this->user, $this->pass);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conn;
        } catch (PDOException $e) {
            echo "Database Error: " . $e->getMessage();
        }
    }
}



?>