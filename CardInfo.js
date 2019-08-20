import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Body, Text } from 'native-base';
import { Platform, StyleSheet, View } from 'react-native';

class CardInfo extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Card>
          <CardItem header>
              <Text>{this.props.time}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                   falkdsf ladskjfla ;sdkjfal;skdjfal;sk djfal;sdk jfal;sdkfjal;dkjf a;lkdfj a;slfj ls;ad fjs;lkd jfa;lsk dajfl;sdj f;adlk jdl kfjl ksljfls 
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>See More Info</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "200px"
  }
});




export default CardInfo;