## Stop server

pm2 delete 0

## Build app

cd ieps-react-dash

eval `ssh-agent -s`
# senha: conceptu123
ssh-add ~/.ssh/gitlab_ieps_regionalizacao
git pull origin develop

rm -rf ./.cache
rm -rf ./public
npm run ccache
npm run build

## Restart server
pm2 start "npm run serve"
# pm2 start iepsdata

## Helpers
pm2 start "./node_modules/.bin/gatsby develop -p 9000" --attach

pm2 start "npm run serve" --attach
pm2 l
pm2 delete 0
