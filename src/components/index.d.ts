import { ImageProps, TextProps, ViewProps } from "react-native";

export interface ITextProps extends TextProps {}
export interface IViewProps extends ViewProps {}
export interface IImageProps extends ImageProps {}
export interface IPressableProps extends PressableProps {
    children?: ReactNode
}