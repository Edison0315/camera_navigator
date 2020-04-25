import React, { useState } from 'react';
import { View, 
         StyleSheet, 
         TouchableOpacity, 
         Alert, 
         Image,
         Button,
         ActivityIndicator
       } from 'react-native';
import { Icon } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import SendServer from '../services/SendServer';

const CameraPicker = props => {

    const [pickImage, setPickImage] = useState();
    const [result, setResult] = useState();
    const [isLoading, setIsLoading] = useState(false);
    
    const verifyPermissions = async () => {

        const result = await Permissions.askAsync(Permissions.CAMERA_ROLL);

        if (result.status !== 'granted') {
          Alert.alert(
            'Permisos insuficientes!',
            'Necesita otorgar permisos para usar la cámara.',
            [{ text: 'Ok' }]
          );
          return false;
        }
        return true;
    };

    const takeImageHandler = async () => {

        const hasPermission = await verifyPermissions();
        
        if (!hasPermission) {
            return;
        }
        
        const result = await ImagePicker.launchCameraAsync({}); 

        setPickImage(result.uri);
        setResult(result);

        if (result.cancelled) {
            return;
        }
    };

    const sendPhoto = () => {

        setIsLoading(true);

        let response = SendServer.send(result);
        response.then((res) => {
            if (res.ok == true) {
                Alert.alert("Foto enviada satisfactoriamente");                
            } else {
                Alert.alert("Error");
            }
            setIsLoading(false);
        }).catch((err) => {
            Alert.alert("Error al enviar la foto");
            setIsLoading(false);
        });
    }

    return (  
        <View>
            <View style={styles.imagePicker}>
                <View style={styles.imagePreview}>
                    <Image style={styles.image} source={{uri: pickImage}}/>
                </View>
                <TouchableOpacity onPress={takeImageHandler}>
                    <Icon raised name="camera" type="font-awesome"/>            
                </TouchableOpacity>            
            </View>
            <View style={{marginVertical:180, padding: 10}}>
                {
                    (isLoading) 
                    ? <ActivityIndicator size="large" /> 
                    : <Button title="Enviar foto al servidor" onPress={sendPhoto}/>
                }                
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    imagePicker: {
        flex: 1, 
        flexDirection: 'row',
        padding: 10,
        zIndex: 100,
    },
    imagePreview: {
        width: '80%',
        height: 100,
        borderColor: '#ccc',
        borderWidth: 1,
        backgroundColor: '#fff',
        color: '#ccc',
        padding: 10,
        fontSize: 16,
        borderRadius: 5  
    },
    image: {
        width: '100%',
        height: '100%'
    }
});

export default CameraPicker;