const apiKey = 'HEdbORV56upY5HqgX8kkCf9VtpMsp3ACoYFzorpYMCiChRlBwt4AnV1CSsBviAfHBvN9uGl7WamXtG_Sp3utmVL0rYi3YpMDQWJp2akn7X6MkvUkXgO7rA8KD7k2WnYx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
         Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
    })
  }
}

export default Yelp;
