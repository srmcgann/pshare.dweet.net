<?
  require('db.php');

  $data = json_decode(file_get_contents('php://input'));
  $user = mysqli_real_escape_string($link, $data->{"user"});
  $passhash = mysqli_real_escape_string($link, $data->{"passhash"});
  $src = mysqli_real_escape_string($link, $data->{"src"});
  $dest = mysqli_real_escape_string($link, $data->{"dest"});
  $success = false;
  if($user && $passhash){
    $sql = "SELECT * FROM users WHERE (LOWER(REPLACE(name, ' ', '')) = LOWER(REPLACE('$user', ' ', '')) OR LOWER(REPLACE(email, ' ', '')) = LOWER(REPLACE('$user', ' ', ''))) AND passhash = \"$passhash\"";
    $res = mysqli_query($link, $sql);
    if(!mysqli_num_rows($res)) die();
    $row = mysqli_fetch_assoc($res);
    $userID = $row['id'];
    $sql = 'SELECT * FROM files WHERE id = ' . $dest;
    $res = mysqli_query($link, $sql);
    if(mysqli_num_rows($res)){
      $row = mysqli_fetch_assoc($res);
      if($row['type'] == 'folder'){
        $newLocation = $row['location'] . $row['name'] . '/';
        $sql = 'UPDATE files SET location = "'.$newLocation.'" WHERE id = '. $src;
        mysqli_query($link, $sql);
      }
      $success = true;
    }
  }
  echo json_encode([$success,$sql,$newLocation]);
?>
