import React from 'react';
import tableDataJson from "../../data/workData";
import TableRow from "../../components/table-row/table-row";
import TableCol from "../../components/table-col/table-col";
import tableHelper from "../../services/tableHelper";
import './App.css';

const initialState = {
    colSum: 0,
    colName: '',
    rowName: '',
    rowSum: 0,
    ceilsData: [{id: '', value: 0}],
    ...JSON.parse(tableDataJson)
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState
    }

    inputHandleChange = (e) => {
        const {id, value} = e.target;
        const {ceilsData} = this.state;
        if (tableHelper.filterDataToggle(ceilsData, id, value, 'on').length === 0) return (
            this.setState(() => ({ceilsData: [...ceilsData, {id, value}]}))
        )

        return this.setState(() => ({
            ceilsData: [...tableHelper.filterDataToggle(ceilsData, id, value),
                {id, value}]
        }))
    }
    colCounterOnClick = (id,name,ceilname) => {
        const { ceilsData} = this.state;
        if (ceilname === 'col') {
            return this.setState(() => ({
                colSum: tableHelper.colSumToggle(ceilsData, id, 'col'),
                colName: name
            }))
        }else {
            const newRowSum = tableHelper.colSumToggle(ceilsData, id, 'row')
            console.log(newRowSum)
            return this.setState(() => ({
                rowSum: newRowSum,
                rowName: name
            }))
        }
    }

    render() {
        const {dates, works, ceilsData,colName,
        colSum,rowName,rowSum} = this.state;
        return <div className='container'>
            <div className='tableWrapper'>
            <table>
                <tbody>
                <TableCol
                    colOptions={dates}
                    onClick={this.colCounterOnClick}
                />
                <TableRow rowOptions={works}
                          colOptions={dates}
                          onChange={this.inputHandleChange}
                          ceilsdata={ceilsData}
                          onClick={this.colCounterOnClick}
                />
                </tbody>
            </table>
                <span className='colSumContainer'>
                  {colSum>0?`сумма за ${colName}:${colSum}`:
                  `Сумма за выбранное число`}
                </span>
            </div>
            <span className='rowSumContainer'>{
                rowSum>0?`сумма ${rowName} : ${rowSum}`
                    :`Сумма по выбранной работе`
            }</span>
        </div>
    }
}

export default App;
