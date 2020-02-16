npm run build &&
git checkout gh_pages &&
rm -rf *.html *.js *.css *.png &&
mv dist/* ./ &&
rm -rf dist &&
git add . &&
git commit -v "update" &&
git push --set-upstream webpack11 gh_pages &&
git checkout -
