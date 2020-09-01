import React from 'react';
import RoundedIcons, {RoundedIconProps} from "./RoundedIcon";
import {RectButton} from "react-native-gesture-handler";

interface RoundedIconButtonProps extends RoundedIconProps {
    onPress: () => void;
}

const RoundedIconButton = ({onPress, ...props}: RoundedIconButtonProps) => {

    return (
        <RectButton {...{onPress}}>
            <RoundedIcons {...props}/>
        </RectButton>
    );
};

RoundedIconButton.defaultProps = {
    iconRatio: 0.7,
}

export default RoundedIconButton;
