import { StyleSheet, Pressable, Text } from 'react-native';

export const NavigationPress = ({ text, onPress }) => {
  return (
    <Pressable style={styles.titleContainer} onPressOut={onPress}>
      <Text style={styles.titleText}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    width: '60%',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 12,
    backgroundColor: '#d81f1f',
    padding: 12,
    borderRadius: 8,
  },
  titleText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
