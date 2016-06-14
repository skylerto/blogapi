Blog API
========

This is an example of creating a web API with the [Spring
Framework](http://spring.io).

## Installation

Clone it, package it, run it, test it.

```
$ git clone https://github.com/skylerto/blogapi.git
$ cd blogapi
$ mvn package && java -jar target/BlogApi-0.0.1.jar
$ curl http://localhost:8080/test
```

If you get a response, it's all good.

## Usage

To add a new post, with post body (title, content):
```
POST /blog/posts/new
```

To get all of the posts:
```
GET /blog/posts
```

To get a specific post:
```
GET /blog/posts/:id
GET /blog/posts/:title
```

## License

Skyler Layne © 2016
