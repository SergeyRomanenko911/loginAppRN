import EStyleSheet from 'react-native-extended-stylesheet';
import {
  widthPercentageToDP as wp,
  // heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    padding: wp('6%'),
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export default styles;
