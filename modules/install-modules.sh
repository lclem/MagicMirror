#!/bin/bash

for d in $(find . -type d -d 1)
do
    ( cd "$d" && pwd && npm install )
done