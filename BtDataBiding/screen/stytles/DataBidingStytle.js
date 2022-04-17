import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
    root:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    Text:{
        fontWeight: 'bold',
        fontSize: 30,
        color: 'black'
    },
    main_imgage:{
        width: 300,
        height: 300,
        borderWidth: 3,
        borderColor: '#64ffda',
        borderRadius: 150,
    },
    footer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 30
        
    },
    imgage: {
        width: 70,
        height: 70,
        margin: 5,
        borderWidth: 3,
        borderColor: '#9575cd',
        borderRadius: 35,
        
    }
})