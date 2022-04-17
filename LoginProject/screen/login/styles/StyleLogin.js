import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#009387'
    },
    container__header:{
        flex: 2,
        justifyContent: 'flex-end',
        paddingBottom: 30,
        paddingLeft: 30
    },
    container__header_text:{
        color: 'white',
        fontSize: 30,
        fontWeight: '500'
    },
    container_form_login:{
        flex: 5,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 30,
        backgroundColor: 'white',
    },
    container_form_login_sub_input:{
        flexDirection: 'column'
    },
    container_form_login_sub_input_textinput:{
        flexDirection: 'column',
        justifyContent: 'center'
    },
    container_form_login_sub_input_container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    btn:{
        height: 42,
        borderRadius: 30,
        justifyContent:'center',
        alignItems: 'center'
    },
    btn__primary: {
        backgroundColor: '#009387'
    },
    btn__primary_text:{
        color: "white"
    },
    btn__second: {
        borderWidth: 1,
        borderColor: '#009387'
    },
    btn__second_text:{
        color: '#009387'
    },
    marginTop:{
        marginTop: 40
    }
})