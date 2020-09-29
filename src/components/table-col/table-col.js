import React from "react";
import './table-ceil.css'

const TableCol = (props) => {
    const {colOptions,onClick} = props;

    const renderCols = () => {
        return (<tr>
                <td className='tableRow'></td>
            {colOptions.map((el,idx) => {
                return (
                    <td className='tableRow'
                        key={el}>
                       <button
                       onClick={()=>onClick(`${idx}`,el,'col')}>
                           {el}
                       </button>
                    </td>
                )
            })}
            </tr>
        )
    }


    return renderCols()

}

export default TableCol;