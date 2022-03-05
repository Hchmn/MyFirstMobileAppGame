import React from 'react';
import * as theme from '../assets/themes/theme';

import PropTypes from 'prop-types';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,

} from 'react-native';

class RandomNumbers extends React.Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        number: PropTypes.number.isRequired,
        isDisabled: PropTypes.bool.isRequired,
        onPress: PropTypes.func.isRequired,
    };
    handlePress = () => {
        if(this.props.isDisabled) { return;}
        this.props.onPress(this.props.id);
        console.log(this.props.id);
    };
    render() {
      return (
        <TouchableOpacity
        onPress={this.handlePress}
        >
            <Text style={[styles.random, this.props.isDisabled && styles.disabled]}>{this.props.number}</Text> 
        </TouchableOpacity> 
        
      );
    }
  }

  const styles = StyleSheet.create({
    random: {
        backgroundColor: theme.COLORS.darkgray,
        width: 130,
        marginHorizontal: 15,
        marginVertical: 25,
        fontSize: theme.SIZES.h1,
        textAlign: 'center',
      },

    disabled: {
        opacity: 0.4
    }
  });

  export default RandomNumbers;