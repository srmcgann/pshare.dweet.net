<?
  require('db.php');

  $data = json_decode(file_get_contents('php://input'));
  $user = mysqli_real_escape_string($link, $data->{"user"});
  $passhash = mysqli_real_escape_string($link, $data->{"passhash"});
  $basicIcons = mysqli_real_escape_string($link, $data->{"basicIcons"});
  $success = false;
  if($user && $passhash){
    $sql = "SELECT * FROM users WHERE (LOWER(REPLACE(name, ' ', '')) = LOWER(REPLACE('$user', ' ', '')) OR LOWER(REPLACE(email, ' ', '')) = LOWER(REPLACE('$user', ' ', ''))) AND passhash = \"$passhash\"";
    $res = mysqli_query($link, $sql);
    if(!mysqli_num_rows($res)) die();
    $row = mysqli_fetch_assoc($res);
    $userID = $row['id'];
    $val = $basicIcons == '0' ? 0 : 1;
    $sql = 'UPDATE users SET basicIcons = "'.$val.'" WHERE id = ' . $row['id'];
    mysqli_query($link, $sql);
    $success = true;
  }
  echo json_encode([$success, $basicIcons, $val]);
?>
