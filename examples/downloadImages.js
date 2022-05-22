(async () => {
  /*  const fs = require('fs');
    const path = require('path');*/
    const json = require("./../../sushi-store/build/db.json")
/*    const axios = require('axios').default;*/
    const fs = require('fs');
    const path = require('path');
    const axios = require('axios').default;

// fileUrl: the absolute url of the image or video you want to download
// downloadFolder: the path of the downloaded file on your machine
    const downloadFile = async (fileUrl, downloadFolder) => {
        // Get the file name
        const fileName = path.basename(fileUrl);

        // The path of the downloaded file on our machine
        const localFilePath = path.resolve(__dirname, downloadFolder, fileName);
        try {
            const response = await axios({
                method: 'GET',
                url: fileUrl,
                responseType: 'stream',
            });
            const w = response.data.pipe(fs.createWriteStream(localFilePath));
            const promise1 = new Promise((resolve, reject) => {
                w.on('finish', () => {
                    resolve('Successfully downloaded file!');
                });
            });
            console.log(await promise1)
        } catch (err) {
            throw new Error(err);
        }
    };
    let newJson = {
        ...json
    }
    for(let i = 0; i < json.sushi.length; i++){

        let res = await downloadFile(json.sushi[i].url,'download')

        debugger
    }

})();
