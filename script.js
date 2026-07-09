const inquirer=require('inquirer');
const qr=require('qr-image');
const fs=require('fs');
const {type}=require('os');

inquirer
.prompt([
{
    type:'input',
    name:'URL',
    message:'Enter the URL you want to convert into QR code'
}
]).then(function(answers){
    const url=answers.URL;
    console.log('You have entered',url)
    const qr_png=qr.image(url,{type:'png'});
    qr_png.pipe(fs.createWriteStream('qr_code.png'));

    fs.writeFile('URL.txt',url,function(err){
        if(err){
            console.log('Error',err);
            return;
        }
    })

    console.log('');
    console.log('QR Code successfully generated!!');
    console.log('File has been saved!!');
});
    
