<?
  require('db.php');
  $data = json_decode(file_get_contents('php://input'));
  $user = mysqli_real_escape_string($link, $data->{"user"}); 
  $passhash = mysqli_real_escape_string($link, $data->{"passhash"});
  $error = "no (or unknown) error";
  if($user && $passhash){
    $sql = 'SELECT * FROM users WHERE (name LIKE "'.$user.'" OR email LIKE "'.$user.'") AND passhash = "'.$passhash.'"';
   $res = mysqli_query($link, $sql);
   $success=false;
   if(mysqli_num_rows($res)){
     $row = mysqli_fetch_assoc($res);
     $success = true;
     $user = [
       'name'            => $row['name'],
       'email'           => $row['email'],
       'passhash'        => $row['passhash'],
       'currentLocation' => $row['currentLocation'],
       'id'              => $row['id'],
       'avatar'          => $row['avatar'],
       'admin'           => $row['admin']
     ];
   } else {
     $error = "user not found!";
   }
  }else{
    $error = "user name or passhash not provided!";
  }
  echo json_encode([$success, $user, $error]);
?>
