const {readFile, writeFile} = require('fs');

readFile('./content/test2.txt', 'utf-8', (err, result) => {
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/subfolder/test.txt', 'utf-8', (err, result) => {
        if(err){
            console.log(err);
            return;
        } 
        const second = result;
        writeFile(
            './content/result.txt',
            `Here is the result : ${first}, ${second}`,
            (err, result) => {
                if(err){
                    console.log(err);
                    return;
                }
                console.log(result);
            }
        )
    })
})