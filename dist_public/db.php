<?
  $db_user="user";
  $db_pass=explode("\n", file_get_contents('/home/cantelope/plorgpw'))[0];
  $db_host="localhost";
  $db="pshare";

  $baseAssetsURL = 'https://assets.dweet.net/misc';
  $assetsDir = '/var/www/html/whitehot_assets/misc';
  
  $link = mysqli_connect($db_host, $db_user, $db_pass, $db);

?>

