npm run build &&
git checkout gh-pages &&
rm -rf *.html *.js *.css *.png *.jpg &&
mv dist/* ./ &&
rm -rf dist &&
git add . &&
git commit -v "update" &&
git push &&
git checkout -
