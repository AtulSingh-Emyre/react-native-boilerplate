import * as React from 'react';
import {Image, ScrollView, View} from 'react-native';
import Container from '../components/Container';
import CustomText from '../components/CustomText';
import {Spacing} from '../styles/Global';
import {PrimaryTheme} from '../styles/Themes';
import DateNTime from '../components/DateNTime';
import Carousel from 'react-native-snap-carousel';
import {DiaryItem} from '../models/DiaryItem';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import LightBox from 'react-native-lightbox';
interface Props {
  route: any;
}

interface State {}

class ViewDiaryItem extends React.Component<Props, State> {
  private readonly diaryItem: DiaryItem = this.props.route.params.diaryItem;
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderItem = data => {
    return (
      <LightBox>
        <Image
          style={{height: hp('35%'), width: wp('100%')}}
          source={{uri: data.item}}
        />
      </LightBox>
    );
  };
  render() {
    return (
      <Container
        containerStyles={{
          justifyContent: 'flex-start',
        }}>
        <ScrollView>
          <View>
            <Carousel
              containerCustomStyle={{height: 'auto', alignSelf: 'center'}}
              sliderWidth={wp('100%')}
              itemWidth={wp('100%')}
              autoplay={true}
              loop={true}
              data={this.diaryItem.images}
              renderItem={this.renderItem}
            />
            <View style={{padding: 10}}>
              <DateNTime timeStamp={this.diaryItem.timeStamp} />
              <CustomText
                style={{
                  marginBottom: Spacing.large.marginBottom,
                  color: PrimaryTheme.$ACCENT_COLOR,
                }}>
                {this.diaryItem.subject}
              </CustomText>
              <CustomText>{this.diaryItem.description}</CustomText>
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }

  componentDidMount(): void {}
}

export default ViewDiaryItem;
