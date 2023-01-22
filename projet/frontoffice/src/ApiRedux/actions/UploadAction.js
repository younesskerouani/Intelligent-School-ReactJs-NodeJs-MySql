import * as UploadApi from '../api/UploadRequest'


export const uploadArticleImage = (data) => async(dispatch) => {

    try {

       return await UploadApi.uploadArticleImage(data);

    } catch (error) {
        console.log(error)
    }
}

export const uploadCoursFile = (data) => async(dispatch) => {

    try {

       return await UploadApi.uploadCoursFile(data);

    } catch (error) {
        console.log(error)
    }
}