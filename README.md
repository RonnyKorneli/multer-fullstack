# Uploading images with multer

Here, you will be able to create a server that will allow you to upload and store images

## What you will be doing

Using `multer`, you will configure your server to be able to receive and save images from the client (React frontend). In the last part of the assignment, you will be displaying the last 5 uploaded images in the frontend.

## Folder Structure

This repository contains the `client` (frontend) as a subfolder. When working in the client (frontend), open one terminal for the client folder and run `npm run start` to work with it

## Tasks

Before starting, run the following command to instal the npm packages for the backend and client folders

```bash
npm run setup
```

### Task 1 - Installing packages

1. Install the [mongoose](https://www.npmjs.com/package/mongoose) npm package
2. Install the [multer](https://www.npmjs.com/package/multer) npm package

### Task 2 - Write a .env file

Using the `.env.example` file as a template, create a `.env` file, and fill it with your MongoDB connection details

> Hint: The key `DB_NAME` points to the database name

### Task 3 - Setting up the schema / model

1. Create a schema that can fit the following data structure:

    ```JSON
    {
      "filename": "guybrush.png",
      "path": "uploads/guybrush.png",
      "tags": [ "games", "retro", "monkey island" ],
      "uploadDate": 1651755919488,
      "user": {
        "ip": "216.58.213.227"
      }
    }
    ```

2. Create a model for your schema

### Task 4 - Configuring the multer middleware

Setup `multer` so that;

1. The destination of all uploaded images will be in the server `/uploads` folder
2. The file limit for each image is **1mb**

> Hint: Don't forget to export your middleware!

### Task 5 - Setting up the route and endpoint

1. In `server.js`, create a route with the path `/api`
2. Create an express `Router` to handle this route
3. Create an endpoint in the `/api` route with the path `/uploadImage`

### Task 6 - Adding multer

Add the multer middleware to the `/uploadImage` endpoint

### Task 7 - Installing axios in the `client` folder

In the `client` folder, install the [axios](https://www.npmjs.com/package/axios) npm package

### Task 8 - Building the frontend in React

In the `client` folder, in `App.js`;

1. Create a form with 2 `<input>` fields
   1. The first will be of type `text` and will be for the image tags
   2. The second will be of type `file` and will be for the file upload
2. Process the form data with the `FormData` object
3. Use `axios` to send the `FormData` object to the server `/uploadImage` endpoint

### Task 9 - Test that the upload facility works!

Try uploading a few images (under 1mb in size) to see that the upload facility works

### Task 10 - Show the 5 most recent uploads

1. Create another endpoint with the path `/recentUploads`
2. Use this path to connect to the database, and using the `sort()` method on the `uploadDate` field, and the `limit()` method, program it so that the server returns the last 5 uploaded images
3. Display the last uploaded images on the upload page, below the form
