import React from 'react';
import RoundedIcons, {RoundedIconProps} from "./RoundedIcon";
import {BorderlessButton} from "react-native-gesture-handler";

interface RoundedIconButtonProps extends RoundedIconProps {
    onPress: () => void;
}

const RoundedIconButton = ({onPress, ...props}: RoundedIconButtonProps) => {

    return (
        <BorderlessButton {...{onPress}}>
            <RoundedIcons {...props}/>
        </BorderlessButton>
    );
};

RoundedIconButton.defaultProps = {
    ...RoundedIcons.defaultProps,
}

export default RoundedIconButton;
