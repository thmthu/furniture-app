import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/theme";
const styles = StyleSheet.create({
    container: {
        marginHorizontal: SIZES.small,
        marginTop: SIZES.small
    },
    appBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    location: {
        color: COLORS.gray2,
        fontSize: SIZES.small,
        fontWeight: "900"
    },
    cartCount: {
        position: "absolute",
        height: 16,
        width: 16,
        borderRadius: 8,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
        right: 0,
        top: -8,
    },
    textCount: {
        fontSize: 10,
        color: "white",
        fontWeight: "500",

    },
    text: (color) => ({
        fontWeight: "900",
        color: color,
        fontSize: 40
    }),

})

export default styles