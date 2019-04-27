import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { FlatList } from 'react-native-gesture-handler';
import { List } from '../../components/list';

export default class WeightScreen extends React.Component {
  state = {
    BMI: '90',
    weights: [
      {
        id: 1,
        value: '90',
        data: '12.08.2017'
      },
      {
        id: 2,
        value: '80',
        data: '12.08.2057'
      },
      {
        id: 3,
        value: '98',
        data: '12.08.2018'
      }
    ]
  };

  onChangeBMI = value => {
    this.setState({ BMI: value });
  };
  onPressButton = () => {
    console.log(this.state.BMI);
  };

  onEditItem = id => {
    console.log(`Edit ${id}`);
  };
  onRemoveItem = id => {
    console.log(`Remove ${id}`);
  };
  renderItem = ({ item }) => {
    return (
      <List
        item={item}
        onEditItem={() => this.onEditItem(item.id)}
        onRemoveItem={() => this.onRemoveItem(item.id)}
      />
    );
  };

  keyExtractor = item => `${item.id}`;

  render() {
    console.log(this.state);
    return (
      <View style={styles.mainView}>
        <View style={styles.container}>
          <Text style={{ fontSize: 30 }}>{this.state.BMI}</Text>
          <Input
            onChangeText={this.onChangeBMI}
            label='BMI'
            keyboardType='numeric'
            value={this.state.BMI}
          />

          <View style={styles.listContainer}>
            <FlatList
              data={this.state.weights}
              renderItem={this.renderItem}
              keyExtractor={this.keyExtractor}
            />
          </View>
          <Button onPressButton={this.onPressButton} text='ADD WEIGHT' />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
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
