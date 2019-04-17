import EStyleSheet from 'react-native-extended-stylesheet';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = EStyleSheet.create({
  container: {
    position: 'absolute',
    left: wp('8%'),
    right: wp('8%'),
    bottom: -120,
  },
  text: {
    width: '100%',
    textAlign: 'center',
    color: '#fff',
    fontSize: 11,
    paddingHorizontal: wp('8%'),
    paddingVertical: hp('1%'),
  },
});

export default styles;
