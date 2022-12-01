import React, { FC } from 'react'

const StylesOff: FC<{ children: any, style: string }> = ({ children, style }) => (
  <div className={style}>
    {children}
  </div>
)

const StylesOn: FC<{ children: any, styleOn: string, styleOff: string }> = ({ children, styleOn, styleOff }) => (
  <div className={styleOff}>
    <div className={styleOn}>
      {children}
    </div>
  </div>
)

const ToggleSelector: FC<{
  children: any,
  bgToggle: boolean,
  stylesOn: string,
  stylesOff: string
 }> = ({
   children,
   bgToggle,
   stylesOn,
   stylesOff,
 }) => {
   switch (bgToggle) {
     case false:
       return <StylesOff style={stylesOff}>{children}</StylesOff>
     case true:
       return <StylesOn styleOn={stylesOn} styleOff={stylesOff}>{children}</StylesOn>
     default:
       return <StylesOff style={stylesOff}>{children}</StylesOff>
   }
 }

const WysiwygBgToggle: FC<{
  children: any,
  bgToggle: boolean,
  stylesOn: string,
  stylesOff: string,
}> = ({
  children,
  bgToggle,
  stylesOn,
  stylesOff,
}) => (
  <ToggleSelector bgToggle={bgToggle} stylesOn={stylesOn} stylesOff={stylesOff}>
    {children}
  </ToggleSelector>
)

export default WysiwygBgToggle
