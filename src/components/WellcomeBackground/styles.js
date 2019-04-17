import EStyleSheet from 'react-native-extended-stylesheet';
import {
  widthPercentageToDP as wp,
  // heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = EStyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(15, 39, 76)',
  },
  logoContainer: {
    paddingTop: 40,
    width: wp('100%'),
    height: wp('100%') * 1.452,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: wp('100%'),
    height: wp('100%') * 1.452,
    position: 'absolute',
  },
  logo: {
    width: wp('65%'),
  },
  textTop: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
  },
  secondText: {
    fontSize: '$textTag',
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 60,
  },
});

export default styles;
