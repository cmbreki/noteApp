var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://postgres:christina@localhost:5432/notes_database';

app.use(express.static(__dirname+"/public")); // tells server to "look" for static -html,css- files in public directory
app.use(bodyParser.json());

//Get notes list
app.get('/notes', function (req,res) {
	console.log("I received a NOTE GET request");

	var results = [];

    	pg.connect(connectionString, function(err, client, done) {
        	// Handle connection errors
        	if(err) {
         		done();
          		console.log(err);
          		return res.status(500).json({ success: false, data: err});
        	}
        	// SQL Query > Select Data
        	var query = client.query("SELECT notes.id,notes.category_id,notes.title,notes.description,notes.content,notes.date,categories.name,categories.color FROM notes LEFT JOIN categories ON notes.category_id=categories.id");

        	// Stream results back one row at a time
        	query.on('row', function(row) {
            		results.push(row);
        	});

        	// After all data is returned, close connection and return results
        	query.on('end', function() {
            		done();
            		return res.json(results);
        	});

  });

});

//Get a specific note from the  list
app.get('/notes/:id',function(req,res){
 var id = req.params.id;
 //console.log("The current id is: " + id);
 var results = [];

	pg.connect(connectionString, function(err, client, done) {
			// Handle connection errors
			if(err) {
				done();
					console.log(err);
					return res.status(500).json({ success: false, data: err});
			}


			var query = client.query("SELECT notes.id,notes.category_id,notes.title,notes.description,notes.content,notes.date,categories.name,categories.color FROM notes LEFT JOIN categories ON notes.category_id=categories.id WHERE notes.id=$1",[id]);

			query.on('row', function(row) {
						results.push(row);
					//	console.log(row);

			});

			query.on('end', function() {
				//console.log(results);
						done();
						return res.json(results);
			});

		});
});

//update a spesific note
app.put('/notes/:id', function(request,response){

var id = request.params.id;
//console.log(id);
//console.log(request.body.title);
var note ={id:id,category_id:request.body.category_id, content:request.body.content, description:request.body.description, title:request.body.title, date:request.body.date };

//console.log("The note server side: " + note.title + " "  + note.date + " " + note.description );

var client = new pg.Client(connectionString);
client.connect();

  client.query("UPDATE notes SET category_id=($1), content=($2), description=($3), title=($4) WHERE id=($5)", [note.category_id, note.content, note.description, note.title, id]);

	client.on("drain", function () {
		response.send(note);
		client.end();
	});
});

// Delete a note
app.delete('/notes/:id', function(request,response){

	var id = request.params.id;
  //console.log("In DELETE id is: " + id);
	var client = new pg.Client(connectionString);
	client.connect();
	var query = client.query("DELETE FROM note WHERE id=$1", [id]);

	query.on( "end", function (result) {
		response.send('ok');
		client.end();
	});
});

//Add a new note
app.post('/notes',function(request,response){

	console.log(request.body);
  var note=request.body;

  var client = new pg.Client(connectionString);
  client.connect();
  var query=client.query("INSERT INTO notes(category_id,content,description,title,date) VALUES ($1, $2, $3, $4, now())",[note.category_id,note.content,note.description,note.title]);

  query.on( "end", function () {
		response.send('ok');
		client.end();
	} );

});


//Get all users
app.get('/users', function (req,res) {
	console.log("I received a users GET request");
	var results = [];
    	pg.connect(connectionString, function(err, client, done) {
        	// Handle connection errors
        	if(err) {
         		done();
          		console.log(err);
          		return res.status(500).json({ success: false, data: err});
        	}
        	// SQL Query > Select Data
        	var query = client.query("SELECT id,name,bio,site FROM users");

        	// Stream results back one row at a time
        	query.on('row', function(row) {
            		results.push(row);
								//console.log(row);
        	});

        	// After all data is returned, close connection and return results
        	query.on('end', function() {
            		done();
            		return res.json(results);
        	});
  });
});

//Get a specific user from the  list
app.get('/users/:id',function(req,res){
 var id = req.params.id;
 //console.log("The current id is: " + id);
 var results = [];

	pg.connect(connectionString, function(err, client, done) {
			// Handle connection errors
			if(err) {
				done();
					console.log(err);
					return res.status(500).json({ success: false, data: err});
			}
			var query = client.query("SELECT id,name,bio,site FROM users WHERE id=$1",[id]);
			query.on('row', function(row) {
						results.push(row);
					  console.log("The specific user is:");
						console.log(row);
			});

			query.on('end', function() {
				//console.log(results);
						done();
						return res.json(results);
			});
		});
});

//Get the list of categories
app.get('/categories',function(req,res){
	var results=[];
	console.log("I received a categories GET request");

	pg.connect(connectionString, function(err, client, done) {
		if(err) {
			done();
				console.log(err);
				return res.status(500).json({ success: false, data: err});
		}
		// SQL Query > Select Data
		var query = client.query("SELECT name,id FROM categories");

		// Stream results back one row at a time
		query.on('row', function(row) {
					results.push(row);
					//console.log(row);
		});

		// After all data is returned, close connection and return results
		query.on('end', function() {
					done();
					return res.json(results);
		});
	})
});

app.listen(5000);
console.log("Server running on port 5000");
