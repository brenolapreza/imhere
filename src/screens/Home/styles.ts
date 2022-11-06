import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#131016",
        padding: 24,
    },
    eventName: {
        color: "#FDFCFE",
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 48,
    },
    eventDate: {
        color: '#6b6b6b',
        fontSize: 16
    },
    input: {
        flex: 1,
        height: 56,
        borderRadius: 5,
        color: "#FDFCFE",
        fontSize: 16,
        padding: 16,
        backgroundColor: "#1f1e25",
        marginRight: 12,
    },
    buttonText: {
        color: "#fff",
        fontSize: 24
    },
    button: {
        width: 56,
        height: 56,
        bordeRadius: 5,
        backgroundColor: "#31cf67",
        justifyContent: "center",
        alignItems: "center"
    },
    form: {
        width: "100%",
        flexDirection: "row",
        marginTop: 36,
        marginBottom: 42
    },
    listEmptyText: {
        textAlign: "center",
        fontSize: 16,
        color: "#fff"
    }
})