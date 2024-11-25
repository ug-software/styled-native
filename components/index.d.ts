import { ImageProps, TextProps, ViewProps, PressableProps } from "react-native";
import { ReactNode } from "react"

export interface ITextProps extends TextProps {}
export interface IViewProps extends ViewProps {}
export interface IImageProps extends ImageProps {}
export interface IPressableProps extends PressableProps {
    children?: ReactNode
}