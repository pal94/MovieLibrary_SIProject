**Movies Library**
----
The API is rest API and requests for movies that are stored in movie library where admin can add new movies and edit the details of a movie.

**Technologies**

Mongo DB
Node.js
Express

**Get Moives**
----
* **URL** 

  http://ec2-3-83-241-106.compute-1.amazonaws.com:3005/movies

* **Method** 

  `GET`

* **URL Parameters** 

  None

* **Data Parameters** 

  None

* **Success Response** 

  Code: 200 OK <br />
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

  http://ec2-3-83-241-106.compute-1.amazonaws.com:3005/movies

* **Method**

  `POST`

* **Request Payload** *

  Headers
  Body
  
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
  Response: 
  
  ```{
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
}```

* **Sample Call**
  ```fetch("http://ec2-3-82-160-10.compute-1.amazonaws.com:3005/movies", {
      method: "POST",
      headers:{
          'Accept': 'application/json',
          'Content-Type':'application/json'
      },
      body: JSON.stringify(b)
  })```
  

**Show Movie By Id**
----

* **URL**

  /movies/:id

  http://ec2-3-83-241-106.compute-1.amazonaws.com:3005/movies/5dd1a861ed7ba55738b145db

* **Method**

  `GET`
  
* **URL Parameters** 

  id: 
    type[mongoose.Schema.Types.ObjectId]
  
* **Data Parameters**
  
  None

* **Success Response** 

  Code: 200 OK <br />
  Response: 
  
    Sample URL: movies/5dd1d1be8ab3d858e51ca8e6
    Result: {
    "movie": {
        "available": false,
        "_id": "5dd1d1be8ab3d858e51ca8e6",
        "name": "Batman vs Superman5",
        "genre": "Action",
        "rating": 2,
        "amount": 11
    }
}

* **Error Response** *
 
  Code: 500 Internal Server Error <br />
  Response: 
  
    {
    "error": {
        "message": "Cast to ObjectId failed for value \"5dd1d1be8ab3d858e51ca8e65\" at path \"_id\" for model \"movie\"",
        "name": "CastError",
        "stringValue": "\"5dd1d1be8ab3d858e51ca8e65\"",
        "kind": "ObjectId",
        "value": "5dd1d1be8ab3d858e51ca8e65",
        "path": "_id"
    }
}

* **Sample Call** *
  `await fetch('http://ec2-3-83-241-106.compute-1.amazonaws.com:3005/movies/:id)`
  

**GET USERS TO EDIT**
----
* **URL**

  /movies/:id/edit
  
  http://ec2-3-83-241-106.compute-1.amazonaws.com:3005/movies/5dd1a861ed7ba55738b145db/edit
* **Method**

  `GET`
  
* **URL Parameters** 

  id: 
    type[mongoose.Schema.Types.ObjectId]
  
* **Data Parameters**
  
  None

* **Success Response** 

  Code: 200 OK <br />
  Response: 
   
   {
    "movie": {
        "available": false,
        "_id": "5dd1d1be8ab3d858e51ca8e6",
        "name": "Batman vs Superman5",
        "genre": "Action",
        "rating": 2,
        "amount": 11
    }
}

* **Error Response** *
 
  Code: 500 Internal Server Error <br />
  Response: 
  
    {
    "error": {
        "message": "Cast to ObjectId failed for value \"5dd1d1be8ab3d858e51ca8e65\" at path \"_id\" for model \"movie\"",
        "name": "CastError",
        "stringValue": "\"5dd1d1be8ab3d858e51ca8e65\"",
        "kind": "ObjectId",
        "value": "5dd1d1be8ab3d858e51ca8e65",
        "path": "_id"
    }
}

* **Sample Call** *
  `await fetch('http://ec2-3-83-241-106.compute-1.amazonaws.com:3005/movies/:id/edit)`
  

**Edit Users**
----

* **URL**

  http://ec2-3-83-241-106.compute-1.amazonaws.com:3005/movies/:id

* **Method**

  `PUT`

* **Request Payload** *

  Headers
  Body
  
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

  Code: 200 OK <br />
  Response: {
   
   {
    "movie": {
        "available": true,
        "_id": "5dd1d1be8ab3d858e51ca8e6",
        "name": "Batman vs Superman5",
        "genre": "Action",
        "rating": 1,
        "amount": 11,
        "__v": 0
    }
}

* **Error Response**

  Code: 500 Internal Serve Error<br />
  Response: 
  
  ```{
    "error": {
        "message": "Cast to ObjectId failed for value \"{ _id: '5dd1d1be8ab3d858e51ca8e65' }\" at path \"_id\" for model \"movie\"",
        "name": "CastError",
        "stringValue": "\"{ _id: '5dd1d1be8ab3d858e51ca8e65' }\"",
        "kind": "ObjectId",
        "value": {
            "_id": "5dd1d1be8ab3d858e51ca8e65"
        },
        "path": "_id"
    }
}```

* **Sample Call**
  ```await fetch("http://ec2-3-83-241-106.compute-1.amazonaws.com:3005/movies/" + id,{
     method: "PUT",
     headers:{
          'Accept': 'application/json',
         'Content-Type':'application/json'
     },
     body: JSON.stringify({
        name: req.body.mov.name,
        genre: req.body.mov.genre,
        rating: req.body.mov.rating,
        amount: req.body.mov.amount,
        available: req.body.mov.available
    })
    
 })```
 
 
**Delete Movies**

  * **URL**

  http://ec2-3-83-241-106.compute-1.amazonaws.com:3005/movies/:id

* **Method**

  `DELETE`

* **Request Payload** *

  Headers
  
* **URL Parameters** 

  None
  
* **Data Parameters** 

  None

* **Success Response** 

  Code: 200 OK <br />
  Response: {
   
   {
    "message": "movie deleted",
    "movie": {
        "available": true,
        "_id": "5dd1d1be8ab3d858e51ca8e6",
        "name": "Batman vs Superman5",
        "genre": "Action",
        "rating": 1,
        "amount": 11,
        "__v": 0
    }
}

* **Error Response**

  Code: 500 Internal Serve Error<br />
  Response: 
  
  ```{
    "error": {
        "message": "Cast to ObjectId failed for value \"{ _id: '5dd1d1be8ab3d858e51ca8e65' }\" at path \"_id\" for model \"movie\"",
        "name": "CastError",
        "stringValue": "\"{ _id: '5dd1d1be8ab3d858e51ca8e65' }\"",
        "kind": "ObjectId",
        "value": {
            "_id": "5dd1d1be8ab3d858e51ca8e65"
        },
        "path": "_id"
    }
}```

* **Sample Call**
  ```fetch("http://ec2-3-83-241-106.compute-1.amazonaws.com:3005/movies/"+id , {
     method: "DELETE",
     headers:{
        'Accept': 'application/json',
       'Content-Type':'application/json'
   },
 })```
 
 
 **Database Schema**
 
 * **Movie Model**
  _id:mongoose.Schema.Types.ObjectId,
    name:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    amount:{
        type: Number,
        required:true
    },
    available:{
        type:Boolean,
        default:false
    }
  
  
 
  


 
