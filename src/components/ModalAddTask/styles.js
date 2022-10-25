import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  background: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  modalContainer: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
  },
  textInputContainer: {
    width: '90%',
    alignSelf: 'center',
    height: 40,
    marginBottom: 20,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderRadius: 10,
  },
  buttonContainer: {
    height: 40,
    paddingHorizontal: 30,
    backgroundColor: '#1A84BF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
});
