import { GlobalWidth, GlobalHeight } from "app/constant/styleConst";
import { StyleSheet, Dimensions, Platform } from "react-native";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;


export const styles = StyleSheet.create({
    generalView: {
        backgroundColor: '#FFF',
        height: '100%'
    },
    content: {
        flexGrow: 1,
        paddingBottom: GlobalHeight(90),
        paddingTop: Platform.OS === 'android' ? GlobalHeight(44) : 0,
      
    },
    userInfo: {
        flexDirection: 'row',
        marginTop: GlobalHeight(11),
        marginBottom: GlobalHeight(12)
    },
});
