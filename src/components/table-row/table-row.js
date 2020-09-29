import React from "react";
import tableHelper from "../../services/tableHelper";
const TableRow = (props)=>{
    const{rowOptions, colOptions,
        onChange,ceilsdata,onClick}=props;
    const rowRender = ()=>{
        return rowOptions.map((el,idx)=>{
            return( <tr key={el}>
                <td>
                    <button onClick={()=>onClick(`${idx}`,el,'row')}>
                    {el}
                    </button>
                </td>
                {colRender(idx)}
            </tr>)
        })
    }


const colRender = (idx)=>{
       return colOptions.map((el,index)=>{
          return(<td   key={el}>
              <input type='number'
                     value={tableHelper.calcCeilValue(index,idx,ceilsdata)}
           id={`${index}-${idx}`}
                     onChange={onChange}
           />
          </td>)
       })
}
    return rowRender()
}
export default TableRow;