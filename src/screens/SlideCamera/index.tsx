import { CameraView, CameraType, useCameraPermissions, CameraCapturedPicture} from "expo-camera";
import { useRef, useState } from "react";
import { Button, Text, TouchableOpacity, View, Alert, ImageBackground} from "react-native";
import { styles } from "./styles";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { AntDesign } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';
import { ComponentLoading } from "../../components";

export function Camera() {
    const [facing, setFacing] = useState<CameraType>('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [permissionMedia, requestPermissionMedia] = MediaLibrary.usePermissions();
    const ref = useRef<CameraView>(null)
    const [photo, setPhoto] = useState<CameraCapturedPicture>()

    if(!permission) {
        return < ComponentLoading />
    }

    if(!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>Você precisa dar permissão para acesso da Camera</Text>
                <Button onPress={requestPermission} title="grant permission"/>
            </View>
        );
    }

    function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }

    async function takePicture() {
        if (ref.current) {
    async function takePicture() {
            const picture = await ref.current?.takePictureAsync({ imageType: 'jpg', quality: 0})
            setPhoto(picture)
        }
    }

}
}