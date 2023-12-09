import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";
const stylesCart = StyleSheet.create({
    container: {
        backgroundColor: COLORS.lightWhite,
        width: 120,
        borderRadius: 10,
    },
    img: {
        width: 120,
        height: 50,

    },
    title: {
        color: COLORS.black,
    },
    text: {
        color: COLORS.gray,
    },
    wrapIcon: {
        backgroundColor: COLORS.primary,
        width: SIZES.medium,
        height: SIZES.medium,
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute',
        right: 0,
    }
})

export default stylesCart