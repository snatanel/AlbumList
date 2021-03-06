import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image} = album;
    const { thumbnailStyle, 
            headerContentStyle, 
            thumbnailContainerStyle, 
            headerTextStyle,
            imageStyle
    } = styles;

    return (
        <Card>
            <CardSection>
                <View sytle={thumbnailContainerStyle}>
                    <Image 
                     style={thumbnailStyle}
                     source={{ uri: thumbnail_image }}
                    />
                </View>
                <View sytle={headerContentStyle}>
                    <Text sytle={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image
                    style={imageStyle}
                    source={{uri: image}}
                />
            </CardSection>

            <CardSection>
                <Button
                />
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;
