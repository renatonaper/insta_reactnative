import React, { Component } from 'react';
import { Dimensions, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import CardPost from './src/components/CardPost';

export class FeedScreen extends Component {

  static navigationOptions = {
    title: "Instaelum"
  };

  state = {
    posts: []
  };
  componentDidMount() {
    fetch("https://instalura-api.herokuapp.com/api/public/fotos/rafael")
      .then(function(respostaDoServer){
        return respostaDoServer.json();
      })
      .then(respostaConvertida => {
        this.setState({
          posts: respostaConvertida
        });
      });
  }
  render() {
   // console.warn( this.state.posts.length);
    return (
      <ScrollView style={{marginTop: 30}}>
        {this.state.posts.map(post =>  {
          return(
          <TouchableOpacity
            key={post.id}
            onPress={ () => {
              this.props.navigation.navigate("Inicial",{
                postId:post.id,
                post: post
              });
            }}
           >
             <CardPost post={post}/>
           </TouchableOpacity>
        );
      })
      }
      </ScrollView>
    );
  }
}

