import multer from "multer";

const storage = multer.diskStorage({
    // destination: function (req, file, callback) {
    //     callback(null, 'uploads/'); // Make sure this folder exists
    // },
    filename:function(req,file,callback){
        callback(null,file.originalname)
    }
})

const upload = multer({storage})

export const multiUpload = upload.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 },
    { name: 'image4', maxCount: 1 },
  ]);


export default upload