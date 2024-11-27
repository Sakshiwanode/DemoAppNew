
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';


const FirstScreen = ({navigation}:any) => {
  return (
    <SafeAreaView style={{flex: 1}} >
        <StatusBar  hidden={true} />
    <View style={styles.container}>
    
      <View style={styles.imageContainer}>
        <Image
          source={require('../images/front.jpg') }
          style={styles.image}
        />
      </View>
     
      <View style={styles.contentContainer}>
        
        <Text style={styles.heading}>Financial lifeline in Your Pocket.</Text>

       
        <Text style={styles.subText}>Apply for loans instantly on your mobile.</Text>

       
        <View style={styles.card}>
          <View style={styles.cardContent}>
          <View style={styles.logoContainer}>
              <Image
                source={require('../images/logo.webp')} 
                style={styles.logoImage}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.cardTextBold}>I Live in:</Text>
              <Text style={styles.cardText}>United States</Text>
            </View>
          </View>
          <Icon name="chevron-down" size={24} color="#0a0a0a" />
        </View>

      
        <View style={styles.footer}>
          <TouchableOpacity>
            <Text style={styles.signIn}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.continueButton}
            onPress={() => navigation.navigate('Second')}
          >
            <Text style={styles.continueText}>Continue</Text>
            <Icon name="arrow-right" size={20} color="#f8f6f6" style={styles.arrowIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
  },
  image: {
    width: '100%',
    height: '115%',
    resizeMode: 'cover',
  },
  contentContainer: {
    flex: 1,
    padding: 30,
  },
  heading: {
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    marginTop:20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(223, 198, 235,0.5)',
    borderRadius: 13,
    padding: 15,
    marginBottom: 10,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    width: 40,
    height: 40,
    borderRadius: 20, 
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  logoImage: {
    marginTop:5,
    width: 50,
    height: 50,
   
  },
  textContainer: {
    marginLeft: 10,
   
  },
  cardTextBold: {
    fontSize: 16,
    color: '#181717',

  },
  cardText: {
    fontSize: 19,
    color: '#141414',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  signIn: {
    marginTop:40,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  continueButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:40,
    backgroundColor: '#9c72c4',
    paddingVertical: 13,
    paddingHorizontal: 35,
    borderRadius: 25,
    
  },
  continueText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  arrowIcon: {
    marginLeft: 9,
  },
});

export default  FirstScreen;
