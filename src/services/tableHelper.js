class TableHelper {

    // фильтруем данные из таблицы
    filterDataToggle=(data,id,value,toggle)=>{
        if(toggle==='on') return data.filter(el=>el.id===id)
        return data.filter(el=>el.id!==id)
}

// Считаем значение в каждой клетке
    calcCeilValue = (index,idx, data)=>{
        const newData=data.filter(el=>el.id===`${index}-${idx}`)
        if(!newData[0]) return 0
        return newData[0].value
    }
    // Считаем сумму ряда или колонки
    colSumToggle = (data,id,toggle)=>{
        if(toggle==='col'){
            const colId = id.split('-')[0]
            const filteredDataSum = data.filter(el => el.id.split('-')[0] === colId)
                .reduce((acc, el) => {
                    return acc += +el.value
                }, 0)
            return filteredDataSum;
        }else{

            const filteredDataSum = data.filter(el => el.id.split('-')[1] === id)
                .reduce((acc, el) => {
                    return acc += +el.value
                }, 0)
            console.log(filteredDataSum,id)
            return filteredDataSum;
        }
}
}

const tableHelper = new TableHelper();
export default tableHelper;