import {View, Text, Image, ScrollView, StyleSheet, FlatList, TouchableOpacity, ImageBackground, Modal} from 'react-native';
import React, { useEffect, useState } from 'react';
import {BLACK} from './src/constants/color';
import {HEIGHT, MyStatusBar, WIDTH} from './src/constants/config';
import {DISLIKED, ICON, LIKED, LINKEDIN, MENU, PROFILE} from './src/constants/imagepath';
import { requestUserPermission } from './utills/Pushnotification';
import Loader from './src/components/Loader';
import { getStringByKey } from './utills/Storage';
import messaging from '@react-native-firebase/messaging'

const App = () => {
  // AAAA-M5niI4:APA91bE5IgmTF0ZYzXoXKs0xpqegca-4PJKABFWlCaOGVD-73VdxNOwY99iiNdiG-yuaHiiHE-tLtrCfDylxl3ViXiyOV0g7cRM-tnZP5H8MZx9yAPeocPL2P2XO6ENMoxCE54wTXdcj
  const [loader,setLoader]=useState(false)
  const [donemodal,setDoneModal]=useState(false)
  const [fcmmodal,setFcmModal]=useState(false)
  const [notificationModal,setNotificationModal]=useState(false)
  const [fcm,setFcm]=useState(false)
  const [remoteMessage, setRemoteMessage] = useState({});






  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      setRemoteMessage(remoteMessage);
      // Image
      console.log(remoteMessage.notification.android.smallIcon)
      // Title
      console.log(remoteMessage.notification.title);
      // Body
      setRemoteMessage(remoteMessage.notification.body);
      // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      setNotificationModal(true)
    });
    return unsubscribe;
  }, []);

  useEffect( 
    () => {
      requestUserPermission()
      getFCM();
  },
  [],
);

const getFCM = async() => {
  const fcmtoken = await getStringByKey('fcmtoken');
  setFcm(fcmtoken)
}
  
  const Data=[
    {
      name:'🤪Funny'
    },
    {
      name:'🤗 Generous'
    },
    {
      name:'🦠 Germaphobe'
    },
    {
      name:'👶 Good with Kids'
    },
    {
      name:'🙈 Introverted'
    }
  ]

  const Personalities=({item})=>{
    return(
      <TouchableOpacity
              style={{
                height: HEIGHT * 0.028,
                margin:3,
                marginLeft:item.name == '👶 Good with Kids' ? 20 : 0,

                borderRadius: 10,

                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#EAFE00',
              }}>
              <Text
                style={{
                  color: BLACK,
                  fontSize: 12,
                  fontWeight: 'bold',
                  paddingVertical: 2,
                  paddingHorizontal: 10,
                 
                }}>
             {item.name}
              </Text>
            </TouchableOpacity>

    )
  }










  return (
    <>
    <View
      style={{
        flex: 1,
        backgroundColor: BLACK,
      }}>
      <MyStatusBar backgroundColor={BLACK} barStyle={'light-content'} />
      <View style={{...Styles.topContainer}}>
        <View
          style={{
            ...Styles.iconView,
          }}>
          <TouchableOpacity
          onPress={()=>{
            setLoader(true)


            setTimeout(()=>{
              setLoader(false)
              setDoneModal(true)
            },2500)

          }}
            style={{
              height: HEIGHT * 0.05,
              width: WIDTH * 0.1,

              margin: 2,
            }}>
            <Image
              source={ICON}
              style={{
                height: HEIGHT * 0.05,
                width: WIDTH * 0.11,
              }}
            />
          </TouchableOpacity>
          <View
            style={{
              ...Styles.iconText,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 13,
                padding: 1,
              }}>
              Hey,
            </Text>
            <Text
              style={{
                color: 'yellow',
                fontSize: 13,
              }}>
              Natasha
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() =>{
            setFcmModal(true);
          }}
          style={{
            ...Styles.menuView,
          }}>
          <Image
            source={MENU}
            style={{
              height: HEIGHT * 0.03,
              width: WIDTH * 0.07,
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <ScrollView
       style={{
        flex: 1,
        backgroundColor: BLACK,
      }}
      >


     {
     loader==true?<Loader/>:
     
     <View
        style={{
          ...Styles.midContainer,
        }}>
        <View
          style={{
            ...Styles.imageContainer,
          }}>
          <ImageBackground
          resizeMode='contain'
          style={{
            height: HEIGHT * 0.37,
            width: WIDTH * 0.83,
            marginTop: 10,
            alignSelf: 'center',
          }}
          source={PROFILE}
          
          />

          <TouchableOpacity
          style={{
            height: HEIGHT * 0.028,
            width: WIDTH * 0.25,
            marginTop:20,
            marginLeft:200,
            borderRadius:4,
            borderColor:BLACK,
            elevation:10,
            
            borderWidth:1,
            alignItems:'center',
            // alignSelf:'flex-end',
            justifyContent:'center',
            backgroundColor:'white',
            position:'absolute'
          }}
          >
            <Text
            style={{
              color:BLACK,
              fontSize:14,
            }}
            >
              IIM Banglore
            </Text>
          </TouchableOpacity>


          </View>
        <View
          style={{
            ...Styles.introView,
          }}>
          <View
            style={{
              height: HEIGHT * 0.1,
              width: WIDTH * 0.35,
              justifyContent: 'space-evenly',
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 18,
              }}>
              Manish Mandal
            </Text>

            <Text
              style={{
               
                color: '#FFFFFF',
                fontSize: 13,
              }}>
              Product Manager
            </Text>
            <Text
              style={{
               
                color: 'white',
                fontSize: 13,
              }}>
              Forbes Advisor
            </Text>
          </View>
          <View
            style={{
              height: HEIGHT * 0.1,
              width: WIDTH * 0.20,
         
              alignItems:'center',
             
            }}>
            <Text
              style={{
                paddingTop:5,
                textAlign:'right',
                color: 'white',
                fontWeight: 'bold',
                fontSize: 15,
              }}>
              24 Years
            </Text>
            <Image
              source={LINKEDIN}
              tintColor={'#00DFFE'}
              style={{
                height: HEIGHT * 0.02,
                width: WIDTH * 0.04,
                borderRadius: 2,
                marginLeft:40,
                margin:5,

                
              }}
            />
            </View>

         
          
        </View>

        <View></View>
      </View>}

      <View
        style={{
          height: HEIGHT * 0.25,
          width: WIDTH * 0.9,
          marginTop: 10,
          borderRadius: 10,
          alignSelf: 'center',
          backgroundColor: '#2D2D30',
          // justifyContent: 'space-between',
        }}>
        <View
          style={{
            height: HEIGHT * 0.1,
            width: WIDTH * 0.75,
            marginTop: 10,
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 11.5,
              letterSpacing: 0.9,
              justifyContent: 'center',
              textAlign: 'center',
            }}>
            I'm a curious and geeky person with a romantic side. When I'm not
            exploring new ideas or tinkering with tech, I love spending time
            with my family, who mean everything to me.
          </Text>
        </View>

        <View
          style={{
            height: HEIGHT * 0.001,
            width: WIDTH * 0.7,
            backgroundColor: '#ACACAC',
            alignSelf: 'center',
          }}></View>
        <View
          style={{
            height: HEIGHT * 0.1,
            width: WIDTH * 0.85,
            marginTop: 10,
       
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: HEIGHT * 0.03,
              width: WIDTH * 0.3,
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 13,
              }}>
              Personality Type
            </Text>
          </View>

          <FlatList
          numColumns={3}
          scrollEnabled={false}
          data={Data}
       
          keyExtractor={
            (item, index) => index.toString()
          }
          renderItem={Personalities}
          
          />
        </View>
      </View>


      <View>
        <View
        style={{
          height:HEIGHT*.10,
          width:WIDTH*.65,
          margin:10,
          alignSelf:'center',
          alignItems:'center',
          justifyContent:'space-evenly',
        
          flexDirection:'row'
        }}
        >
         <TouchableOpacity
         style={{
          height:HEIGHT*0.09,
          width:WIDTH*0.3,
         

         }}
         >
          <Image
          style={{
            height:HEIGHT*0.09,
            width:WIDTH*0.3,

          }}
          source={DISLIKED}
          resizeMode='center'
          />
          
         </TouchableOpacity>
         <TouchableOpacity
         style={{
          height:HEIGHT*0.09,
          width:WIDTH*0.3,
   

         }}
         >
           <Image
          style={{
            height:HEIGHT*0.09,
            width:WIDTH*0.3,

          }}
          source={LIKED}
          resizeMode='center'
          />
          
         </TouchableOpacity>
       

        </View>
        
      </View>
      </ScrollView>
      
      <Modal
      animationType='fade'
        visible={donemodal}
        onRequestClose={() => {
          // setLoading(false);
          setDoneModal(false)
        }}
        transparent
        statusBarTranslucent
        hardwareAccelerated
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(40, 40, 40, 0.7)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
         <View
         style={{
          height:200,
          width:300,
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:BLACK,
          borderRadius:8,
         }}
         >
         <Text style={{
              color:'white',
              
              fontSize:25,
              fontWeight:'bold'
              
            }}>Event Called</Text>
          <TouchableOpacity onPress={() => {
            setDoneModal(false);
          }} style={{width:WIDTH * 0.4, backgroundColor:'green',height:HEIGHT*0.04,alignItems:'center',margin:10,borderRadius:8,justifyContent:'center'}}>
            <Text
            style={{
              color:'white',
              fontSize:15,
              fontWeight:'bold'

            }}
            >Close</Text>
          </TouchableOpacity>
         </View>
          </View>
    </Modal>
    <Modal
      animationType='fade'
        visible={fcmmodal}
        onRequestClose={() => {
            // setLoading(false);
            setFcmModal(false)
        }}
        transparent
        statusBarTranslucent
        hardwareAccelerated
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(40, 40, 40, 0.7)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
         <View
         style={{
          height:200,
          width:300,
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:BLACK,
          borderRadius:8,
          padding:15
         }}
         >
          <Text style={{
              color:'white',
              
              fontSize:17,
              fontWeight:'bold'
              
            }}>FCM Token : </Text>
         <Text selectable={true} style={{
              color:'white',
              
              fontSize:17,
              fontWeight:'bold'
              
            }}>{fcm}</Text>
          <TouchableOpacity onPress={() => {
            setFcmModal(false);
          }} style={{width:WIDTH * 0.4, backgroundColor:'green',height:HEIGHT*0.04,alignItems:'center',margin:10,borderRadius:8,justifyContent:'center'}}>
            <Text
            style={{
              color:'white',
              fontSize:15,
              fontWeight:'bold'

            }}
            >Close</Text>
          </TouchableOpacity>
         </View>
          </View>
    </Modal>

    <Modal
      animationType='fade'
        visible={notificationModal}
        onRequestClose={() => {
          // setLoading(false);
          setNotificationModal(false)
        }}
        transparent
        statusBarTranslucent
        hardwareAccelerated
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(40, 40, 40, 0.7)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
         <View
         style={{
          height:200,
          width:300,
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:BLACK,
          borderRadius:8,
          padding:15
         }}
         >
          <Text selectable={true} style={{
              color:'white',
              
              fontSize:17,
              fontWeight:'bold',
              marginBottom:10,
              
            }}>Notification Foreground</Text>
         <Text selectable={true} style={{
              color:'white',
              
              fontSize:17,
              fontWeight:'bold'
              
            }}>{remoteMessage}</Text>
          <TouchableOpacity onPress={() => {
            setNotificationModal(false);
          }} style={{width:WIDTH * 0.4, backgroundColor:'green',height:HEIGHT*0.04,alignItems:'center',margin:10,borderRadius:8,justifyContent:'center'}}>
            <Text
            style={{
              color:'white',
              fontSize:15,
              fontWeight:'bold'

            }}
            >Close</Text>
          </TouchableOpacity>
         </View>
          </View>
    </Modal>


    </View>
    
    </>
  );
};

export default App;

const Styles = StyleSheet.create({
  topContainer: {
    height: HEIGHT * 0.05,
    width: WIDTH * 0.95,
    alignSelf: 'center',

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconView: {
    height: HEIGHT * 0.05,
    width: WIDTH * 0.5,
    

    flexDirection: 'row',
  },
  iconText: {
    height: HEIGHT * 0.05,
    width: WIDTH * 0.2,
    margin: 5,
  },
  menuView: {
    height: HEIGHT * 0.05,
    width: WIDTH * 0.1,
    justifyContent: 'center',
  },
  midContainer: {
    height: HEIGHT * 0.5,
    width: WIDTH * 0.9,
    borderRadius: 10,
    marginTop: 15,
    alignSelf: 'center',
    backgroundColor: '#2D2D30',
  },
  imageContainer: {
    height: HEIGHT * 0.38,
    width: WIDTH * 0.84,
    marginTop: 10,
    alignSelf: 'center',
  },
  introView: {
    height: HEIGHT * 0.9,
    width: WIDTH * 0.82,
    marginTop: 4,
    alignSelf: 'center',

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
