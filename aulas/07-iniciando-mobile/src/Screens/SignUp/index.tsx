import React, { useRef } from 'react';
import { Image, ScrollView, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { Container, Title, BackToSignIn, BackToSignInText } from './styles';

import logoImg from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  return (
    <>
      <KeyboardAvoidingView style={{ flex: 1 }} enabled>
        <ScrollView keyboardShouldPersistTaps="handled" style={{ flex: 1 }}>
          <Container>
            <Image source={logoImg} />

            <Title>Faça seu cadastro</Title>

            <Form
              ref={formRef}
              onSubmit={data => {
                console.log(data);
              }}
            >
              <Input name="name" placeholder="Nome" icon="user" />

              <Input name="email" placeholder="E-mail" icon="mail" />

              <Input name="password" placeholder="Senha" icon="lock" />

              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                Cadastrar
              </Button>
            </Form>
          </Container>
        </ScrollView>

        <BackToSignIn onPress={() => navigation.navigate('SignIn')}>
          <Icon name="arrow-left" size={20} color="#fff" />
          <BackToSignInText>Voltar para logon</BackToSignInText>
        </BackToSignIn>
      </KeyboardAvoidingView>
    </>
  );
};
export default SignUp;
