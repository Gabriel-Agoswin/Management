<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");
header("Access-Control-Allow-methods:*");

include "DBConnect.php";
/**Connting with the server */
$DB = new DbConnect;
$conn = $DB->connect();

/** the url from the frontend side  */
$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case "GET":
      $sql = "SELECT* FROM users";
      // the url from where the input values will come from
      $path= explode('/', $_SERVER['REQUEST_URI']); 
      // a condition on if the path or dircetory is four steps then its true like localhost/80/management/user/api/save 
      if(isset($path[4]) && is_numeric($path[4])) {

        $sql .= " WHERE id = :id";
        $stmt= $conn->prepare($sql);
        $stmt->bindParam(':id', $path[4]);
        $stmt->execute();
        $users = $stmt->fetch(PDO::FETCH_ASSOC);
        
      }else{
        $stmt = $stmt= $conn->prepare($sql);
        $stmt->execute();
        $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
      }

      echo json_encode($users);
      //print_r($users);
      break;

    case "POST":
        
        $user = json_decode(file_get_contents('php://input'));
       
        $sql = "INSERT INTO users(name, email, mobile, created_at) VALUES(:name, :email, :mobile, :created_at)";
        $stmt = $conn->prepare($sql);
        $created_at = date('Y-m-d');
        $stmt->bindParam(':name', $user->name);
        $stmt->bindParam(':email', $user->email);
        $stmt->bindParam(':mobile', $user->mobile);
        $stmt->bindParam(':created_at', $created_at);
        $result = $stmt->execute();
      if($result){
        $response = ['status' =>1, 'message'=> 'Record Created Successifully'];


      }else{
        $response = ['status' => 0, 'message' => 'Failed to create record'];
      }

        echo json_encode($response);

        //echo $response;
      
        break;
    case "PUT":
        
        $user = json_decode(file_get_contents('php://input'));
       
        $sql = "UPDATE users SET name = :name, email = :email, mobile = :mobile, updated_at= :updated_at WHERE id = :id";
        $stmt = $conn->prepare($sql);
        $updated_at = date('Y-m-d');
        $stmt->bindParam(':id', $user->id);
        $stmt->bindParam(':name', $user->name);
        $stmt->bindParam(':email', $user->email);
        $stmt->bindParam(':mobile', $user->mobile);
        $stmt->bindParam(':updated_at', $updated_at);
        $result = $stmt->execute();
      if($result){
        $response = ['status' =>1, 'message'=> 'Record Updated Successifully'];


      }else{
        $response = ['status' => 0, 'message' => 'Failed to Update record'];
      }

        echo json_encode($response);

        //echo $response;
      
        break;


        case "DELETE": 
          $sql = "DELETE FROM users WHERE id =:id";
      //echo  $_SERVER['REQUEST_URI']; exit;

      $path= explode('/', $_SERVER['REQUEST_URI']); 

        
        $stmt= $conn->prepare($sql);
        $stmt->bindParam(':id', $path[4]);
        if($stmt->execute()){
          $response = ['status' => 1, 'message' => 'Record deleted successifully'];
        }else{
          $response = ['status' => 0, 'message' => 'Failed to delete record'];
        }
        echo json_encode($response);
    
  
}

?>