class product {
  productId(id1, id2, id3) {
    (this.p1 = id1), (this.p2 = id2), (this.p3 = id3);
  }
  productDetails() {
    console.log("the product id is " + this.p1);
  }
}

// class product2 extends product {
//   productDetails2() {
//     console.log("other id's are" + this.p2);
//   }
// }

class product3 extends product {
  productDetails3() {
    console.log("other id's are" + this.p3);
  }
}

var pr = new product3();
pr.productId(1, 2, 3);
pr.productDetails();
//pr.productDetails2();
pr.productDetails3();

//Creating an class from an existing class is known as inheritances