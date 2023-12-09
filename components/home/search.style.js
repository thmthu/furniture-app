import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        margin: SIZES.xSmall,
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
    },
    wrapSearch: {
        padding: SIZES.xSmall
    },
    textInput: {
        flex: 1
    },
    wrapCamera: {
        backgroundColor: COLORS.tertiary,
        borderRadius: SIZES.medium,
        alignItems: "center",
        justifyContent: "center",
        padding: SIZES.xSmall
    }
    ,
})

export default styles