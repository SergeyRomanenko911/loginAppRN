import EStyleSheet from 'react-native-extended-stylesheet';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = EStyleSheet.create({
  container: {
    height: hp('5%'),
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    marginVertical: hp('0.5%'),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: hp('2%'),
  },
  inputStyle: {
    flex: 1,
    paddingHorizontal: wp('2%'),
    padding: 0,
    color: '#fff',
  },
  iconStyle: {
    width: hp('2.5%'),
    height: hp('2.5%'),
  },
});

export default styles;
