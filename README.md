# mean-stack-boilerplate


## What is this
MEAN stack boilerplate - with CRUD architecture 
MongoDB - Express - Angular 2 - NodeJS 
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
+ `Model.update(conditions, update, [options], [callback])`
+ `Model.findByIdAndUpdate(id, [update], [options], [callback])`
+ `Model.findOneAndUpdate([conditions], [update], [options], [callback])`


### Delete
+ `Model.remove(conditions, [callback])`
+ `Model.findByIdAndRemove(id, [options], [callback])`
+ `Model.findOneAndRemove(conditions, [options], [callback])`



## Deploy on cloud service platform
+ Heroku : `foreman start`-`heroku create`-`git push heroku master`- add single web dyno `heroku ps:scale web=1`-check live `heroku open`
+ Firebase
+ Google cloud platform


## Git deploy
+ `git init`
+ `git add .`
+ `git commit -m "first commit"`


## Settings
+ `NODE_ENV=production`



## Angular SEO for crawler
+ Replace hash with HTML5 routing mode

