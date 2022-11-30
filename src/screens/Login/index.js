import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

import {useDispatch} from 'react-redux';
import {loginHook} from './hook';
import {authAction} from '../../redux/action/authAction';
import {colors, normalize, normalizeHorizontal} from '../../helper';
import {IC_BACK, IC_APPLE, IC_GOOGLE, IC_SHOWPASS} from '../../assets';
import {Tip} from '../../component';

const Item = [
  {
    id: 1,
    image: IC_APPLE,
  },
  {
    id: 2,
    image: IC_GOOGLE,
  },
];

const renderItem = ({item, index}) => {
  return (
    <TouchableOpacity style={styles.item}>
      <Image source={item.image} style={styles.icFlatList} />
    </TouchableOpacity>
  );
};

export const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isShowPassWord, setIsShowPassword] = useState(false)

  const showPassword = () => {
    setIsShowPassword(!isShowPassWord)
  }

  const onLogin = async () => {
    setIsLoading(true);
    const params = {
      username: 'vinh17528@gmail.com',
      password: '12345678',
    };
    const response = await authAction.onLogin(params, dispatch);
    setTimeout(() => {
      navigation.navigate('Home');
    }, 600);
    setIsLoading(false);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Create')}
        style={styles.title}>
        <Image source={IC_BACK} style={styles.icBack} resizeMode="contain" />
        <Text style={styles.txtSignUp}>{'Sign Up'}</Text>
      </TouchableOpacity>
      <Text style={styles.txtHi}>{'Login with one of following options'}</Text>
      <View>
        <FlatList
          data={Item}
          renderItem={renderItem}
          keyExtractor={(item, index) => `${item?.id} ${item?.index}`}
          contentContainerStyle={styles.flatList}
        />
      </View>
      <Text style={styles.txtTitle}>{'User Name'}</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        style={styles.tipUsername}
        placeholderTextColor="#666"
        placeholder="Please enter email"
      />
      <Text style={styles.txtTitle}>{'Password'}</Text>
      <View style = {styles.password}>
        <TextInput
          value={password}
          onChangeText={setPassword}
          style={styles.tipPassword}
          placeholderTextColor="#666"
          placeholder="Please enter password"
          secureTextEntry = {isShowPassWord}
        />
        <TouchableOpacity onPress={showPassword}  style={styles.btnShowPass}>
          <Image
            source={IC_SHOWPASS}
            style={styles.icShowPassword}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={onLogin} style={styles.btnStart}>
        <LinearGradient
          start={{x: 0.0, y: 0.25}}
          end={{x: 0.5, y: 1.0}}
          colors={['rgba(255, 114, 42, 0.5)', 'rgba(255, 114, 42, 1)']}
          style={styles.linearGradient}>
          <Text style={styles.txtSignIn}>{'Login'}</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Text style={styles.txtBottom}>
          {'Don’t have an account? '}
          <Text style={styles.txtLogin}>{'Sign Up'}</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
  },
  title: {
    flexDirection: 'row',
    marginTop: normalize(50),
    marginLeft: normalizeHorizontal(20),
    alignItems: 'center',
  },
  txtSignUp: {
    color: colors.TEXT,
    fontSize: normalize(24),
    lineHeight: normalize(28),
    fontWeight: '700',
    marginLeft: normalizeHorizontal(16),
  },
  icBack: {
    height: normalize(20),
    aspectRatio: 1,
  },
  txtHi: {
    color: '#9C9C9C',
    marginTop: normalize(50),
    marginLeft: normalizeHorizontal(20),
  },
  item: {
    width: normalizeHorizontal(160),
    height: normalize(60),
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: normalize(40),
    marginLeft: normalizeHorizontal(10),
    marginRight: normalize(10),
    borderRadius: normalize(12),
  },
  icFlatList: {
    height: normalize(20),
    aspectRatio: 1,
    justifyContent: 'center',
  },
  flatList: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtTitle: {
    color: colors.TEXT,
    fontSize: normalize(18),
    lineHeight: normalize(22),
    fontWeight: '700',
    marginTop: normalize(16),
    marginLeft: normalizeHorizontal(20),
  },
  linearGradient: {
    width: '90%',
    height: normalize(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(12),
  },
  btnStart: {
    width: '90%',
    height: normalize(50),
    bottom: 0,
    marginTop: normalize(140),
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  txtSignIn: {
    color: colors.TEXT,
    fontSize: normalize(18),
    fontWeight: '700',
    lineHeight: normalize(20),
    letterSpacing: 1,
  },
  txtBottom: {
    color: '#9C9C9C',
    position: 'relative',
    bottom: 0,
    alignSelf: 'center',
    marginTop: normalize(40),
    fontWeight: '400',
    fontSize: normalize(18),
    lineHeight: normalize(22),
  },
  txtLogin: {
    color: colors.TEXT,
  },
  tipUsername: {
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: normalize(16),
    borderRadius: 12,
    paddingLeft: normalizeHorizontal(20),
    color: colors.TEXT,
  },
  password:{
    justifyContent:'center',

  },
  tipPassword: {
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: normalize(16),
    borderRadius: normalize(12),
    paddingLeft: normalizeHorizontal(20),
    color: colors.TEXT,
  },
  icShowPassword: {
    height: normalize(20),
    aspectRatio: 1,
    marginTop: normalize(16),
  },
  btnShowPass: {
    position: 'absolute',
    right: 0,
    marginRight: normalizeHorizontal(50)
  },
});
