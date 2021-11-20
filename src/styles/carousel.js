import {COLORS} from "../constants"

const carouselStyle = {
    container:{
        width: '100%',
        height: '700px',
    },
    txtWrapper:{
        position: 'absolute',
        width: '100%',
        height: '700px',
        top: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: COLORS.white,
        fontWeight: "bold",
    }
}

export default carouselStyle;