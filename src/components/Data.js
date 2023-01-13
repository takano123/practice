import React, { useEffect, useState } from 'react'
import {format} from 'date-fns'
import axios from 'axios'


const datas =[
  {
    Name:'DXテクノロジー推進課',
    Date:'2023/1/1',
    Department:'DXテクノロジー推進課',
    count:5,
    No1:3,
    No1_p:80,
    No2:12,
    No2_p:50,
    No3:8,
    No3_p:60,
    No4:4,
    No4_p:50,
    No5:9,
    No5_p:50,      
},
{
  Name:'DXテクノロジー推進課',
  Date:'2023/1/2',
  Department:'DXテクノロジー推進課',
  count:5,
  No1:3,
  No1_p:10,
  No2:12,
  No2_p:50,
  No3:8,
  No3_p:60,
  No4:4,
  No4_p:50,
  No5:9,
  No5_p:50,      

},
{
  Name:'第１プロジェクト推進課',
  Date:'2023/1/1',
  Department:'第１プロジェクト推進課',
  count:41,
  No1:3,
  No1_p:100,
  No2:14,
  No2_p:50,
  No3:6,
  No3_p:50,
  No4:9,
  No4_p:50,
  No5:2,
  No5_p:50,      

},
{
  Name:'第１プロジェクト推進課',
  Date:'2023/1/2',
  Department:'第１プロジェクト推進課',
  count:5,
  No1:3,
  No1_p:100,
  No2:4,
  No2_p:39,
  No3:3,
  No3_p:80,
  No4:4,
  No4_p:90,
  No5:2,
  No5_p:50,      

},
{
  Name:'第１プロジェクト推進課',
  Date:'2023/1/3',
  Department:'第１プロジェクト推進課',
  count:15,
  No1:80,
  No1_p:100,
  No2:4,
  No2_p:39,
  No3:3,
  No3_p:80,
  No4:4,
  No4_p:90,
  No5:2,
  No5_p:50,      

},
{
  Name:'第１プロジェクト推進課',
  Date:'2023/1/4',
  Department:'第１プロジェクト推進課',
  count:23,
  No1:67,
  No1_p:100,
  No2:4,
  No2_p:39,
  No3:3,
  No3_p:80,
  No4:4,
  No4_p:90,
  No5:2,
  No5_p:50,      

},
{
  Name:'第２プロジェクト推進課',
  Date:'2023/1/1',
  Department:'第２プロジェクト推進課',
  count:5,
  No1:3,
  No1_p:100,
  No2:4,
  No2_p:100,
  No3:3,
  No3_p:100,
  No4:4,
  No4_p:100,
  No5:20,
  No5_p:100,      

},
{
  Name:'第２プロジェクト推進課',
  Date:'2023/1/2',
  Department:'第２プロジェクト推進課',
  count:19,
  No1:30,
  No1_p:100,
  No2:4,
  No2_p:100,
  No3:3,
  No3_p:100,
  No4:4,
  No4_p:100,
  No5:2,
  No5_p:100,      

},
{
  Name:'第２プロジェクト推進課',
  Date:'2023/1/3',
  Department:'第２プロジェクト推進課',
  count:60,
  No1:45,
  No1_p:0,
  No2:4,
  No2_p:0,
  No3:3,
  No3_p:0,
  No4:4,
  No4_p:0,
  No5:2,
  No5_p:0,      

},
{
  Name:'第２プロジェクト推進課',
  Date:'2023/1/4',
  Department:'第２プロジェクト推進課',
  count:50,
  No1:3,
  No1_p:0,
  No2:4,
  No2_p:0,
  No3:3,
  No3_p:0,
  No4:4,
  No4_p:0,
  No5:2,
  No5_p:0,      

},
]


function Data(props) {
  const [graphData, setGraphData] = useState('')
  const [flagData, setFlagData] = useState('')
  const graphDates = []
  const RadarData = []
  const LineData = []
  const BarData = []
  const startDate = format(props.startDate,'yyyy/MM/dd')
  const date = new Date(startDate)


  const filterDatas = datas.filter(filterData =>
    props.startDate <= new Date(filterData.Date) && 
    props.finishDate >= new Date(filterData.Date) &&
    props.Department.includes(filterData.Department) === true
    )
    console.log(filterDatas)
    console.log(graphDates)

  
  //開始年と終了年が違ったら年の計算
  //開始月と終了月が違ったら月の計算
  //配列に日付を格納する処理





  useEffect(() => {
    //開始日から終了日までの一日ごとの日付を配列に格納
    while ( date <= props.finishDate){
      graphDates.push(format(date,'MM/dd')).toString()
      date.setDate( date.getDate() + 1);
    }
    
/*  //API通信でデータを取得
    const getDatas = async () => {
      const baseUrl = 'AWS'
      const result = await axios.post(baseUrl, {
        startDate: props.startDate,
        finishDate: props.finishDate,
        Department: props.Department
      })
      if(result.data.length > 0) {
        //データをセットする
      }
    }
*/


    if(filterDatas.length === 0){
      alert('データがありません')
    }else{
      //選択されたデータタイプによってセットするデータが変わるためswitch
      switch(props.typeData){
        case '1':
          //計算処理START
          props.Department.map((dep)=>{
            var calcData = filterDatas.filter
              (filterData =>
                dep === filterData.Department
              )
            var DepData = []
            var total = 0
            //各項目の平均を出す処理
            //No1
            total = calcData.reduce(function(sum,element){
              return sum + element.No1_p;
            },0);
            total = total / calcData.length
            DepData.push(total)
            //No2
            total = 0
            total = calcData.reduce(function(sum,element){
              return sum + element.No2_p;
            },0);
            total = total / calcData.length
            DepData.push(total)
            //No3
            total = 0
            total = calcData.reduce(function(sum,element){
              return sum + element.No3_p;
            },0);
            total = total / calcData.length
            DepData.push(total)
            //No4
            total = 0
            total = calcData.reduce(function(sum,element){
              return sum + element.No4_p;
            },0);
            total = total / calcData.length
            DepData.push(total)
            //No5
            total = 0
            total = calcData.reduce(function(sum,element){
              return sum + element.No5_p;
            },0);
            total = total / calcData.length
            DepData.push(total)
            //データに部署名と点数データをセット
            RadarData.push({
              label:dep,
              data:DepData
            })
          })
          //計算処理FINISH

          setGraphData(
            {
              labels: ['No1','No2','No3','No4','No5'],
              datasets: RadarData,
            }
          )

          setFlagData('1')
          break;
            
  
        case '2':
          var datas = []

          props.Department.map((dep)=>{
            datas = []
            var calcDatas = filterDatas.filter
              (filterData =>
                dep === filterData.Department
              )

            calcDatas.map((calcData)=>{
              const sum = 
                calcData.No1 +
                calcData.No2 +
                calcData.No3 +
                calcData.No4 +
                calcData.No5 

            datas.push(sum)

            })
            LineData.push({
              label:dep,
              data:datas
            })
          })


          setGraphData(
            {
              labels:graphDates,
              datasets:LineData,
            }
          )
          setFlagData('2')
          break;
          
            
        case '3':
          //経日のグラフはひとつの部署しか表示させない認識
          if(props.Department.length !== 1){
            alert('部署は一つだけ選択してください')
            break;
          }else{
            props.Department.map((dep)=>{
              var barDatas = []
              console.log(dep)
              datas = []
              var calcDatas = filterDatas.filter
                (filterData =>
                  dep === filterData.Department
                )
  
              calcDatas.map((calcData)=>{
                const sum = 
                  calcData.No1 +
                  calcData.No2 +
                  calcData.No3 +
                  calcData.No4 +
                  calcData.No5 
  
              datas.push(sum)
              barDatas.push(calcData.count)
  
              })

              BarData.push(
                {
                  type:'line',
                  label:dep ,
                  data:datas
                }
              )
              BarData.push(
                {
                  type:'bar',    
                  label:'日々件数' ,
                  data:barDatas
                }
              )
            })

            setGraphData(
              {
                labels: graphDates,
                datasets: BarData
              }
            )
            setFlagData('3')
            break;
          }
        
        default:
            break;
      } 
    }




    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[props.startDate,props.finishDate,props.typeData,props.Department])


  useEffect(() => {
    props.setFlagState(flagData)   
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[flagData])

  useEffect(() => {
    props.setData(graphData)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[graphData])
              
                
  return (
    <div>
    </div>
  )
}

export default Data