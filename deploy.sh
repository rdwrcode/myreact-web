npm run build &&
git add . &&
git commit -am "rebuild" &&
git checkout -B gh-pages &&
git add -f build &&
git commit -am "Rebuild website" &&
git filter-branch -f --prune-empty --subdirectory-filter build &&
git push -f origin gh-pages &&
git checkout -