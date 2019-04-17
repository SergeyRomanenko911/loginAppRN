import EStyleSheet from 'react-native-extended-stylesheet';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = EStyleSheet.create({
  container: {
    height: hp('7%'),
    borderRadius: hp('3.5%'),
    backgroundColor: '$selectedColor',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
  },
  containerWithWidth: {
    height: hp('7%'),
    width: wp('90%'),
    borderRadius: hp('3.5%'),
    backgroundColor: '$selectedColor',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconStyle: {
    width: hp('3%'),
    height: hp('3%'),
  },
  textBody: {
    fontSize: '$textSmall',
    color: '#fff',
    marginLeft: wp('2%'),
    marginRight: wp('2%'),
    fontFamily: 'Rubik',
  },
  textRoute: {
    fontSize: '$textDefault',
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;
