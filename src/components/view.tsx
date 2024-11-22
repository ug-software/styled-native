import { View, ViewProps } from "react-native";
import { IViewProps } from "./index.d";

export default (props: IViewProps) => {
    return <View {...props}/>
}