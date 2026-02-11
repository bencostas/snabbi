import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View style={[styles.header, { backgroundColor: '#A1CEDC' }]}>
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      </View>

      <View style={styles.titleContainer}>
        <Text style={[styles.text, styles.title]}>Welcome!</Text>
      </View>

      <View style={styles.stepContainer}>
        <Text style={[styles.text, styles.subtitle]}>Step 1: Try it</Text>
        <Text style={styles.text}>
          Edit <Text style={[styles.text, styles.bold]}>app/(tabs)/index.tsx</Text> to see changes. Press{' '}
          <Text style={[styles.text, styles.bold]}>
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m', web: 'F12' })}
          </Text>{' '}
          to open developer tools.
        </Text>
      </View>

      <View style={styles.stepContainer}>
        <Link href="/modal">
          <Text style={[styles.text, styles.subtitle]}>Step 2: Explore</Text>
        </Link>

        <Text style={styles.text}>
          {`Tap the Explore tab to learn more about what's included in this starter app.`}
        </Text>
      </View>

      <View style={styles.stepContainer}>
        <Text style={[styles.text, styles.subtitle]}>Step 3: Get a fresh start</Text>
        <Text style={styles.text}>
          {`When you're ready, run `}
          <Text style={[styles.text, styles.bold]}>npm run reset-project</Text> to get a fresh{' '}
          <Text style={[styles.text, styles.bold]}>app</Text> directory. This will move the current{' '}
          <Text style={[styles.text, styles.bold]}>app</Text> to <Text style={[styles.text, styles.bold]}>app-example</Text>.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  header: {
    height: 180,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '700',
  },
  bold: {
    fontWeight: '600',
  },
  text: {
    color: '#ffffff',
  },
});
