!#/bin/bash
nodemon main.js & sleep 5; kill `ps | grep node | tr -s " " | tr " " ";" | cut -d \;  -f 2`