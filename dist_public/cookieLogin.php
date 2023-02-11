<?
  require('db.php');
  $data = json_decode(file_get_contents('php://input'));
  $user = mysqli_real_escape_string($link, $data->{"user"}); 
  $passhash = mysqli_real_escape_string($link, $data->{"passhash"});
  $location = mysqli_real_escape_string($link, $data->{"location"});
  $error = "no (or unknown) error";
  if($user && $passhash){
    $sql = 'SELECT * FROM users WHERE (name LIKE "'.$user.'" OR email LIKE "'.$user.'") AND passhash = "'.$passhash.'"';
   $res = mysqli_query($link, $sql);
   $success=false;
   if(mysqli_num_rows($res)){
     $row = mysqli_fetch_assoc($res);
     $userID = $row['id'];
     $success = true;
     $user = [
       'name'            => $row['name'],
       'email'           => $row['email'],
       'passhash'        => $row['passhash'],
       'currentLocation' => $location,
       'id'              => $row['id'],
       'avatar'          => $row['avatar'],
       'admin'           => $row['admin']
     ];
     $sql = 'UPDATE users SET currentLocation = "'.$location.'" WHERE id = ' . $userID;
     mysqli_query($link, $sql);
   } else {
     $error = "user not found!";
   }
  }else{
    $error = "user name or passhash not provided!";
  }
  echo json_encode([$success, $user, $error]);
?>
