#!/bin/bash

# Prompt for filename
echo "Enter HTML file name (without .html extension): "
read filename

# Create HTML file with boilerplate content
echo "<!DOCTYPE html>
<html lang=\"en\">
<head>
    <meta charset=\"UTF-8\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <title>My HTML Page</title>
</head>
<body>
    <h1>ሰላም, Group 4!</h1>
    <p>This is a new HTML file created using a bash script.</p>
</body>
</html>" > "$filename.html"

echo "HTML file '$filename.html' created."
