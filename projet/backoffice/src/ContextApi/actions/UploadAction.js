import * as UploadApi from '../api/UploadRequest'


export const uploadForumImage = (data) => async(dispatch) => {

    try {

       return await UploadApi.uploadForumImage(data);

    } catch (error) {
        console.log(error)
    }
}

export const uploadUserImage = (data) => async(dispatch) => {

    try {

       return await UploadApi.uploadUserImage(data);

    } catch (error) {
        console.log(error)
    }
}

export const uploadEventImage = (data) => async(dispatch) => {

    try {

       return await UploadApi.uploadEventImage(data);

    } catch (error) {
        console.log(error)
    }
}

export const uploadEmploisFile = (data) => async(dispatch) => {

    try {

       return await UploadApi.uploadEmploisFile(data);

    } catch (error) {
        console.log(error)
    }
}