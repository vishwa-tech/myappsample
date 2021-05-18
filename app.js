#!/bin/bash
yum -y update
yum -y install httpd
chkconfig httpd on
service httpd start
echo "<html><h1>Hello! Apjas This is your Web Server!</h1></html>" > /var/www/html/inde