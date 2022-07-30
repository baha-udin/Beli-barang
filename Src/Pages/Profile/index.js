import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {DummyProfile1} from '../../Assets';
import {Gap} from '../../Components/Atoms';
import {Colors, Fonts, resWidth} from '../../Utils';
import {ProfileTabSection} from './../../Components/Molecules';

const Profile = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.wrapHeader}>
        <View style={styles.borderPhoto}>
          <TouchableOpacity>
            <View style={styles.wrapPhoto}>
              <Image source={DummyProfile1} style={styles.photo} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.wrapName}>
          <Text style={styles.name}>Michelle</Text>
          <Text style={styles.email}>Michelle@gmail.com</Text>
        </View>
      </View>
      <Gap height={80} />
      <ProfileTabSection />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.whiteBackground,
  },
  wrapHeader: {
    paddingTop: '20%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderPhoto: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    borderColor: Colors.border.gray,
    borderStyle: 'dashed',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapPhoto: {
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background.gray2,
  },
  photo: {
    width: 90,
    height: 90,
    resizeMode: 'cover',
    borderRadius: 110 / 2,
  },
  wrapName: {
    marginTop: 16,
  },
  name: {
    fontSize: resWidth(18),
    fontFamily: Fonts.primary[500],
    color: Colors.text.primary,
    textAlign: 'center',
  },
  email: {
    marginTop: 6,
    fontSize: resWidth(14),
    fontFamily: Fonts.primary[300],
    color: Colors.text.secondary,
    textAlign: 'center',
  },
});
