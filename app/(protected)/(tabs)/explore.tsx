import { Fonts } from '@/constants/theme';
import { Image } from 'expo-image';
import { Linking, Platform, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function TabTwoScreen() {
  const open = (url: string) => Linking.openURL(url).catch(() => {});

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View style={[styles.header, { backgroundColor: '#D0D0D0' }]}>
        <Text style={[styles.text, styles.headerSymbol]}>{'</>'}</Text>
        <Image source={require('@/assets/images/react-logo.png')} style={styles.logo} />
      </View>

      <View style={styles.titleContainer}>
        <Text style={[styles.text, styles.title, { fontFamily: Fonts?.rounded }]}>Explore</Text>
      </View>

      <Text style={styles.text}>This app includes example code to help you get started.</Text>

      <View style={styles.section}>
        <Text style={[styles.text, styles.sectionTitle]}>File-based routing</Text>
        <Text style={styles.text}>
          This app has two screens: <Text style={[styles.text, styles.bold]}>app/(tabs)/index.tsx</Text>{' '}
          and <Text style={[styles.text, styles.bold]}>app/(tabs)/explore.tsx</Text>
        </Text>
        <Text style={styles.text}>
          The layout file in <Text style={[styles.text, styles.bold]}>app/(tabs)/_layout.tsx</Text>{' '}
          sets up the tab navigator.
        </Text>
        <Pressable onPress={() => open('https://docs.expo.dev/router/introduction')}>
          <Text style={[styles.text, styles.link]}>Learn more</Text>
        </Pressable>
      </View>

      <View style={styles.section}>
        <Text style={[styles.text, styles.sectionTitle]}>Android, iOS, and web support</Text>
        <Text style={styles.text}>
          You can open this project on Android, iOS, and the web. To open the web version, press{' '}
          <Text style={[styles.text, styles.bold]}>w</Text> in the terminal running this project.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.text, styles.sectionTitle]}>Images</Text>
        <Text style={styles.text}>
          For static images, you can use the <Text style={[styles.text, styles.bold]}>@2x</Text> and{' '}
          <Text style={[styles.text, styles.bold]}>@3x</Text> suffixes to provide files for different
          screen densities
        </Text>
        <Image source={require('@/assets/images/react-logo.png')} style={styles.smallLogo} />
        <Pressable onPress={() => open('https://reactnative.dev/docs/images')}>
          <Text style={[styles.text, styles.link]}>Learn more</Text>
        </Pressable>
      </View>

      <View style={styles.section}>
        <Text style={[styles.text, styles.sectionTitle]}>Light and dark mode components</Text>
        <Text style={styles.text}>
          This template has light and dark mode support. The <Text style={[styles.text, styles.bold]}>useColorScheme()</Text>{' '}
          hook lets you inspect what the user's current color scheme is, and so you can adjust UI
          colors accordingly.
        </Text>
        <Pressable onPress={() => open('https://docs.expo.dev/develop/user-interface/color-themes/')}>
          <Text style={[styles.text, styles.link]}>Learn more</Text>
        </Pressable>
      </View>

      <View style={styles.section}>
        <Text style={[styles.text, styles.sectionTitle]}>Animations</Text>
        <Text style={styles.text}>
          This template includes an example of an animated component. The <Text style={[styles.text, styles.bold]}>components/HelloWave.tsx</Text>{' '}
          component uses the powerful <Text style={[styles.text, styles.bold, { fontFamily: Fonts?.mono }]}>react-native-reanimated</Text> library to
          create a waving hand animation.
        </Text>
        {Platform.OS === 'ios' ? (
          <Text style={styles.text}>
            The <Text style={[styles.text, styles.bold]}>components/ParallaxScrollView.tsx</Text> component
            provides a parallax effect for the header image.
          </Text>
        ) : null}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 180,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerSymbol: {
    fontSize: 48,
    color: '#808080',
    position: 'absolute',
    left: 16,
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
  },
  smallLogo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 8,
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
  },
  paragraph: {
    marginBottom: 8,
  },
  section: {
    marginBottom: 12,
    gap: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
  },
  bold: {
    fontWeight: '600',
  },
  link: {
    color: '#0a7ea4',
    marginTop: 6,
  },
  text: {
    color: '#ffffff',
  },
});
