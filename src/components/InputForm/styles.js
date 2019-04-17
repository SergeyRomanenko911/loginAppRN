import EStyleSheet from 'react-native-extended-stylesheet';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = EStyleSheet.create({
  container: {
    height: hp('5%'),
    borderWidth: 1,
    borderColor: '#d6d6d6',
    backgroundColor: '#fff',
    borderRadius: hp('1.5%'),
    marginVertical: hp('0.5%'),
  },
  inputStyle: {
    flex: 1,
    paddingHorizontal: wp('2%'),
    padding: 0,
    color: 'rgb(13, 38, 77)',
  },
});

export default styles;
