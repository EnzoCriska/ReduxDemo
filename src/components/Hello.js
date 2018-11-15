import React, { Component } from 'react';
import { View, Text } from 'react-native';

import {connect} from 'react-redux';
import {getData} from '../actions'
class Hello extends Component{
    componentDidMount(){
        this.props.getData();
    }

    render(){
        {console.log(this.props)}
        return (
            <View>
                <Text>{this.props.data.name}</Text>
            </View>
        )
    }
}

const mapStateToProps=(state)=>{
    console.log(state);
    return{
        data:state.reducerEmployee
    }
}
export default connect(mapStateToProps,{getData})(Hello);