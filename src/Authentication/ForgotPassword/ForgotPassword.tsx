import React from 'react';
import {Linking} from 'react-native';
import {Box, Button, Container, Text, TextInput} from "../../components";
import {useFormik} from "formik";
import * as Yup from 'yup';
import Footer from "../components/Footer";
import {AuthenticationRoutes, StackNavigationProps} from "../../components/Navigation";

const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
});

const ForgotPassword = ({navigation}: StackNavigationProps<AuthenticationRoutes, "ForgotPassword">) => {

    const footer = (
        <Footer title={"Don't work?"}
                action={"Try another way"}
                onPress={() => Linking.openURL("mailto:ahmed@zaprogrammer.com")}
        />
    );

    const {
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        touched,
    } = useFormik({
        initialValues: {email: ''},
        validationSchema: ForgotPasswordSchema,
        onSubmit: () => navigation.navigate("PasswordChanged"),
    });

    return (
        <Container pattern={2} {...{footer}}>
            <Box padding={"xl"} flex={1} justifyContent={"center"}>
                <Text variant={"title1"} textAlign={"center"} marginBottom={"l"}>
                    Forgot Password?
                </Text>
                <Text variant={"body"} textAlign={"center"}>
                    Enter the email address associated with your account
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
                            returnKeyType={"go"}
                            returnKeyLabel={"go"}
                            onSubmitEditing={() => handleSubmit()}
                        />
                    </Box>
                    <Box alignItems={"center"} marginTop={"m"}>
                        <Button variant={"primary"} label={"Reset password"} onPress={handleSubmit}/>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default ForgotPassword;
