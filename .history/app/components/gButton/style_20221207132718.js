import { GlobalWidth, GlobalHeight } from "app/constant/styleConst";
import { StyleSheet, Dimensions } from "react-native";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;


export const styles = StyleSheet.create({
    btn: {
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#0088CF',
        borderRadius:GlobalWidth(14),

    },
    btnName: {
        fontSize: 14,
        // lineHeight: 16,
        textTransform: 'uppercase',
        color: "#FFF",
        fontFamily: "Poppins-Bold"
    }
});
