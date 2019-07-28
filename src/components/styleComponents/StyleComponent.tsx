import * as React from 'react'
import Title from 'components/styleComponents/title/title'
import Style_1 from './style_1/Style_1'
import Style_2 from './style_2/Style_2'
import Style_3 from './style_3/Style_3'
import Style_4 from './style_4/Style_4'
import Style_6 from './style_6/Style_6'
import Style_8 from './style_8/Style_8'
import Style_11 from './style_11/Style_11'
import Style_13 from './style_13/Style_13'
import Style_14 from './style_14/Style_14'
import Style_15 from './style_15/Style_15'
import Style_16 from './style_16/Style_16'

interface StyleComponentProps {
  data: any
}

const StyleComponent: React.StatelessComponent<StyleComponentProps> = (
  props: StyleComponentProps
) => {
  const data = props.data
  switch (data.style_id) {
    case 1:
      return <Style_1 banner={data.module_data} />
    case 2:
      return (
        <>
          <Title title={data.name} />
          <Style_2 data={data.module_data} />
        </>
      )
    case 3:
      return (
        <>
          <Title title={data.name} />
          <Style_3 data={data.module_data} />
        </>
      )
    case 4:
      return <Style_4 data={data.module_data} />
    case 5:
      return <div>5</div>
    case 6:
      return (
        <>
          <Title title={data.name} />
          <Style_6 data={data.module_data} />
        </>
      )
    case 7:
      return <div>7</div>
    case 8:
      return (
        <>
          <Title title={data.name} />
          <Style_8 data={data.module_data} />
        </>
      )
    case 9:
      return <div>9</div>
    case 10:
      return <div>10</div>
    case 11:
      return (
        <>
          <Title title={data.name} />
          <Style_11 data={data.module_data} />
        </>
      )
    case 12:
      return <div>12</div>
    case 13:
      return (
        <>
          <Title title={data.name} />
          <Style_13 data={data.module_data} />
        </>
      )
    case 14:
      return (
        <>
          <Title title={data.name} />
          <Style_14 data={data.module_data} />
        </>
      )
    case 15:
      return (
        <>
          <Title title={data.name} />
          <Style_15 data={data.module_data} />
        </>
      )
    case 16:
      return (
        <>
          <Title title={data.name} />
          <Style_16 data={data.module_data} />
        </>
      )
    case 17:
      return <div>17</div>
    default:
      return <div />
  }
}

export default StyleComponent
