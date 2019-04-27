import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { Avatar } from '../../components/avatar';
import { RadioButtons } from '../../components/radioButton';

export default class ProfileScreen extends React.Component {
  state = {
    height: '188',
    name: 'Mateusz',
    birthDate: '01.01.1980',
    gender: ''
  };

  onChangeHeight = value => {
    this.setState({ height: value });
  };
  onChangeName = value => {
    this.setState({ name: value });
  };
  onChangeBirthName = value => {
    this.setState({ birthDate: value });
  };

  onPressButton = () => {
    console.log(this.state.weight);
    console.log(this.state.date);
  };
  onRadioButtonPress = value => () => {
    this.setState({ gender: value });
  };

  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.container}>
          <Avatar />
          <Text style={{ fontSize: 30 }}>{this.state.BMI}</Text>
          <Input
            onChangeText={this.onChangeName}
            label='Name'
            value={this.state.name}
            placeholder='Name'
          />
          <Input
            onChangeText={this.onChangeBirthDate}
            keyboardType='numeric'
            label='Birth Date'
            value={this.state.birthDate}
            placeholder='Birth Date'
          />
          <Input
            onChangeText={this.onChangeHeight}
            label='Height'
            keyboardType='numeric'
            value={this.state.height}
            placeholder='Height'
          />
          <RadioButtons
            currentValue={this.state.gender}
            onPress={this.onRadioButtonPress}
          />
          <Button onPressButton={this.onPressButton} text='Save' />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 40
  },
  listContainer: {
    flex: 1,
    width: '100%',
    marginTop: 20
  },
  mainView: {
    flex: 1,
    backgroundColor: '#D7E8FF'
  }
});
