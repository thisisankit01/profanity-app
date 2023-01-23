# OpenAI Cuss Word Detection
==========================

> This project uses OpenAI's API to check for cuss words in user input. It checks for commonly used cuss words in Hindi, as well as any new cuss words that may be added to the list.

###  Getting Started
---------------

1.  Clone the repository
2.  Run `npm install` to install the necessary packages
3.  Create a .env file in the root of the project and add your OpenAI API key as `OPENAI_API_KEY`
4.  Run `node index.js` to see the results

### Adding new cuss words
---------------------

> You can add new cuss words to the list by using the `addcussWordsHindi` function and passing in the new cuss word as a string.

### How it works
------------

> The `openAICall` function takes in a prompt, which includes the list of cuss words to check for and the user input. It makes a request to OpenAI's API to check for cuss words in the user input, and returns the response.

The response includes a yes or no answer and the number of cuss words used, if any.

### Built with
----------

-   Node.js
-   [OpenAI API](https://openai.com/)
-   [node-fetch](https://www.npmjs.com/package/node-fetch)
-   [dotenv](https://www.npmjs.com/package/dotenv)

### Contributing
------------

> Feel free to submit pull requests or issues if you find any bugs or want to improve the project.

### Author
------

Ankit Pandey