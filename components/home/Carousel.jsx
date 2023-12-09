import { View, Text } from 'react-native'
import React from 'react'
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from '../../constants/theme';


export default function Carousel() {
    const img = [
        "https://i5.walmartimages.com/asr/dcadef0d-0709-4d44-a4fb-c99b8145b709_3.5d656729637955a4f31f31b6bdf1bb91.jpeg",
        "https://i5.walmartimages.com/asr/dcadef0d-0709-4d44-a4fb-c99b8145b709_3.5d656729637955a4f31f31b6bdf1bb91.jpeg",
        "https://i5.walmartimages.com/asr/dcadef0d-0709-4d44-a4fb-c99b8145b709_3.5d656729637955a4f31f31b6bdf1bb91.jpeg"
    ]
    return (
        <View>
            <SliderBox images={img}
                dotColor={COLORS.tertiary}
                autoplay
                circleLoop
                inactiveDotColor="#90A4AE"
                ImageComponentStyle={{
                    borderRadius: 15,
                    marginRight: 30,
                    width: "90%"
                }} />
        </View>
    )
}