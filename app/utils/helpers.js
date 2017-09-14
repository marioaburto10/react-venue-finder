// Include the axios package for performing HTTP requests (promise based alternative to request)
import axios from "axios";

// Geocoder API
const geocodeAPI = "35e5548c618555b1a43eb4759d26b260";

// Helper Functions
const helpers = {
	getLongAndLat: (zipCode) => {
		console.log(zipCode);

		// Figure out the geolocation
	    const queryURL = "http://api.opencagedata.com/geocode/v1/json?query=" + zipCode + "&pretty=1&key=" + geocodeAPI;

	    return axios.get(queryURL).then((response) => {
	    	console.log("Axios response" , response.data.results);
	    	return response.data.results[0].geometry;

	    });
	}
};

// Export the helpers function
export default helpers;