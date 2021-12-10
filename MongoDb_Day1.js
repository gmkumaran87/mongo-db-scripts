// Find all the information about each products
db.collection.find({},
{
  id: 1,
  product_color: 1,
  product_material: 1,
  product_name: 1,
  //product_price: 1,
  
})

// 2. Find the product price which are between 400 to 800

db.collection.find({
  product_price: {
    $gt: 400,
    $lt: 800
  }
})

// 3. Find the product price which are not between 400 to 600

db.collection.find({
  product_price: {
    "$not": {
      $gt: 400,
      $lt: 600
    }
  }
})

// 4. List the four product which are grater than 500 in price 
>db.products.find({product_price: {$gt:400}}).limit(4)

// 5. Find the product name and product material of each products

db.collection.find({},
{
  product_name: 1,
  product_material: 1
})

//6. Find the product with a row id of 10

db.collection.find({
  id: "10"
})

// 7. Find all products which contain the value of soft in product material 
db.collection.find({
  product_material: "Soft"
})

// 8. Find products which contain product color indigo  and product price 492.00
db.collection.find({
  product_color: "indigo",
  product_price: 492.00
})
