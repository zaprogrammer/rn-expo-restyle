import React, {useRef} from 'react';
import {TextInput as RNTextInput} from 'react-native';
import {Box, Button, Checkbox, Container, Text, TextInput} from "../../components";
import {useFormik} from "formik";
import * as Yup from 'yup';
import Footer from "../components/Footer";
import {AuthenticationRoutes, StackNavigationProps} from "../../components/Navigation";
import {BorderlessButton} from "react-native-gesture-handler";

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});

const Login = ({navigation}: StackNavigationProps<AuthenticationRoutes, "Login">) => {

    const password = useRef<RNTextInput>(null);
    const footer = (
        <Footer title={"Don't have an account?"}
                action={"Sign up here"}
                onPress={() => navigation.navigate("SignUp")}
        />
    );

    const {
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        setFieldValue
    } = useFormik({
        initialValues: {email: '', password: '', remember: true},
        validationSchema: LoginSchema,
        onSubmit: () => navigation.navigate("Home"),
    });

    return (
        <Container pattern={0} {...{footer}}>
            <Box padding={"xl"}>
                <Text variant={"title1"} textAlign={"center"} marginBottom={"l"}>
                    Welcome back
                </Text>
                <Text variant={"body"} textAlign={"center"}>
                    Use your credentials below and login to your account
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
                        returnKeyType="go"
                        returnKeyLabel="go"
                        onSubmitEditing={() => handleSubmit()}
                        secureTextEntry
                    />
                    <Box flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}
                         marginVertical={"s"}>
                        <Checkbox
                            label={"Remember me"}
                            checked={values.remember}
                            onChange={() => setFieldValue("remember", !values.remember)}/>
                        <BorderlessButton onPress={() => navigation.navigate("ForgotPassword")}>
                            <Text variant={"button"} color={"primary"}>Forgot password?</Text>
                        </BorderlessButton>
                    </Box>
                    <Box alignItems={"center"} marginTop={"m"}>
                        <Button variant={"primary"} label={"Log into your account"} onPress={handleSubmit}/>
                    </Box>
                </Box>
            </Box>
        </Container>
        // <Box></Box>
    );
};

export default Login;
