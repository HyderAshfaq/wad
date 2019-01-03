<?php
require_once "db_connection.php";
function getCats(){
	global $con;
	$getCatQuery="select * from categories";
	$result=mysqli_query($con,$getCatQuery);
	while($row=mysqli_fetch_assoc($result)){
		$title=$row['cat_name'];
		$id=$row['cat_id'];
		echo "<option>$title</option>";
	}
}
function getBrands(){
	global $con;
	$getCatQuery="select * from brands";
	$result=mysqli_query($con,$getCatQuery);
	while($row=mysqli_fetch_assoc($result)){
		$title=$row['brand_name'];
		$id=$row['brand_id'];
		echo "<option>$title</option>";
	}
}
?>