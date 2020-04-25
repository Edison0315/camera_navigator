class SendServer {

    send = (result) => {

        let localUri = result.uri;
        let filename = localUri.split('/').pop()
        let type = 'image/jpg';

        let formData = new FormData();
        formData.append('photo', {uri: localUri, name: filename, type})

        return fetch('http://localhost:3000/guardar', {
            method: 'POST',
            headers: {'content-type': 'multipart/form-data'},
            body: formData
        }).then((response) => {
            return response.json();
        }).then((responseJson) => {
            return responseJson;
        }).catch((err) => {
            return err.message;
        });

    }

}

const sendserver = new SendServer();
export default sendserver;