because_handlebars
==================

I built a boilerplate thing because handlebars.

Getting Started
==================

Edit posts.json to add your blog posts. Use markup. Escape quotes.

```
because_handlbars> npm install
because_handlbars> bower install
```

Compiling Handlebars Templates
=======================
you'll need to run the handlebars compiler on each file in the templates directory, and output them into the templates/compiled directory

EX:
```
because_handlebars> sudo npm install -g handlebars@1.3
because_handlebars> handlebars app/templates/post.hbs -e hbs -f app/templates/compiled/post.js
```

Results
=================

Start a server

```
because_handlbars> node server.js
```

[open in your browser](http://localhost:1337)

Compiled Templates
==================

Check out [the post-conversion branch](https://github.com/mrgenixus/because_handlebars/tree/post-conversion) to get an idea of how the conversion works.


