import {Text, View, TextInput, TouchableOpacity, ScrollView, Image} from "react-native";
import React, {Component} from "react";
import { styles } from "../databiding/styles/StyleDataBiding";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMugSaucer,faEnvelope, faLock, faCamera, faPenClip } from "@fortawesome/free-solid-svg-icons";

const dataAvatar = [
  {
      name: 'Sahara',
      image: require('../../asset/images/image1.jpeg'),
  },
  {
      name: 'Sophia',
      image: require('../../asset/images/image2.jpeg'),
  },
  {
      name: 'Hana',
      image: require('../../asset/images/image3.jpeg'),
  },
  {
      name: 'Naul',
      image: require('../../asset/images/image4.jpeg'),
  },
  {
      name: 'Kimihana',
      image: require('../../asset/images/image5.jpeg'),
  },
  {
      name: 'Yoko',
      image: require('../../asset/images/image6.jpeg'),
  },
  {
      name: 'Su',
      image: require('../../asset/images/image7.jpeg'),
  },
  {
      name: 'Finnia',
      image: require('../../asset/images/image8.jpeg'),
  },
  {
      name: 'Subana',
      image: require('../../asset/images/image9.jpeg'),
  },
  {
      name: 'Corohe',
      image: require('../../asset/images/image10.jpeg'),
  }
]
const dataFeeds = [
  {
      title: "Lorem Ipsum is simply dummy text",
      name: "Sahara",
      image: require('../../asset/images/image1.jpeg'),
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      time: "1 minutes"
  },
  {
      title: "Lorem Ipsum is simply dummy text",
      name: "Sophia",
      image: require('../../asset/images/image2.jpeg'),
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      time: "3 minutes"
  
  },
  {
      title: "Lorem Ipsum is simply dummy text",
      name: "Hana",
      image: require('../../asset/images/image3.jpeg'),
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      time: "5 minutes"
  
  },
  {
      title: "Lorem Ipsum is simply dummy text",
      name: "Naul",
      image: require('../../asset/images/image4.jpeg'),
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      time: "10 minutes"
  },
  {
      title: "Lorem Ipsum is simply dummy text",
      name: "Kimihana",
      image: require('../../asset/images/image5.jpeg'),
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      time: "1 minutes"
  }
]

export default class DataBidingScreen extends Component{  
  
  renderHeader = () =>{
    return(
      <View style={styles.header}>
              <FontAwesomeIcon icon={faCamera}/>
              <Text style={styles.header__Avatar_nam}>Feed</Text>
              <FontAwesomeIcon icon={faPenClip}/>
      </View>
    )
  }

  renderAvatars = ()=>{
    return(
      <View>
        <ScrollView  horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView_Avartas}>
          {
            dataAvatar.map((data,index)=>(
              <View style={styles.header__Avartars}>
                <Image source={data.image} style={styles.ImgAvatar}/>
                <Text style={styles.header__Avatar_nam}>{data.name}</Text>                
              </View>              
            ))
          }
        </ScrollView>
      </View>
    )
  }

  renderBody = () =>{
    return(
      <View>
        <ScrollView>
        {
            dataFeeds.map((data, index)=>(
              <View style={styles.body__personal}>
                <View style={styles.body__personal_header}>
                  <Image source={data.image} style={styles.body__personal_header_avatar}/>
                  <View style={styles.body__personal_header_info}>
                    <View style={styles.body__personal_header_info_sub}>
                      <Text style={styles.body__personal_header_info_sub_Text}>{data.title}</Text>
                      <View style={styles.body__personal_header_info_NameAndTime}>
                        <Text>{data.name}</Text>
                        <Text>{data.time}</Text>
                      </View>
                    </View>
                  </View>
                  <View >
                    <Text style={styles.body__personal_header_options}>. . .</Text>
                  </View>
                </View>
                <View style={styles.body__personal_content}>
                  <Text style={styles.body__personal_content_Text}>{data.content}</Text>
                </View>
                <View style={styles.body__personal_footer}>
                  <View style={styles.body__personal_footer_Group}>
                  <Image source={require('../../asset/emoji/love.png')} style={styles.body__personal_footer_Image}/>
                  <Text>2</Text>
                  </View>
                  <View style={styles.body__personal_footer_Group}>
                  <Image source={require('../../asset/emoji/comment.png')} style={styles.body__personal_footer_Image}/>
                  <Text>4</Text>
                  </View>                  
                </View>
              </View>
            ))
          }
        </ScrollView>
      </View>
    )
  }

  render(){
    return(
      <View style={styles.root}>                
          {this.renderHeader()} 
          {this.renderAvatars()}
          {this.renderBody()}
      </View>
    )
  }
}