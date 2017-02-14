@echo off
echo --------------------------------------------------
echo Angular 2 application build
echo --------------------------------------------------
set NGOE="c:\Data\tests\navtest"

pushd %NGOE%\dist
ng build  --prod --base-href "/ng/index.html"
popd
