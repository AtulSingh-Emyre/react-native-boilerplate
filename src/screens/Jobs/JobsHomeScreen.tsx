import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import Background from '../../components/Authentication/Background';
import {theme} from '../../utils/theme';
import {FAB, Portal, Searchbar} from 'react-native-paper';
import {FlatList} from 'react-native-gesture-handler';
import DataCard from '../../components/Jobs/DataCard';
// import {Navigation} from '../types';

type Props = {
  navigation: any;
};

const JobsObject = [
  {
    title: 'zoox',
    logo: 'https://www.google.com/search?q=logo&rlz=1C1SQJL_enIN857IN857&tbm=isch&source=iu&ictx=1&fir=anzKS0A4Wzi6NM%252CxqICHFMKrhE4pM%252C_%253B-eDJED2XpumqjM%252CMUnsBNeVrAyn1M%252C_%253B26gNWzgDRxqo6M%252CNThFvsymDBmxOM%252C_%253BXD159KlDsX089M%252C95YyYbaoa7wZ4M%252C_%253BC6mbfESS1zkCfM%252CEIqhu_9S4fuumM%252C_%253Bz20VsyMwKMnQJM%252C9LBFSEROz6s7HM%252C_%253BSOBdkXCF9ViRrM%252CkJKp39jOzj0uvM%252C_%253B1TrhrdO8NvbQ3M%252CtDwdjwygwP9k7M%252C_%253BjwXKbteDY4LwaM%252CBr4u6h_MH9gpQM%252C_%253B8cWPH_wbWDvb-M%252CldkRqsCRrSjoyM%252C_%253BHn8rMOJiNo3goM%252CGSgLCtA3jnVNYM%252C_%253BfKi7VXzan7slnM%252C3KaHON_Sc5320M%252C_%253B9GQEkn1VXF_Q_M%252C1UQ0uU1gb1rCxM%252C_&vet=1&usg=AI4_-kSx4qnskgxjigCqNwRNei8KVDdstA&sa=X&sqi=2&ved=2ahUKEwj1-ZHy-Mb0AhVRA2MBHYaRCPwQ9QF6BAgNEAE#imgrc=-eDJED2XpumqjM',
    location: 'Work from home, remote',
    position: 'Perception Internship',
    starred: false,
    saved: false,
    applied: false,
  },
  {
    title: 'zoox',
    logo: 'https://www.google.com/search?q=logo&rlz=1C1SQJL_enIN857IN857&tbm=isch&source=iu&ictx=1&fir=anzKS0A4Wzi6NM%252CxqICHFMKrhE4pM%252C_%253B-eDJED2XpumqjM%252CMUnsBNeVrAyn1M%252C_%253B26gNWzgDRxqo6M%252CNThFvsymDBmxOM%252C_%253BXD159KlDsX089M%252C95YyYbaoa7wZ4M%252C_%253BC6mbfESS1zkCfM%252CEIqhu_9S4fuumM%252C_%253Bz20VsyMwKMnQJM%252C9LBFSEROz6s7HM%252C_%253BSOBdkXCF9ViRrM%252CkJKp39jOzj0uvM%252C_%253B1TrhrdO8NvbQ3M%252CtDwdjwygwP9k7M%252C_%253BjwXKbteDY4LwaM%252CBr4u6h_MH9gpQM%252C_%253B8cWPH_wbWDvb-M%252CldkRqsCRrSjoyM%252C_%253BHn8rMOJiNo3goM%252CGSgLCtA3jnVNYM%252C_%253BfKi7VXzan7slnM%252C3KaHON_Sc5320M%252C_%253B9GQEkn1VXF_Q_M%252C1UQ0uU1gb1rCxM%252C_&vet=1&usg=AI4_-kSx4qnskgxjigCqNwRNei8KVDdstA&sa=X&sqi=2&ved=2ahUKEwj1-ZHy-Mb0AhVRA2MBHYaRCPwQ9QF6BAgNEAE#imgrc=-eDJED2XpumqjM',
    location: 'Work from home, remote',
    position: 'Perception Internship',
    starred: false,
    saved: false,
    applied: false,
  },
  {
    title: 'zoox',
    logo: 'https://www.google.com/search?q=logo&rlz=1C1SQJL_enIN857IN857&tbm=isch&source=iu&ictx=1&fir=anzKS0A4Wzi6NM%252CxqICHFMKrhE4pM%252C_%253B-eDJED2XpumqjM%252CMUnsBNeVrAyn1M%252C_%253B26gNWzgDRxqo6M%252CNThFvsymDBmxOM%252C_%253BXD159KlDsX089M%252C95YyYbaoa7wZ4M%252C_%253BC6mbfESS1zkCfM%252CEIqhu_9S4fuumM%252C_%253Bz20VsyMwKMnQJM%252C9LBFSEROz6s7HM%252C_%253BSOBdkXCF9ViRrM%252CkJKp39jOzj0uvM%252C_%253B1TrhrdO8NvbQ3M%252CtDwdjwygwP9k7M%252C_%253BjwXKbteDY4LwaM%252CBr4u6h_MH9gpQM%252C_%253B8cWPH_wbWDvb-M%252CldkRqsCRrSjoyM%252C_%253BHn8rMOJiNo3goM%252CGSgLCtA3jnVNYM%252C_%253BfKi7VXzan7slnM%252C3KaHON_Sc5320M%252C_%253B9GQEkn1VXF_Q_M%252C1UQ0uU1gb1rCxM%252C_&vet=1&usg=AI4_-kSx4qnskgxjigCqNwRNei8KVDdstA&sa=X&sqi=2&ved=2ahUKEwj1-ZHy-Mb0AhVRA2MBHYaRCPwQ9QF6BAgNEAE#imgrc=-eDJED2XpumqjM',
    location: 'Work from home, remote',
    position: 'Perception Internship',
    starred: false,
    saved: false,
    applied: false,
  },
  {
    title: 'zoox',
    logo: 'https://www.google.com/search?q=logo&rlz=1C1SQJL_enIN857IN857&tbm=isch&source=iu&ictx=1&fir=anzKS0A4Wzi6NM%252CxqICHFMKrhE4pM%252C_%253B-eDJED2XpumqjM%252CMUnsBNeVrAyn1M%252C_%253B26gNWzgDRxqo6M%252CNThFvsymDBmxOM%252C_%253BXD159KlDsX089M%252C95YyYbaoa7wZ4M%252C_%253BC6mbfESS1zkCfM%252CEIqhu_9S4fuumM%252C_%253Bz20VsyMwKMnQJM%252C9LBFSEROz6s7HM%252C_%253BSOBdkXCF9ViRrM%252CkJKp39jOzj0uvM%252C_%253B1TrhrdO8NvbQ3M%252CtDwdjwygwP9k7M%252C_%253BjwXKbteDY4LwaM%252CBr4u6h_MH9gpQM%252C_%253B8cWPH_wbWDvb-M%252CldkRqsCRrSjoyM%252C_%253BHn8rMOJiNo3goM%252CGSgLCtA3jnVNYM%252C_%253BfKi7VXzan7slnM%252C3KaHON_Sc5320M%252C_%253B9GQEkn1VXF_Q_M%252C1UQ0uU1gb1rCxM%252C_&vet=1&usg=AI4_-kSx4qnskgxjigCqNwRNei8KVDdstA&sa=X&sqi=2&ved=2ahUKEwj1-ZHy-Mb0AhVRA2MBHYaRCPwQ9QF6BAgNEAE#imgrc=-eDJED2XpumqjM',
    location: 'Work from home, remote',
    position: 'Perception Internship',
    starred: false,
    saved: false,
    applied: false,
  },
  {
    title: 'zoox',
    logo: 'https://www.google.com/search?q=logo&rlz=1C1SQJL_enIN857IN857&tbm=isch&source=iu&ictx=1&fir=anzKS0A4Wzi6NM%252CxqICHFMKrhE4pM%252C_%253B-eDJED2XpumqjM%252CMUnsBNeVrAyn1M%252C_%253B26gNWzgDRxqo6M%252CNThFvsymDBmxOM%252C_%253BXD159KlDsX089M%252C95YyYbaoa7wZ4M%252C_%253BC6mbfESS1zkCfM%252CEIqhu_9S4fuumM%252C_%253Bz20VsyMwKMnQJM%252C9LBFSEROz6s7HM%252C_%253BSOBdkXCF9ViRrM%252CkJKp39jOzj0uvM%252C_%253B1TrhrdO8NvbQ3M%252CtDwdjwygwP9k7M%252C_%253BjwXKbteDY4LwaM%252CBr4u6h_MH9gpQM%252C_%253B8cWPH_wbWDvb-M%252CldkRqsCRrSjoyM%252C_%253BHn8rMOJiNo3goM%252CGSgLCtA3jnVNYM%252C_%253BfKi7VXzan7slnM%252C3KaHON_Sc5320M%252C_%253B9GQEkn1VXF_Q_M%252C1UQ0uU1gb1rCxM%252C_&vet=1&usg=AI4_-kSx4qnskgxjigCqNwRNei8KVDdstA&sa=X&sqi=2&ved=2ahUKEwj1-ZHy-Mb0AhVRA2MBHYaRCPwQ9QF6BAgNEAE#imgrc=-eDJED2XpumqjM',
    location: 'Work from home, remote',
    position: 'Perception Internship',
    starred: false,
    saved: false,
    applied: false,
  },
  {
    title: 'zoox',
    logo: 'https://www.google.com/search?q=logo&rlz=1C1SQJL_enIN857IN857&tbm=isch&source=iu&ictx=1&fir=anzKS0A4Wzi6NM%252CxqICHFMKrhE4pM%252C_%253B-eDJED2XpumqjM%252CMUnsBNeVrAyn1M%252C_%253B26gNWzgDRxqo6M%252CNThFvsymDBmxOM%252C_%253BXD159KlDsX089M%252C95YyYbaoa7wZ4M%252C_%253BC6mbfESS1zkCfM%252CEIqhu_9S4fuumM%252C_%253Bz20VsyMwKMnQJM%252C9LBFSEROz6s7HM%252C_%253BSOBdkXCF9ViRrM%252CkJKp39jOzj0uvM%252C_%253B1TrhrdO8NvbQ3M%252CtDwdjwygwP9k7M%252C_%253BjwXKbteDY4LwaM%252CBr4u6h_MH9gpQM%252C_%253B8cWPH_wbWDvb-M%252CldkRqsCRrSjoyM%252C_%253BHn8rMOJiNo3goM%252CGSgLCtA3jnVNYM%252C_%253BfKi7VXzan7slnM%252C3KaHON_Sc5320M%252C_%253B9GQEkn1VXF_Q_M%252C1UQ0uU1gb1rCxM%252C_&vet=1&usg=AI4_-kSx4qnskgxjigCqNwRNei8KVDdstA&sa=X&sqi=2&ved=2ahUKEwj1-ZHy-Mb0AhVRA2MBHYaRCPwQ9QF6BAgNEAE#imgrc=-eDJED2XpumqjM',
    location: 'Work from home, remote',
    position: 'Perception Internship',
    starred: false,
    saved: false,
    applied: false,
  },
  {
    title: 'zoox',
    logo: 'https://www.google.com/search?q=logo&rlz=1C1SQJL_enIN857IN857&tbm=isch&source=iu&ictx=1&fir=anzKS0A4Wzi6NM%252CxqICHFMKrhE4pM%252C_%253B-eDJED2XpumqjM%252CMUnsBNeVrAyn1M%252C_%253B26gNWzgDRxqo6M%252CNThFvsymDBmxOM%252C_%253BXD159KlDsX089M%252C95YyYbaoa7wZ4M%252C_%253BC6mbfESS1zkCfM%252CEIqhu_9S4fuumM%252C_%253Bz20VsyMwKMnQJM%252C9LBFSEROz6s7HM%252C_%253BSOBdkXCF9ViRrM%252CkJKp39jOzj0uvM%252C_%253B1TrhrdO8NvbQ3M%252CtDwdjwygwP9k7M%252C_%253BjwXKbteDY4LwaM%252CBr4u6h_MH9gpQM%252C_%253B8cWPH_wbWDvb-M%252CldkRqsCRrSjoyM%252C_%253BHn8rMOJiNo3goM%252CGSgLCtA3jnVNYM%252C_%253BfKi7VXzan7slnM%252C3KaHON_Sc5320M%252C_%253B9GQEkn1VXF_Q_M%252C1UQ0uU1gb1rCxM%252C_&vet=1&usg=AI4_-kSx4qnskgxjigCqNwRNei8KVDdstA&sa=X&sqi=2&ved=2ahUKEwj1-ZHy-Mb0AhVRA2MBHYaRCPwQ9QF6BAgNEAE#imgrc=-eDJED2XpumqjM',
    location: 'Work from home, remote',
    position: 'Perception Internship',
    starred: false,
    saved: false,
    applied: false,
  },
  {
    title: 'zoox',
    logo: 'https://www.google.com/search?q=logo&rlz=1C1SQJL_enIN857IN857&tbm=isch&source=iu&ictx=1&fir=anzKS0A4Wzi6NM%252CxqICHFMKrhE4pM%252C_%253B-eDJED2XpumqjM%252CMUnsBNeVrAyn1M%252C_%253B26gNWzgDRxqo6M%252CNThFvsymDBmxOM%252C_%253BXD159KlDsX089M%252C95YyYbaoa7wZ4M%252C_%253BC6mbfESS1zkCfM%252CEIqhu_9S4fuumM%252C_%253Bz20VsyMwKMnQJM%252C9LBFSEROz6s7HM%252C_%253BSOBdkXCF9ViRrM%252CkJKp39jOzj0uvM%252C_%253B1TrhrdO8NvbQ3M%252CtDwdjwygwP9k7M%252C_%253BjwXKbteDY4LwaM%252CBr4u6h_MH9gpQM%252C_%253B8cWPH_wbWDvb-M%252CldkRqsCRrSjoyM%252C_%253BHn8rMOJiNo3goM%252CGSgLCtA3jnVNYM%252C_%253BfKi7VXzan7slnM%252C3KaHON_Sc5320M%252C_%253B9GQEkn1VXF_Q_M%252C1UQ0uU1gb1rCxM%252C_&vet=1&usg=AI4_-kSx4qnskgxjigCqNwRNei8KVDdstA&sa=X&sqi=2&ved=2ahUKEwj1-ZHy-Mb0AhVRA2MBHYaRCPwQ9QF6BAgNEAE#imgrc=-eDJED2XpumqjM',
    location: 'Work from home, remote',
    position: 'Perception Internship',
    starred: false,
    saved: false,
    applied: false,
  },
  {
    title: 'zoox',
    logo: 'https://www.google.com/search?q=logo&rlz=1C1SQJL_enIN857IN857&tbm=isch&source=iu&ictx=1&fir=anzKS0A4Wzi6NM%252CxqICHFMKrhE4pM%252C_%253B-eDJED2XpumqjM%252CMUnsBNeVrAyn1M%252C_%253B26gNWzgDRxqo6M%252CNThFvsymDBmxOM%252C_%253BXD159KlDsX089M%252C95YyYbaoa7wZ4M%252C_%253BC6mbfESS1zkCfM%252CEIqhu_9S4fuumM%252C_%253Bz20VsyMwKMnQJM%252C9LBFSEROz6s7HM%252C_%253BSOBdkXCF9ViRrM%252CkJKp39jOzj0uvM%252C_%253B1TrhrdO8NvbQ3M%252CtDwdjwygwP9k7M%252C_%253BjwXKbteDY4LwaM%252CBr4u6h_MH9gpQM%252C_%253B8cWPH_wbWDvb-M%252CldkRqsCRrSjoyM%252C_%253BHn8rMOJiNo3goM%252CGSgLCtA3jnVNYM%252C_%253BfKi7VXzan7slnM%252C3KaHON_Sc5320M%252C_%253B9GQEkn1VXF_Q_M%252C1UQ0uU1gb1rCxM%252C_&vet=1&usg=AI4_-kSx4qnskgxjigCqNwRNei8KVDdstA&sa=X&sqi=2&ved=2ahUKEwj1-ZHy-Mb0AhVRA2MBHYaRCPwQ9QF6BAgNEAE#imgrc=-eDJED2XpumqjM',
    location: 'Work from home, remote',
    position: 'Perception Internship',
    starred: false,
    saved: false,
    applied: false,
  },
];

const JobsHomeScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [state, setState] = React.useState({open: false});

  const onStateChange = ({open}: any) => setState({open});

  const {open} = state;

  const onChangeSearch = (query: any) => setSearchQuery(query);
  const renderItem = ({item}: any) => <DataCard {...item} />;
  return (
    <Background>
      {/* <BackButton goBack={() => navigation.navigate(ScreenNames.AUTH_HOME)} /> */}
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <FlatList
        data={JobsObject}
        renderItem={renderItem}
        bounces={true}
        style={styles.container}
        scrollEnabled={true}
      />
      <Portal>
        <FAB.Group
          visible={true}
          open={open}
          icon={'filter'}
          actions={[
            {
              icon: 'briefcase',
              label: 'Applied Jobs',
              onPress: () => console.log('Pressed star'),
            },
            {
              icon: 'tasks',
              label: 'Saved Jobs',
              onPress: () => console.log('Pressed email'),
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </Background>
  );
};

const styles = StyleSheet.create({
  chipContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chip: {
    width: '50%',
  },
  container: {
    width: '100%',
    flex: 1,
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default memo(JobsHomeScreen);
