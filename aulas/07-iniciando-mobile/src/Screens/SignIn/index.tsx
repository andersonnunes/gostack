import React from 'react';
import { Image, ScrollView, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';

import logoImg from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  return (
    <>
      <KeyboardAvoidingView style={{ flex: 1 }} enabled>
        <ScrollView keyboardShouldPersistTaps="handled">
          <Container>
            <Image source={logoImg} />

            <Title>Faça seu logon</Title>

            <Input name="email" placeholder="E-mail" icon="mail" />

            <Input name="password" placeholder="Senha" icon="lock" />

            <Button onPress={() => {}}>Entrar</Button>

            <ForgotPassword onPress={() => {}}>
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>

        <CreateAccountButton onPress={() => {}}>
          <Icon name="log-in" size={20} color="#ff9000" />
          <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
        </CreateAccountButton>
      </KeyboardAvoidingView>
    </>
  );
};
export default SignIn;
