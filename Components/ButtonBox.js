import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Metrics, Fonts } from '../screens/styles';

export default class ButtonBox extends React.Component {
  static propTypes = {
    onPress: PropTypes.func,
    image: PropTypes.number,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    text: PropTypes.string
  }

  render () {
    return (
      <TouchableOpacity style={[styles.container, this.props.style]} onPress={this.props.onPress}>
        <Image resizeMode='contain' source={this.props.image} style={styles.image} />
        <Text style={styles.label}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    container: 
    {
        width: Metrics.screenWidth / 2,
        aspectRatio: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: 
    {
        width: Metrics.icons.xl,
        height: Metrics.icons.xl,
        margin: Metrics.baseMargin
    },
    label: {
        ...Fonts.style.h2,
        fontSize: 14,
    }
})