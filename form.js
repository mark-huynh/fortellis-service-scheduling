import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { Container, Button,  Header, Content, Form, Item, Input } from 'native-base';

// const styles = StyleSheet.create({
//     : {
//       backgroundColor: 'blue',
//       fontWeight: 'bold',
//       color: 'white',
//       textAlign: 'center',
//       alignItems: 'center',
//     },


class form extends React.Component {
    render() {
        return (
        <Container>
          <Header />
          <Content>
              <Text style = {{fontSize: 25, textAlign: 'center'}}>Make an Appointment</Text>
            <Form>
              <Item>
                <Input placeholder="Name" />
              </Item>
              <Item>
                <Input placeholder="Dealership" />
              </Item>
              <Item>
                <Input placeholder="Date" />
              </Item>
              <Item>
                <Input placeholder="Contact Information" />
              </Item>
              <Item last>
                <Input placeholder="Requested Service Description" />
              </Item>
              <Item last>
                <View >
                    <Button
                    style = {{alignSelf: 'center'}}
                    onPress={ () => this.props.navigation.navigate('HomeScreen') }>
                        <Text style={{color: 'white'}}>Submit! </Text>
                    </Button>
                </View>
              </Item>
            </Form>
          </Content>
        </Container>
        )
    };
}

export default form;

