# Plant Shop POC 🌿

### Technologies
* React, React Router, React Hooks, React Testing Library

### See live
https://wso09.csb.app/

### Project Requirements
* Create ecommerce site
* Users can browse products
* Add products to cart
* Remove from cart
* Navigate between browsing products and cart
* Users can checkout by using a form to collect their information
* On submit, the user is alerted that their payment was processed

### Notes for Future Developers
* For this Proof of Concept, a mock server is used rather than a live API. 
* * **[GET]** * to `http://localhost:3333/plants`: returns an array of objects of the following form
```js
{
    name: "Peperomia Rosso",
    id: 143,
    scientificName: "Peperomia caperata rosso",
    difficulty: "easy",
    light: "direct",
    img:
      "https://cdn.shopify.com/s/files/1/2781/9558/products/PEPEROMIA_ROSSO-1_800x.png?v=1587156590",
    sizes: ["small"],
    watering: 2,
    description:
      "Rosalia is a stunner with glossy green leaves accompanied by bright red undersides. Her oval shaped leaves are deeply grooved, adding depth to her figure. Flower spikes will appear with bright light, adding even more character to this absolute beaut.",
    price: 21,
  }
```

### Testing 
* Exists in `src/components/CheckoutForm.test.js`
* Verifies:
  * Checkout form renders without errors.
  * Success message appears when form filled out with valid data

### Future Improvements
* Make UI responsive to small screens
* Further develop checkout payment- add fields for credit cards and leverage Stripe for payment functionality
* Connect to your true database of plants for sale
* Leverage Yup for additional form validation


### Test the Checkout Form
* Run the test runner and ensure that `src/components/CheckoutForm.test.js` is correctly called.
* Fill out code necessary to test that that Checkout form renders without errors.
* Fill out code necessary to test that when all form inputs are filled with valid data, a success message appears.
* Make sure the tests are passing, and make sure you can cause the tests to fail purposefully, so that you know the tests are truly working.


