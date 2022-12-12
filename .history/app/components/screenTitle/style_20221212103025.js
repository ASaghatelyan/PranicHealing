import { GlobalWidth, GlobalHeight } from "app/constant/styleConst";
import { StyleSheet, Dimensions, Platform } from "react-native";

let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;


export const styles = StyleSheet.create({
    content: {
        marginVertical: 8,
        alignItems: 'center',
        position: 'relative',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16
    },
    titleText: {
        fontFamily: 'Poppins-Regular',
        // marginBottom: GlobalHeight(18),
        fontSize: GlobalWidth(18),
        lineHeight: GlobalHeight(27),
        color: '#2D2D2D'
    },
    backView: {
        // position: 'absolute',
        // left:25,
        backgroundColor: 'red',
width:'20%'
    },
    backIc: {
        width: GlobalWidth(24),
        height: GlobalHeight(24),
        resizeMode:'contain'
    },
    titleView:{
        alignItems:'center',
        justifyContent:'center',
        width:'80%'
    }
});
