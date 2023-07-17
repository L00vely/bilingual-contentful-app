const fs = require('fs');

const { createClient } = require('contentful');

const client = createClient({
    space: '29rp0bxqbuvh',
    environment: 'master',
    accessToken: 'vhCbzbKL9Ww-b0cdSFNLwG75QB1LuIA8eqQGnkXvV1M'
});

client.withAllLocales.getEntries().then((data) => {
    const [ siteEntry ] = data.items.filter(
        (entry) => entry.sys.contentType.sys.id === 'advanceSite'
    );

    const jsonString = JSON.stringify(siteEntry);

    const filePath = './public/data.json';

    fs.writeFile(filePath, jsonString, (err) => {
        if(err){
            console.log('Failed to save JSON data:', err);
        } else{
            console.log('JSON data saved to file:', filePath);
        }
    })
});