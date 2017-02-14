
##  router.navigateByUrl() causes navigation to root and reload, angular 2.4.7

When I use router.navigate() or navigateByUrl(), I get a reload - a 
call to the root. The Chrome Dev tools console shows
```
Navigated to http://localhost/
```

Navigation via links with 
``` <a [routerLink]=```
works correctly.


# app
 - was generated using angular-cli. Components were generated then modified.
 - has 3 components test1, test11 (a child of test1) and test2
 - navigating between test11 and test2 works fine via anchor tag links with 
 [routerLink] (declarative)
 - navigating from test2 to test11 by using (click) event 
 and programmatic (imperative) navigation call 
 ``` 
 this.router.navigateByUrl('/test1/test11');
 ```
 
# environment

```
   angular-cli: 1.0.0-beta.28.3
   node: 7.5.0
   os: win32 x64
   @angular/common: 2.4.7
   @angular/compiler: 2.4.7
   @angular/core: 2.4.7
   @angular/forms: 2.4.7
   @angular/http: 2.4.7
   @angular/platform-browser: 2.4.7
   @angular/platform-browser-dynamic: 2.4.7
   @angular/router: 3.4.7
   @angular/compiler-cli: 2.4.7
```

# code
Is published to GitHub, [published to GitHub](https://github.com/michaelkariv/angular_router_demo)
``` 
https://github.com/michaelkariv/angular_router_demo
```

# served by ng serve using production environment
```
serve --host localhost --port 80 --live-reload false  -prod
```

