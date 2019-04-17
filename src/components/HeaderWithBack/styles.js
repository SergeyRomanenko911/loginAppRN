import EStyleSheet from 'react-native-extended-stylesheet';
import {
  // widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = EStyleSheet.create({
  container: {
    marginTop: hp('2%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  img: {
    marginTop: 5,
    width: 40,
    height: 40,
  },
  textTitle: {
    color: '#fff',
    fontFamily: 'Rubik-Medium',
    fontSize: '$textDefault',
  },
  imgLogo: {
    height: 30,
    width: 60,
  },

  btn: {
    paddingVertical: hp('1%'),
    width: 40,
    height: 40,
  },
  imgClose: {
    width: 30,
    height: 30,
  },
});

export default styles;
