import Svg, {SvgProps, Path} from 'react-native-svg';
export const BookMark = (props: SvgProps) => (
  <Svg width={100} height={100} viewBox="0 0 24 24" {...props}>
    <Path
      d="M6 2a2.002 2.002 0 0 0-2 2v18l8-3 8 3V4a2.003 2.003 0 0 0-2-2H6z"
      fill={props.color}
    />
  </Svg>
);
