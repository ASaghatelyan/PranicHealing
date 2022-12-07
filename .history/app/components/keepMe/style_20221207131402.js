import { GlobalWidth, GlobalHeight } from "app/constant/styleConst";
import { StyleSheet, Dimensions } from "react-native";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;


export const styles = StyleSheet.create({
    content: {
        width: "100%",
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        marginTop: 15
    },
    checkBoxConteiner: {
        flexDirection: 'row',
        alignItems: "center",
    },
    checkBoxText: {
        color: "#2D2D2D",
        fontSize: 12,
        lineHeight: 21,
        fontFamily: "Poppins-Regular",
      
    },
});
