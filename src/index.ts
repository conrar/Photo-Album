#!/usr/bin/env node
import axios from 'axios';
import inquirer from 'inquirer';
import validateInputIsNumber from './helpers/validateInputIsNumber.js';
import formatPhotoAsText from './helpers/formatPhotoAsText.js';
import type Photo from './types/Photo';

const main = async function () {
    // Prompt user to provide an album id
    const albumId = await askAlbumId();
    // Fetch album
    const album = await fetchAlbum(albumId);
    // Log photos
    album.forEach(photo => {
        console.log(formatPhotoAsText(photo));
    });
    // Go to start
    main();
};
main();

// Prompt user to provide an album id
async function askAlbumId(): Promise<number> {
    const answers = await inquirer.prompt({
        name: 'albumId',
        type: 'input',
        message: 'Which album would you like?',
        validate: validateInputIsNumber,
        default() {
            return 1;
        }
    });

    return Number(answers.albumId);
}

// Fetch album data from API
async function fetchAlbum(albumId: number): Promise<Photo[]> {
    const baseUrl = 'https://jsonplaceholder.typicode.com/photos';
    const response = await axios.get<Photo[]>(baseUrl, {
        params: {
            albumId
        }
    });
    return response.data;
}
