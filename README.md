# Test changes in NG-PACKGR 19

Not working

+ delete package-lock.json
+ set ng-packgr to version 19.0.1
+ npm i
+ npm link @test/assets
+ npm run build

> This will trigger the error

Working

+ delete package-lock.json
+ set ng-packgr to version 18.2.1
+ npm i --legacy-peer-deps
+ npm link @test/assets
+ npm run build

> Build will run just fine (as always)
