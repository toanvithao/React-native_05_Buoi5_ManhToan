import { faBorderStyle } from '@fortawesome/free-solid-svg-icons';
import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
    root:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    header:{
        flexDirection:'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    scrollView_Avartas:{
        borderWidth: 0.25,
        borderColor: "#e8eaf6",
    },
    ImgAvatar:{
        width: 64,
        height: 64,
        borderRadius: 32
    },
    header__Avartars:{
        alignItems: 'center',
        margin: 10,        
    },
    header__Avatar_nam:{
        fontWeight: "bold",
        color: 'black'
    },
    body__personal: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        borderBottomWidth: 1,        
        borderColor: "#e8eaf6",
    },
    body__personal_header:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    body__personal_header_avatar:{
        width: 64,
        height: 64,
        borderRadius: 32
    },
    body__personal_header_info:{
        flex: 1,
        flexDirection: 'row',
        marginLeft: 10
    },
    body__personal_header_info_sub_Text:{
        fontSize: 15,
        fontWeight:'bold',
        color: 'black'
    },
    body__personal_header_info_NameAndTime:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '70%',
    },
    body__personal_header_options:{
        color: '#000000',
        fontWeight: '900',
    },
    body__personal_header_options:{
        fontWeight: 'bold',
        color: 'black'
    },
    body__personal_content:{
        marginTop: 5
    },
    body__personal_content_Text:{
        fontWeight: '900'
    },
    body__personal_footer:{
        flex: 1,
        flexDirection: 'row',
        marginTop: 5,
        justifyContent: 'flex-start'
    },
    body__personal_footer_Group:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: 50
    },
    body__personal_footer_Image:{
        width: 25,
        height: 25,
    }
})