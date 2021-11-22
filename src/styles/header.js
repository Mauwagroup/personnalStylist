import {COLORS} from "../constants"

const headerStyle = {
    container:{
        width: '100%',
    },
    logoWrapper:{
        maxWidth: 1200,
        margin: 'auto',
        padding: '40px 0',
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    linksWrapper: {
        padding: "15px 0",
        borderTop: "1.6px solid #ccc",
        flexDirection: 'row',
        width: '85%',
        boxShadow: "none",
        transition: " padding 2s",
        margin: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
    },
    flexDiv: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }
}

export default headerStyle;