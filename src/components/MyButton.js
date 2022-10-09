import React from "react";
import { TouchableOpacity, Text, Image } from "react-native"
import { PropTypes } from "prop-types";

const MyButton = (props) => {
  // console.log('props', props.style)
  return (
    <TouchableOpacity 
      style={
        props.style
      }
      onPress={props.click}
    >
      <Image
        style={{
          borderRadius: '50%',
          width: 20,
          height: 20,
        }}
        source={{ uri: 'data:image/png;base64,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' }}
      ></Image>
      <Text style={props.style}>{ props.title }</Text>
    </TouchableOpacity>
  )
}

export default MyButton

MyButton.propTypes = {
  title: PropTypes.string.isRequired,
  click: PropTypes.func
}

MyButton.defaultProps = {
  title: 'Default',
  btn: {
    backgroundColor: 'blue',
  },
  btnText: {
    fontSize: 20,
    color: '#fff'
  }
}