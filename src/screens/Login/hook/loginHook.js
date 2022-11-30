import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {authAction} from '../../../redux/action/authAction';
import {useNavigation} from '@react-navigation/native';

export const useLogin = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('vinh@gmail.com');
  const [password, setPassword] = useState('string');
  const [isLoading, setIsLoading] = useState(false);
  

  const login = async () => {
    if (username !== '' && password !== '') {
      const params = {
        email: username.toLowerCase(),
        password: password.trim(),
      };
      setIsLoading(true);
      const response = await authAction.onLogin(params, dispatch);
      setTimeout(() => {
        setIsLoading(false)
        navigation.navigate('Home')
    }, 300);
    }
    return {
        isLoading, login
    }
  };
};

const styles = StyleSheet.create({});
