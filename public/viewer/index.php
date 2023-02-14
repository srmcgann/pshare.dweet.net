<?
  if(!($url = $_GET['url'])) die();
?>
<!DOCTYPE html>
<html>
  <head>
    <style>
      html, body{
        margin: 0;
        background: #000;
        width: 100%;
        min-height: 100vh;
        overflow: hidden;
      }
      .main{
        position: absolute;
        width:100%;
        height: 100%;
      }
      image,video,audio{
        object-fit: contain;
      }
    </style>
  </head>
  <body>
    <div class="main"></div>
    <script>
      fetchObj = sendData => {
        return {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(sendData),
        }
      }
      let sendData = {
        url: '<?=$url?>'
      }
      fetch('asset.php', fetchObj(sendData))
      .then(res=>res.blob()).then(data=>{
        type = ''
        if(data.type.indexOf('image')!=-1) type = 'image'
        if(data.type.indexOf('video')!=-1) type = 'video'
        if(data.type.indexOf('audio')!=-1) type = 'audio'
        let blob = data
        let url = URL.createObjectURL(blob)
        switch(type){
          case 'image':
            resource = new Image()
          break
          case 'video':
            resource = document.createElement('video')
          break
          case 'audio':
            resource = document.createElement('audio')
          break
        }
        resource.src = url
        resource.style.width="100%"
        document.querySelector('.main').appendChild(resource)
      })
    </script>
  </body>
</html>
