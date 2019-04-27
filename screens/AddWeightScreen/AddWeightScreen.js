import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input } from '../../components/input';
import { Button } from '../../components/button';

export default class AddWeightScreen extends React.Component {
  state = {
    weight: '90',
    date: '01.04.2019'
  };

  onChangeWeight = value => {
    this.setState({ weight: value });
  };
  onChangeDate = value => {
    this.setState({ date: value });
  };

  onPressButton = () => {
    console.log(this.state.weight);
    console.log(this.state.date);
  };

  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.container}>
          <Text style={{ fontSize: 30 }}>{this.state.BMI}</Text>
          <Input
            onChangeText={this.onChangeWeight}
            label='Weight'
            keyboardType='numeric'
            value={this.state.weight}
            placeholder='Weight'
          />
          <Input
            onChangeText={this.onChangeDate}
            label='Date'
            keyboardType='numeric'
            value={this.state.date}
            placeholder='Date'
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
