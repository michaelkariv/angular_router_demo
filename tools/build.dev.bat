@echo off
echo --------------------------------------------------
echo Angular 2 application build
echo --------------------------------------------------
set NGOE="c:\Data\oeng"

pushd %NGOE%\dist
ng build
popd
