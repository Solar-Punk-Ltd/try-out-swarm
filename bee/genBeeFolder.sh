#!/bin/bash

GEN_PATH=./

dir_name=bee-data-dir

mkdir -p "$GEN_PATH/$dir_name"

touch "$GEN_PATH/$dir_name/password"
  
password=$(openssl rand -base64 32 | cut -c1-32)
  
echo "$password" > "$GEN_PATH/$dir_name/password"