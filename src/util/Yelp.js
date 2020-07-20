require('dotenv').config()


// const apiKey = process.env.API_KEY; // Insert API key here.

// const apiKey = 'ef5GDqXKo-gYP6FjG0s4Ve47C7OHe4PPoUIFyltnJPMG67PWnIY4MnWdOyRPRJlcfluV3slRPHzm9bfhn_XTr_gcQXR03rALQUMZsIprExElL6xXpUx9P66voWgBW3Yx'; // Insert API key here.


const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
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
    });
  }
};

export default Yelp;
