# Metalsmith Logger

Metalsmith logging for humans

Metalsmith logger will output nice, human-readable data of the metalsmith `files` object at the point in the metalsmith plug-in chain where you call it. 

Since the whole data is rather large and hard for the eyes to parse, you need to specifiy which properties of each `file` object you want to see in the console output, including properties in your YAML-frontmatter. 

A file's contents will be output in human-readable format and not as a buffer if you specify `contents` to be logged.

## Installation
Metalsmith-logger can be installed via [npm](https://www.npmjs.com/package/metalsmith-logger):

    npm install metalsmith-logger --save

## Usage
Include metalsmith-logger at the point in the metalsmith plug-in chain where you want to see the current metalsmith `files` data. Metalsmith logger can be invoked multiple times in the plug-in chian, e.g. before parsing markdown, after parsing markdown, and after rendering the template in your plug-in chain.
 
Metalsmith-logger requires an array of property names to log to the console as a single argument:

    var logger = require('metalsmith-logger');

    Metalsmith(__dirname)
      //...
      .use(logger(['title', 'tags', 'contents'))
      //...
      
      
The output would look something like this for each file (assuming `title` and `tags` were defined in the YAML frontmatter of `index.md`):

	====================
	FILE:
	index.md

	TITLE:
	The index page

	TAGS:
	some tag, some other tag

	CONTENTS:
	This is the index page.
	

      
      
## The MIT License (MIT)



Copyright (c) 2015 Franz Heidl

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
