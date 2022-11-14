import { ElementType, HTMLAttributes } from 'react'

export default interface HeadlineInterface extends HTMLAttributes<HTMLElement> {
  as?: ElementType | string;
}
