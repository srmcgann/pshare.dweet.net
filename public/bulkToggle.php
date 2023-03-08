<?
  require('db.php');

  $data = json_decode(file_get_contents('php://input'));
  $user = mysqli_real_escape_string($link, $data->{"user"});
  $passhash = mysqli_real_escape_string($link, $data->{"passhash"});
  $mode = mysqli_real_escape_string($link, $data->{"mode"});
  $list = json_decode($data->{"list"});
  $success = false;
  $column = '';
  $newVal = '';
  if($user && $passhash && sizeof($list) && $mode){
    $sql = "SELECT * FROM users WHERE (LOWER(REPLACE(name, ' ', '')) = LOWER(REPLACE('$user', ' ', '')) OR LOWER(REPLACE(email, ' ', '')) = LOWER(REPLACE('$user', ' ', ''))) AND passhash = \"$passhash\"";
    $res = mysqli_query($link, $sql);
    if(!mysqli_num_rows($res)){
      echo json_encode([$success, $mode, $user, $list]);
      die();
    }
    $row = mysqli_fetch_assoc($res);
    $userID = $row['id'];
    switch($mode){
      case 'private': $column = 'private'; $newVal = '1'; break;
      case 'public': $column = 'private'; $newVal = '0'; break;
    }
    if($column=='' || $newVal==''){
      echo json_encode([$success, $mode, $user, $list]);
      die();
    }
    for($i = 0; $i < sizeof($list); ++$i){
      $fileID = intval(mysqli_real_escape_string($link, $list[$i]));
      $sql = 'UPDATE files SET '.$column.' = '.$newVal.' WHERE userID = '.$userID.' AND id = ' . $fileID;
      mysqli_query($link, $sql);
    }
    $success = true;
  }
  echo json_encode([$success, $mode, $user, $list]);
?>
