import { GlobalWidth ,GlobalHeight} from "app/constant/styleConst";
import { StyleSheet, Dimensions } from "react-native";
 
let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;


export const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        flexGrow: 1,
        position: 'relative',
    },
    bgImage: {
        height: '100%',
        paddingHorizontal: 16,
        marginBottom: 37,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: GlobalWidth(290),
        height: GlobalHeight(224),
        position:'absolute'
    },

});
