import React, {useRef} from 'react';
import {TextInput as RNTextInput} from 'react-native';
import {Box, Button, Container, Text, TextInput} from "../../components";
import {useFormik} from "formik";
import * as Yup from 'yup';
import Footer from "../components/Footer";
import {AuthNavigationProps} from "../../components/Navigation";
import {CommonActions} from "@react-navigation/native";

const SignUpSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    passwordConfirmation: Yup.string()
        .equals([Yup.ref("password")], "Passwords must match!")
        .required('Required'),
});

const SignUp = ({navigation}: AuthNavigationProps<'SignUp'>) => {

    const password = useRef<RNTextInput>(null);
    const passwordConfirmation = useRef<RNTextInput>(null);

    const footer = (
        <Footer title={"Already have an account?"}
                action={"Login here"}
                onPress={() => navigation.navigate("Login")}
        />
    );

    const {
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        touched,
    } = useFormik({
        initialValues: {email: '', password: '', passwordConfirmation: ''},
        validationSchema: SignUpSchema,
        onSubmit: () => navigation.dispatch(CommonActions.reset({
            index: 0,
            routes: [{name: 'Home'}]
        })),
    });

    return (
        <Container pattern={1} {...{footer}}>
            <Text variant={"title1"} textAlign={"center"} marginBottom={"l"}>
                Create account
            </Text>
            <Text variant={"body"} textAlign={"center"}>
                Let's know what is your name, email, and your password
            </Text>
            <Box>
                <Box marginVertical={"m"}>
                    <TextInput
                        icon="mail" placeholder="Enter your Email"
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        error={errors.email}
                        touched={touched.email}
                        autoCompleteType={"email"}
                        autoCapitalize={"none"}
                        returnKeyType={"next"}
                        returnKeyLabel={"next"}
                        onSubmitEditing={() => password.current?.focus()}
                    />
                </Box>
                <TextInput
                    ref={password}
                    icon="lock" placeholder="Enter your Password"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    error={errors.password}
                    touched={touched.password}
                    autoCompleteType="password"
                    autoCapitalize="none"
                    returnKeyType="next"
                    returnKeyLabel="next"
                    onSubmitEditing={() => passwordConfirmation.current?.focus()}
                    secureTextEntry
                />
                <Box marginVertical={"m"}>
                    <TextInput
                        ref={passwordConfirmation}
                        icon="lock" placeholder="Confirm your Password"
                        onChangeText={handleChange('passwordConfirmation')}
                        onBlur={handleBlur('passwordConfirmation')}
                        error={errors.passwordConfirmation}
                        touched={touched.passwordConfirmation}
                        autoCompleteType="password"
                        autoCapitalize="none"
                        returnKeyType="go"
                        returnKeyLabel="go"
                        onSubmitEditing={() => handleSubmit()}
                        secureTextEntry
                    />
                </Box>
                <Box alignItems={"center"} marginTop={"m"}>
                    <Button variant={"primary"} label={"Create your account"} onPress={handleSubmit}/>
                </Box>
            </Box>
        </Container>
    );
};

export default SignUp;
