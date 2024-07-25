<?php
  // Connect to the database
  $servername = "sql207.infinityfree.com";
  $username = "if0_36951033";
  $password = "73kIn6Bkr2HW";
  $dbname = "if0_36951033_Subhom";

  $conn = new mysqli($servername, $username, $password, $dbname);

  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  // Get the form data
  $Name = $_POST['Name'];
  $Mail = $_POST['Mail'];
  $Feedback = $_POST['Feedback'];

  // Insert the data into the database
  $sql = "INSERT INTO Data (Name, Mail, Feedback) VALUES ('$Name', '$Mail', '$Feedback')";

  if ($conn->query($sql) === TRUE) {
     $shouldRedirect = true; // Set this based on your conditions

    if ($shouldRedirect) {
        $url = "submit.html"; // The URL you want to open
        echo "<script type='text/javascript'>window.location.href='$url';</script>";
    }
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }

  $conn->close();
?>