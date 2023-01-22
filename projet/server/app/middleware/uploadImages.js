const multer = require('multer');
const path = require('path');

// Upload User Images 

const storageUser = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images/users')
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name)
    }
  })
  
 const uploadUserImg = multer({
    storage: storageUser,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))
  
        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
  }).single('image');
  
  
// Upload Image to Forums Folder

const storageforum = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images/forums')
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name)
    }
  })
  
 const uploadForumImg = multer({
    storage: storageforum,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))
  
        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
  }).single('image');
  
  // Upload Image to Events Folder

const storageEvent = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images/events')
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name)
    }
  })
  
 const uploadEventImg = multer({
    storage: storageEvent,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))
  
        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
  }).single('image');

  // Upload Image to articles Folder
  const storageArticle = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images/articles')
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name)
    }
  })
  
 const uploadArticleImg = multer({
    storage: storageArticle,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif|docx|pdf/
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))
  
        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
  }).single('image');

   // Upload File to Emplois Folder
   const storageEmplois = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images/emplois')
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name)
    }
  })
  
 const uploadEmploisImg = multer({
    storage: storageEmplois,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|PNG|gif|docx|pdf/
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))
  
        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
  }).single('file');

  // Upload Cours to cours Folder
  const storageFileCours = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images/cours')
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name)
    }
  })
  
 const uploadCoursFile = multer({
    storage: storageFileCours,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif|docx|pdf/
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))
  
        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
  }).single('cours');

 // Response : 
  const responseIMG = (req, res) => {
    try {
    return res.status(200).json("File uploded successfully");
    } catch (error) {
    console.error(error);
    }
  }

const uploadImages = {
    uploadUserImg,
    uploadForumImg,
    uploadArticleImg,
    uploadEventImg,
    uploadEmploisImg,
    uploadCoursFile,
    responseIMG
}

module.exports = uploadImages;