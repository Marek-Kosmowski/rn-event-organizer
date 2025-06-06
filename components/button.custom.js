import { Pressable, StyleSheet, Text } from 'react-native';
import { AppStyle } from '../utils/constants';

export default function ButtonCustom(props) {
  return (
    <Pressable
      onPress={props.onPress}
      style={({ pressed }) => [
        styles.button,
        props.light && {
          borderColor: pressed ? AppStyle.safflower : AppStyle.borderColor,
        },
      ]}
    >
      <Text
        style={[
          styles.buttonText,
          props.light && {
            color: '#fffffe',
          },
        ]}
      >
        {props.title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    height: 58,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: AppStyle.borderColor,
  },
  buttonText: {
    fontSize: 20,
    //* color of the text might be changed, depending on future develomplent
    color: AppStyle.paragraph,
  },
});
