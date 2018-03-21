var products = [
  { referenceNumber: 1231, name: "Super Lite Mat", price: 10 },
  { referenceNumber: 1232, name: "Power Mat", price: 20 },
  { referenceNumber: 1233, name: "Block", price: 30 },
  { referenceNumber: 1234, name: "Meditation cushion", price: 30 },
  { referenceNumber: 1235, name: "The best T-shirt", price: 200 },
  { referenceNumber: 1236, name: "The cutest yoga pants", price: 300 },
  { referenceNumber: 1237, name: "Bring Yoga To Life", price: 30 },
  { referenceNumber: 1238, name: "Light On Yoga", price: 10 }
]


var product = products.find(function(product) {
  if (product.referenceNumber === 1236) {
  	return product ;
  }
});

console.log(product);
// expected output: { referenceNumber: 1236, name: "The cutest yoga pants", price: 300 };

while true {...} if false {..} break
