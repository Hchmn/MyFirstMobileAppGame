import React from 'react';
import * as theme from '../assets/themes/theme';
import RandomNumbers from './RandomNumbers';
import PropTypes from 'prop-types';
import shuffle from 'lodash.shuffle';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Button,
} from 'react-native';



class Game extends React.Component {
    static propTypes = {
      playAgain: PropTypes.func.isRequired,
    };


    initialSeconds = 20;
    arrayRandomNumbers = Array.from({length : 6}).map(() => 1 + Math.floor(10 * Math.random()));
    
    //Needed to install lodash.shuffle to use
    //Shuffle Random Numbers
    shuffleRandomNumbers = shuffle(this.arrayRandomNumbers);
    state = {
      selectedIndex: [],
      remainingSeconds: this.initialSeconds,
    };
    
    status = 'PLAYING'
    
    //reduce((acc, curr) => acc + curr, 0) -> will return the sum of the 4 random elements of arrayNumbers and if the array is empty it will return 0
    // totalValue = arrayRandomNumbers.slice(0, length(arrayRandomNumbers) - 2).reduce((acc, curr) => acc + curr, 0);
    totalValue = this.arrayRandomNumbers.slice(0, 4).reduce((acc,curr) => acc + curr, 0);

    checkIndexIfSelected = (indexNum) => {
      return this.state.selectedIndex.indexOf(indexNum) >= 0;
    }

    selectNumber = (indexNum) =>{
      this.setState((prevState) => ({
       selectedIndex: [...prevState.selectedIndex, indexNum]
      }));
    };
    gameStatus = () => {
    
      const totalSum = this.state.selectedIndex.reduce((acc, curr) => {
        return acc + this.shuffleRandomNumbers[curr];
      }, 0);
      if(this.state.remainingSeconds === 0){
        alert('YOU LOSE');
        this.status = 'LOSE';
        return 'LOSE';
      }
      if(totalSum > this.totalValue){
        this.status = 'LOSE';
        alert('YOU LOSE');
        return 'LOSE';
      }
      if(totalSum < this.totalValue){
        return 'PLAYING';
      }
      
      if(totalSum === this.totalValue){
        this.status = 'WON';
        alert('YOU WON');
        return 'WON';
      }
    }

    componentDidMount(){
      setInterval(() => {
        this.setState((prevState) => {
          if(prevState.remainingSeconds > 0 && this.status === 'PLAYING' ){
            return {remainingSeconds: prevState.remainingSeconds - 1};
          }
          
        });
      }, 1000)
    }
    render() {
      const gameStatus = this.gameStatus();
    
      return (
        
        <View style={styles.container}>
            <Text style={[styles.text, styles[`STATUS_${gameStatus}`]]}>
                {this.totalValue}
            </Text>

            <View style={styles.randomContainer}>
              {this.shuffleRandomNumbers.map((arrayRandomNumbers,index) =>
              <RandomNumbers 
                key={index}
                id = {index} 
                number={arrayRandomNumbers}
                isDisabled ={this.checkIndexIfSelected(index) || gameStatus !== 'PLAYING'}
                onPress = {this.selectNumber}
              />
              )}
             
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonDesign}
                onPress={this.props.playAgain}
              >
                <Text style={styles.buttonText}>
                  Play Again
                </Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.gameStatus}>
              {this.state.remainingSeconds}
            </Text>
        </View>
        
      );
    }
  }
  
  const styles = StyleSheet.create({
      container: {
        flex: 1,
        width: theme.SIZES.width,
        height: theme.SIZES.height,
        paddingTop: theme.SIZES.paddingTop,
      },

      text: {
        
        marginHorizontal: theme.SIZES.body1,
        fontSize: 50,
        textAlign: 'center',
        fontWeight: 'bold',
        color: theme.COLORS.black,
        marginBottom: 50,
      },
      randomContainer : {
          flex : 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          
      },
      random: {
        backgroundColor: theme.COLORS.darkgray,
        width: 130,
        marginHorizontal: 15,
        marginVertical: 25,
        fontSize: theme.SIZES.h1,
        textAlign: 'center',
      },
      gameStatus: {
        fontSize: theme.SIZES.h1,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 15
      },
      STATUS_PLAYING: {
        backgroundColor: theme.COLORS.darkgray,
      },

      STATUS_LOSE: {
        backgroundColor: theme.COLORS.default_error,
      },

      STATUS_WON: {
        backgroundColor: theme.COLORS.primary,
      },

      buttonContainer: {
        justifyContent: 'center',
       
        alignItems: 'center',
      },  

      buttonDesign : {
        alignItems: 'center',
        paddingVertical: 10,
        width: '40%',
        backgroundColor: theme.COLORS.default_secondary,
      },

      buttonText: {
        fontSize: theme.SIZES.h2,
        color: theme.COLORS.white,
        fontWeight: theme.FONTS.bold,
        
      }
      
  })
  export default Game;