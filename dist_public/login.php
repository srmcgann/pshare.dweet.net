<?
  require('db.php');
  $data = json_decode(file_get_contents('php://input'));
  $user = mysqli_real_escape_string($link, $data->{"user"}); 
  $password = mysqli_real_escape_string($link, $data->{"password"});
  if($user && $password){
    $sql = 'SELECT * FROM users WHERE name LIKE "'.$user.'" OR email LIKE "'.$user.'"';
   $res = mysqli_query($link, $sql);
   $success=false;
   $error="no (or unknown) error";
   if(mysqli_num_rows($res)){
     $row = mysqli_fetch_assoc($res);
     $passhash = $row['passhash'];
     if(password_verify($password, $passhash)){
       $success = true;
       $user = [
         'name'     => $row['name'],
         'email'    => $row['email'],
         'passhash' => $row['passhash'],
         'id'       => $row['id'],
         'avatar'   => $row['avatar'],
         'admin'    => $row['admin']
       ];
     } else {
       $error = "incorrect password!";
     }
   } else {
     $error = "user not found!";
   }
  }else{
    $error = "user name or password not provided!";
  }
  echo json_encode([$success, $user, $error]);
?>
