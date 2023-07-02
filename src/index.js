import { View, Text, Button, NativeModules } from 'react-native'
import React from 'react';
import RNUpiPayment from './NativeModule/RNUpiPayment';

const App = () => {

    function successCallback(data) {
        // do whatever with the data
    }

    function failureCallback(data) {
        // do whatever with the data
    }

    /* 
    RNUpiPayment.initializePayment({
        vpa: '"upi://pay?pa=govindbiswas079-2@okaxis&pn=Govinda%20Biswas&aid=uGICAgICDyJGZHg"',
        payeeName: 'John Doe',
        amount: '1',
        transactionRef: 'aasf-332-aoei-fn'
    }, successCallback, failureCallback)
    */

    return (
        <View>
            <Button
                title="Get installed apps"
                onPress={() => {
                    RNUpiPayment.initializePayment({
                        vpa: "upi://pay?pa=govindbiswas079-2@okaxis&pn=Govinda%20Biswas&aid=uGICAgICDyJGZHg", // or can be john@ybl or mobileNo@upi
                        payeeName: 'John Doe',
                        amount: '1',
                        transactionRef: 'aasf-332-aoei-fn'
                    }, successCallback, failureCallback);
                }}
            />
        </View>
    )
}

export default App