const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const input_folder = 'screenshots';
const tmp_folder_reduced = 'images';

console.log('Reducing image size ... ');
fs.readdirSync(input_folder).forEach(file => {

    let tmp_input_path = path.join(input_folder, file)

    resize(355, path.join(tmp_folder_reduced, file.replace('.png','-d.png')), tmp_input_path);
    resize(430, path.join(tmp_folder_reduced, file.replace('.png','-t.png')), tmp_input_path);
    resize(645, path.join(tmp_folder_reduced, file.replace('.png','-p.png')), tmp_input_path);

})

function resize(width, output, input) {
	//Resize
	sharp(input)
	    .png()
	    .resize(width, null)
	    .toFile(output,
	    function(err){
	        if(err){
	        	console.log("Error at reducing size / converting picture : ")
	        	console.log(err)
	        	console.log(input);
	        	console.log(output);
	        	return;
	        }
	    })
}