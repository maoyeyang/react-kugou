import * as React from 'react'
import Title from 'components/styleComponents/title/title'
import Style_1 from './style_1/Style_1'
import Style_8 from './style_8/Style_8'
import Style_11 from './style_11/Style_11'

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
      return <div>2</div>
    case 3:
      return <div>3</div>
    case 4:
      return <div>4</div>
    case 5:
      return <div>5</div>
    case 6:
      return <div>6</div>
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
      return <div>13</div>
    case 14:
      return <div>14</div>
    case 15:
      return <div>15</div>
    case 16:
      return <div>16</div>
    case 17:
      return <div>17</div>
    default:
      return <div />
  }
}

export default StyleComponent
