**Movies Library**
----
The API is rest API and requests for movies that are stored in movie library where admin can add new movies and edit the details of a movie.

**Get Moives**
----
* **URL** 
/moives

* **Method** 

`GET`

* **URL Parameters** 
None

* **Data Parameters** 
`name:` 
  type[String]
  required: true
genre: 
  type[String]
  required: true
rating:
  type[Number]
  min:1
  max:5
amount:
  type[Number]
  required: true
available:
  type[Boolean]
  default:false

* **Success Response** 
Code: 200 <br />
Response: {
            "available": false,
            "_id": "5dd2017886cea5610ac550e9",
            "name": "Batman vs Superman6",
            "genre": "Action",
            "rating": 2,
            "amount": 11,
            "__v": 0
  },
