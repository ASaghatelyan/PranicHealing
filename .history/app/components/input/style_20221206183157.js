import { GlobalWidth, GlobalHeight } from "app/constant/styleConst";
import { StyleSheet, Dimensions } from "react-native";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;


export const styles = StyleSheet.create({
    styleInput: {
        backgroundColor: 'rgba(158, 167, 166, 0.05)',
        borderRadius: 8,
        paddingVertical: 14,
        paddingLeft: 14,
        paddingRight: 20,
        color: '#2D2D2D',
    },
    selectedInput: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#83C661'
    },
    title: {
        marginBottom: 6,
        fontSize: 14,
        fontFamily: 'Poppins-Bold',
        color: '#2D2D2D',
    }
});
