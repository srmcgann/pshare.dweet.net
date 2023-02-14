<?
  $src = fopen($argv[1], 'r');
  //stream_set_blocking($src, true);
  
  do{
    $data = fread($src, 1024*64);
    if($data){
      echo $data;
      flush();
      //ob_flush();
    }
  }while($data);
?>
