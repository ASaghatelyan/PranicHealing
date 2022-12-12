import { GlobalWidth, GlobalHeight } from "app/constant/styleConst";
import { StyleSheet, Dimensions, Platform } from "react-native";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;


export const styles = StyleSheet.create({
    content: {
        backgroundColor: '#F9F9FF',
        paddingVertical: GlobalHeight(10),
        paddingHorizontal:(16)
    },
    iconView:{
        flexDirection:'row',
        alignItems:'center',
    },
    ic: {
        width: GlobalWidth(24),
        height: GlobalHeight(24),
        marginRight: GlobalWidth(6),
    },
});
