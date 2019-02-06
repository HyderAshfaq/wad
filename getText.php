<!DOCTYPE html>
<html>
<body>

<form action="getText.php" method="post">
    URL: <input type="text" name="url"><br>
    <input type="submit">

    <ol>
        <?php display() ?>
    </ol>
</form>

</body>
</html>
<?php
function display()
{
    $name = $_POST["url"];
    $string = array("https://stackoverflow.com/questions/9607903/get-dpmain-name-from-given-url",
        "https://website-seocjecker.com/extract-url-to-domain/#arearresult",
        "https://www.facebook.com/groups/1944204655670756/","https://localhost/waducpf18/finalterm/",
        "https://www.youtube.com/watch?v=LSDxjp6sWYQ","https://epaper.dawn.com/?page=03_02_2019_001",
        "https://www.google.com/search?q=extract","abcd");
    $pattern = '/\w*:\/\/[\w*\.]?([\w\.\-]+).*/';
    foreach ($string as $arr)
    {
        if(preg_match( $pattern, $arr , $matches))
        {
            echo "<li>$matches[1]</li>";
        }
        else{
            echo "not found";
        }
    }

}



