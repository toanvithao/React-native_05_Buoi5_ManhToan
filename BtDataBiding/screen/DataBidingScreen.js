import React, { Component } from "react";
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {style} from './stytles/DataBidingStytle';
const dataEmoji = [
    require('../angry.png'), 
    require('../sad.png'),
    require('../care.png'), 
    require('../like.png'), 
    require('../love.png'), 
    require('../comment.png'), 
    require('../haha.png'), 
];
export default class DataBidingScreen extends Component{


    state = {
        choice: require('../comment.png'),
    }

    renderChoiceEmoji=()=>{
        return(
            <View style={style.footer}>
                {
                    dataEmoji.map((data,index)=>(
                        <TouchableOpacity onPress={()=>{
                            this.setState({choice: data})
                        }}>
                            <Image source={data} style={style.imgage}/>
                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }

    render(){
        return(
            <View style={style.root}>
                <Text style={style.Text}>Bạn cảm thầy thế nào?</Text>
                <Image source={this.state.choice} style={style.main_imgage}/>
                {this.renderChoiceEmoji()}
            </View>            
        )
    }
}