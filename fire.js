import firebase from 'firebase'
import { API, graphqlOperation, Auth } from 'aws-amplify';


   const [users, setUsers] = useState();
    useEffect(()  => {
        const fetchData = async () => {
            const userInfo = await Auth.currentAuthenticatedUser();
            setUsers(userInfo.attributes.sub);
        
        }
        fetchData();
    },[] )
class Fire{
  
    constructor(){
        this.init()
    }
    init =() => {
        if(!firebase.app.length){
            firebase.app = firebase.initializeApp({
                apiKey: "AIzaSyAS1q7CcWFLCzhNLchzu6d0GZLJIm_yjN4",
                authDomain: "healthwetu.firebaseapp.com",
                projectId: "healthwetu",
                storageBucket: "healthwetu.appspot.com",
                messagingSenderId: "666180444679",
                appId: "1:666180444679:web:8768eca8216ccbbeb7c0a2",
                measurementId: "G-SMG44YKGFD"
            });
        }


};
send = request => {
    request.forEach(item => {
    const request = {
        text: item.text,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        orginPlace: item.orginPlace,
        destinationPlace: item.destinationPlace,
        user: users
    }
    this.db.push(request)
    
   });
};
   parse = request => {
    const {user,destinationPlace,orginPlace,timestamp,text} = request.val();
    const {key: _id} = request;
    const createdAt = new Date(timestamp);
    return {
        _id,
        createdAt,
        text,
        user,
        
    };
   };
   get = callback => {
         this.db.on('child_added', snapshot => callback(this.parse(snapshot)));
   };
   off() {
         this.db.off();
   } 

get db(){
    return this.firebase.database().ref('request')
}
get uid(){
    return (userInfo.attributes.sub|| {}).uid;
}
}
export default new Fire();