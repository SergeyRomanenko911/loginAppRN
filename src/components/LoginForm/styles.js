import EStyleSheet from 'react-native-extended-stylesheet';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = EStyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -120,
    backgroundColor: '#fff',
    borderTopLeftRadius: hp('3.5%'),
    borderTopRightRadius: hp('3.5%'),
    paddingBottom: 0,
  },
  content: {
    padding: wp('8%'),
  },
  text: {
    width: '100%',
    textAlign: 'center',
    color: '#fff',
    fontSize: 11,
    paddingHorizontal: wp('8%'),
    paddingVertical: hp('1%'),
  },
  forgotContainer: {
    flex: 1,
    height: hp('6%'),
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: -hp('0.5%'),
  },
  forgotBtn: {
    paddingVertical: hp('1%'),
  },
  textForgot: {
    textDecorationLine: 'underline',
    color: '#0d264d',
  },
  errorText: {
    color: 'red',
    fontSize: '$textMin',
    fontFamily: 'Rubik',
    textAlign: 'center',
  },
});

export default styles;
