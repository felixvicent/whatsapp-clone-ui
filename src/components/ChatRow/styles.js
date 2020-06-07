import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    marginHorizontal: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
  },
  textContainer: {
    maxWidth: 320,
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 30,
    marginRight: 20,
  },
  
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 2,
  },
  bio: {
    color: '#888',
    fontSize: 13,
  }
});

export default styles;