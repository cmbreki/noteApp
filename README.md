# *"A penny for your thoughts"*  app
This application consists my first attempt to create a simple CRUD app using the P.E.A.N full-stack. Is based on the [Code School](https://www.codeschool.com/)'s podcast _'Create a Note app'_


The tools i'm using are:

- __P__ostgreSQL
- __E__xpress
- __A__ngularJS
- __N__odeJS  
_for Styling_
- Angular Material



#### Database
___________________________________  

__Database Name:__  notes_database

Create the DATABASE
```sh
$ CREATE DATABASE notes_database  
```
Enter the DATABASE

```sh  
$ \c notes_database  
```

#### Tables:

##### __1.__  notes  

###### Schema

|id    |  category_id | title | description | content | date    |
|------|--------------|-------|-------------|---------|---------|
|SERIAL|  INTEGER     | TEXT  |  TEXT       | TEXT    |TIMESTAMP|

##### Create _notes_  table  

```sh
  $ CREATE TABLE notes (id BIGSERIAL PRIMARY KEY NOT NULL,category_id INT REFERENCES categories(id),title TEXT NOT NULL,description TEXT NOT NULL,content TEXT NOT NULL,date TIMESTAMP WITH TIME ZONE);  
```

##### Insert Records  
```sh
$ INSERT INTO notes (category_id,title,description,content,date) VALUES ('2','Whatever title','Whatever Description','Whatever content',now());
```

--------------

__2.__ categories

###### Schema

| id 	   |  name  |   color  |
|--------|--------|----------|
| INTEGER| TEXT |  TEXT   |


##### Create _categories_  table

```sh
 $ CREATE TABLE categories (id SERIAL PRIMARY KEY NOT NULL,name TEXT NOT NULL, color TEXT);
```
##### Insert Records  

```sh
$ 	INSERT INTO categories (name,color) VALUES ('Memories','#03A9F4');
$	INSERT INTO categories (name,color) VALUES ('Wish','#9C27B0');
$	INSERT INTO categories (name,color) VALUES ('Dream','#E91E63');
$	INSERT INTO categories (name,color) VALUES ('Idea','#C2185B');
$	INSERT INTO categories (name,color) VALUES ('Gossip','#FFC107');
$	INSERT INTO categories (name,color) VALUES ('Thoughts','#BDBDBD');
$	INSERT INTO categories (name,color) VALUES ('Other','#CDDC39');
$	INSERT INTO categories (name,color) VALUES ('Gratitude','#B2DFDB');
```

##### Getting the data:

```sh
$ SELECT notes.id,notes.category_id,notes.title,notes.description,notes.content,notes.date,categories.name,categories.color FROM notes LEFT JOIN categories ON notes.category_id=categories.id;
```

##### Instructions  
1. Create the table "categories".
2. Insert the default values.
3. Create the table "notes".
4. Insert dummy records.


### Dependencies

* Angular Meterial 1.0.9 ([here](https://material.angularjs.org/1.0.9/getting-started))
