echo "instalando módulos"
termux-change-repo
ls
pkg upgrade
pkg update 
pkg install node-js
pkg install nodejs-lts 
pkg upgrade
pkg update
node .