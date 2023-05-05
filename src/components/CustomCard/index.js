import {Text, View} from "@aws-amplify/ui-react";
import "./style.sass"

const CustomCard=(props)=>{
    return (
        <div className="custom-card">
            <View>
                <Text className="title">{props.title}</Text>
                <Text className="description">{props.description}</Text>
            </View>
        </div>
    )
}

export  default CustomCard