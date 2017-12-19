const apiKey = 'Qgk04WgkFBpq6hBpZod1n_sZqlJiAY1kA-Hmx8tA0FQRNQm4gjj2bb_33MD1wa5SqJU3jKDp7zSSpGWvggnbE';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`);
  }
}
