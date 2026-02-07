import { Item, Label, Value, ArrowContainer, WindArrow } from './WindItem.style'
import { windDeg } from '../../constants/WindDeg'

type Props = {
  windKph: number;
  windDir: string;
};

export function WindItem({ windKph, windDir }: Props) {
  return (
    <Item>
      <Label>Wind</Label>
      <Value>
        {windKph} km/h
        <ArrowContainer>
          <WindArrow
            style={{ transform: `rotate(${windDeg(windDir) + 180}deg)` }}
          />
        </ArrowContainer>
      </Value>
    </Item>
  )
}
