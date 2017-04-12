# mean-stack-boilerplate


## What is this
MEAN stack boilerplate - with Angular 2 
(will be updated to Angular 4)

## Check 
https://www.npmjs.com/package/mean-stack-boilerplate

## How to run/install
+ `npm install`
+ `node server.js`
+ `npm start`
+ Navigate to `localhost:3000/`


## File naming convention 



## Other command
+ `npm run lint` -> Linting
+ `npm run debug`
+ `NODE_ENV=test mocha --reporter spec app/tests` `set NODE_ENV=test`  `mocha --reporter spec app/tests`




## Download chrome extension
+ https://chrome.google.com/webstore/detail/augury/elgalmkoelokbchhkhacckoklkejnhcd/related

+ AngularJS Batarang



## Testing
+ Unit tests 
+ E2E tests
+ Testing Express
+ Mocha
+ Should.js
+ Super test modules

+ Testing for front-end Angular 2 - Jasmine
+ Karma - test runner
+ PhantomJS browser launcher - headless browser



## Testing convention
+ `describe(description, callback)`
+ `it(description, callback)`
+ `before(callback)`
+ `beforeEach(callback)`
+ `after(callback)`
+ `afterEach(callback)`




## MongoDB example queries
+ `db.products.insert({
  title: 'Product1',
  stock: 15,
  price: 112.36
})`
+ `db.products.find()`
+ `db.products.update({},
  { $set: {title: 'MEANshop'} },
  { multi: true}
)`
+ `db.products.remove({})`
+ `db.products.aggregate([{
  $group: {
    _id: null,
    total: { $sum: "$price" }
  }
}])`
+ `db.products.aggregate([
  { $match: {title: 'Product' }},
  { $group: { _id: '$title', total: { $sum: "$price" } }}
])`
+ Aggregators : `$sum,$match,$group,$sort`
### Find
+ `Model.find(conditions, [fields], [options], [callback])`
+ `Model.findById(id, [fields], [options], [callback])`
+ `Model.findOne(conditions, [fields], [options], [callback])`
+ ``


### Update
+ 
