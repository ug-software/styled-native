import { ImageStyle, TextStyle, ViewStyle } from "react-native"
import { IViewProps, ITextProps, IPressableProps } from "../components";
import { Theme, ThemeContext } from "../theme/index"

export interface CSS {
    [key: string]: ViewStyle | TextStyle | ImageStyle
}

export type component = "view" | "text" | "pressable";
export type componentProps<C extends component, P = {}> = C extends "view" ? IViewProps & P : C extends "text" ? ITextProps & P : C extends "pressable" ? IPressableProps & P : never;
export type componentStyle<C extends component> = C extends "view" ? ViewStyle : C extends "text" ? TextStyle : C extends "pressable" ? ViewStyle : never;
export type context<C extends component, P = {}> = { theme:  Omit<ThemeContext, "handleChangeMode"> } & componentProps<C, P>;
export type callback<C extends component, P = {}> = (context: { theme: Theme } & componentProps<C, P>) => componentStyle<C>;