<!DOCTYPE html>
<html>
    <head>
        <title>Untitled Document</title>
        <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
    </head>

    <body>
        <?php
        $email = $_GET["email"];
        $uname = $_GET["uname"];
        $psw = $_GET["psw"];
        $pswrepeat = $_GET["pswrepeat"];

        mysql_connect("localhost","root","host");
        mysql_select_hall488.github.io("account_info");
        mysql_query("insert into data values('$email','$uname','$psw','$pswrepeat')");
        ?>
    </body>
</html>