import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";
const styles = StyleSheet.create({
    container: {
        marginVertical: SIZES.small,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    text: {
        fontSize: SIZES.large,
        color: COLORS.primary,
        fontWeight: "900",

    }
})

export default styles