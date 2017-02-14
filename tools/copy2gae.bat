@echo off
echo --------------------------------------------------
echo Angular 2 application build
echo --------------------------------------------------
set GAE="c:\Data\organizeat\gae\ng"
set NGOE="c:\Data\oeng"
set BASEHREF="/ng/"
set XCOPYOPT=/eysko

pushd %NGOE%
echo --------------------------------------------------
echo Build succeeded
echo --------------------------------------------------
xcopy %XCOPYOPT% dist %GAE%
echo --------------------------------------------------
echo copy to GAE succeeded
echo --------------------------------------------------
popd
