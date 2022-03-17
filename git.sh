#!/bin/bash

datetime=$(date "+%Y-%m-%d_%H:%M_%Z")

echo git add .
git add .

echo git commit -m $datetime
git commit -m \"$datetime\"

echo git push -u origin main
git push -u origin main
