import React, { Component } from 'react';
import { Dimensions, Text, View, Image, ScrollView } from 'react-native';
import CardPost from './src/components/CardPost';

export default class Feed extends Component {
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
      <ScrollView>
        {this.state.posts.length ? null : <Text style={{fontSize:20}}>Cargando...</Text>}
        {this.state.posts.map(function (post) {
          return <CardPost key={post.id} post={post} />;
        })}
      </ScrollView>
    );
  }
}

