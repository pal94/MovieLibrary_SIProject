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

  None

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
  
* **Error Response**

  Code: 500 <br />
  Response: {
    "error": {
        "message": "Cast to ObjectId failed for value \"get\" at path \"_id\" for model \"movie\"",
        "name": "CastError",
        "stringValue": "\"get\"",
        "kind": "ObjectId",
        "value": "get",
        "path": "_id"
    }
}

* **Sample Call**

   ```app.get("/movies", async(req, res)=>{
   await fetch('http://ec2-3-82-160-10.compute-1.amazonaws.com:3005/movies')
       .then(response => response.json())
       .then(data => {
         let arr = [];

         for(var i =0;i< data.movies.length; i++){
             arr.push(data.movies[i]);
         }

         res.render("index", {mov:arr});
       })    
         .catch(err => {
           console.log("could not get the data");
       });
    
  });```
  
**Add Movies**
----

* **URL**

  /movies

* **Method**

  `POST`
  
* **URL Parameters** 

  None
  
* **Data Parameters** 

  name: 
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

  Code: 201 Created <br />
  Response: {
    "message": "Movie added successfully",
    "movie": {
        "available": false,
        "_id": "5dd25f946574f770d7428407",
        "name": "Batman vs Superman7",
        "genre": "Drama",
        "rating": 2,
        "amount": 11,
        "__v": 0
    }
}

* **Error Response**

  Code: 500 Internal Serve Error<br />
  Response: {
    "error": {
        "errors": {
            "name": {
                "message": "Path `name` is required.",
                "name": "ValidatorError",
                "properties": {
                    "message": "Path `name` is required.",
                    "type": "required",
                    "path": "name"
                },
                "kind": "required",
                "path": "name"
            },
            "genre": {
                "message": "Path `genre` is required.",
                "name": "ValidatorError",
                "properties": {
                    "message": "Path `genre` is required.",
                    "type": "required",
                    "path": "genre"
                },
                "kind": "required",
                "path": "genre"
            },
            "rating": {
                "message": "Path `rating` is required.",
                "name": "ValidatorError",
                "properties": {
                    "message": "Path `rating` is required.",
                    "type": "required",
                    "path": "rating"
                },
                "kind": "required",
                "path": "rating"
            },
            "amount": {
                "message": "Path `amount` is required.",
                "name": "ValidatorError",
                "properties": {
                    "message": "Path `amount` is required.",
                    "type": "required",
                    "path": "amount"
                },
                "kind": "required",
                "path": "amount"
            }
        },
        "_message": "movie validation failed",
        "message": "movie validation failed: name: Path `name` is required., genre: Path `genre` is required., rating: Path `rating` is required., amount: Path `amount` is required.",
        "name": "ValidationError"
    }
}
    
