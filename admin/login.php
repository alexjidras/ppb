<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if(!empty($_POST["username"]) && !empty($_POST["password"])) {
        $username = $_POST["username"];
        $password = $_POST["password"];
        
        if($username == 'root' && $password == 'password') {
            $_SESSION["authenticated"] = 'true';
            header('Location: ./');
        }   
    }   
	$err = true;
}?>
<!DOCTYPE html>
<html>
    <head>
        <title>Login</title>
        <link rel="shortcut icon" type="image/png" href="../assets/img/favicon.png"/>
        <link href="../assets/css/fonts.css" rel="stylesheet">         
        <link rel="stylesheet" href="../assets/css/login.css">
    </head>
    <body>
    <header></header>
    <div class="container">
	    <div class="main">
	    	<div class="title-box">
	    		Log In
	    	</div>
	    	<form name="login" method="POST" action="<?php echo $_SERVER['PHP_SELF']; ?>">
	    		<input name="username" type="text" placeholder="username" class="login-input" required>
	    		<input name="password" type="password" placeholder="password" class="login-input" required>
	    		<button class="btn-primary login-submit" type="submit">Log in</button>
	    	</form>
	    	<?php if(@$err) {?>
	    		<script>
	    			var form = document.forms['login'].elements;
	    			for (var i = 0; i<2; i++) {
	    				form[i].classList.add("input-invalid");
	    				form[i].addEventListener("focus", function lis() {
	    					for(var i=0; i<2; i++) {
		    					form[i].classList.remove("input-invalid");
		    					form[i].removeEventListener("focus", lis);
		    				}
	    				});
	    			}
	    		</script>
	    	<?php } ?>
	    </div>
	</div>
    </body>
</html>
