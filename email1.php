<!DOCTYPE html>
<html>
<head>
	<title>DATA OF CART</title>
</head>
<body>
    <h2 style="text-align:center; text-shadow: 3px 3px 3px blue; font-size: 60px;">Your data is safe</h2>
    <h2  style="text-align:center; text-shadow: 3px 3px 3px blue; font-size: 50px;">Your Query is as follows:</h2>
 
	<?php
	$orderNo=$_POST['orderN'];
    $name=$_POST['name'];
    $query=$_POST['comment'];

	$conn=new mysqli('localhost', 'root', '', 'email');
	if ($conn->connect_error) {
		die('fail');
	}else{


		 	$sql="INSERT INTO contact (orderNo,name,query)
                           VALUES ('$_POST[orderN]','$_POST[name]', '$_POST[comment]')";


		if ($conn->query($sql) ==TRUE) {
          echo "New record created successfully";
          echo "<br>";
          echo "details:" .$name.  "<br>". "your query is" .$query;
         } else {
            echo "eroor:" . $sql . "<br>" . $conn->error;
         }

        echo "<br>";
        echo "<br>";
        echo "<br>";
        echo "<br>";

        $query2= "SELECT * FROM contact";
        $result=mysqli_query($conn,$query2);
        while($row=mysqli_fetch_array($result)){

            echo " ".$row['name']. " ".$row['query']."<br>";
        }

        $conn->close();
        
	}



	?>

</body>
</html> 