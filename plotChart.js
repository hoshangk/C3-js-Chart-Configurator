function plotChart(filterType, chartType, columns) {
  var chart = c3.generate({
    bindto: "#" + chartId,
    data: {
      columns: columns,
      type: chartType,
      onclick: function (d, element) {
        if (d.id in drillDownData) {
          chart.load({
            unload: true,
            columns: drillDownData[d.id],
          });
        } else {
          chart.load({
            unload: drillDownData[d.id],
          });
        }
      },
    },
    bar: {
      width: {
        ratio: 0.5,
      },
      space: 0.5,
    },
    padding: {
      right: 20,
    },
    tooltip: {
      show: true,
      format: {
        title: function (x, index) {
          return "Data " + x;
        },
      },
    },
    axis: {
      x: {
        type: "categorized",
        label: {
          text: "Year",
        },
      },
      y: {
        label: {
          text: "Sale in Lakh",
          position: "outer-middle",
        },
      },
    },
  });
}

// function plotChart1(chartId, chartType, module, dataItems, filterlevel, configurator) {
//   console.log('----Inside Plotchart1 Function------')
//   console.log(dataItems)
//   console.log(filterlevel)
//   var module = module
//   var parentLevel1_value = ''
//   var parentLevel2_value = ''
//   var parentLevel3_value = ''
//   var labels = dataItems.map(function(convArray){return convArray[0];});
//   var dd = dataItems.map(function(convArray){return convArray[1]})
//   labels.splice(0, 0, "x");
//   dd.splice(0, 0, module);
//   console.log('-----Labels----', labels)
//   console.log('-----dd----', dd)
//   var parentFilterValue = ''
//   var drillData = ''
//   var chart = c3.generate({
//     bindto: "#" + chartId,
//     data: {
//       x : 'x',
//       columns : [labels, dd],
//       //columns : dataItems,
//       type: chartType,
//       // colors : function(d) {
//       //   $colours = "['#a6cee3','#1f78b4','#b2df8a','#33a02c','#fb9a99','#e31a1c','#fdbf6f','#ff7f00','#cab2d6','#6a3d9a','#ffff99','#b15928']";
//       //   console.log(d)
//       //   for (var i= 0; d.length; i++)
//       //       return $colours[i]
//       // },
//       // colors: {
//       //   'Sale': function(d) {
//       //           // return d.value < 0 ? '#C00' : '#0C0'; 
//       //           var letters = '0123456789ABCDEF';
//       //           var color = '#';
//       //           for (var i = 0; i < 6; i++) {
//       //             color += letters[Math.floor(Math.random() * 16)];
//       //           }
                
//       //           return color ;
//       //         }
//       // },

//       onclick: function (d, element) {
//         console.log('----d---',d)
//         module = d.id
//         var clickedBar_x_value = this.internal.config.axis_x_categories[d.x]
//         console.log('--------clickedBar_x_value---------',clickedBar_x_value);
//         if(filterlevel == configurator.level1)
//         {
//             console.log("*************Inside Level 1************",configurator.level1)
//             parentLevel1_value = filterlevel
//             filterlevel = configurator.level2
//             console.log('--------parentLevel1_value-----',parentLevel1_value)
//             dataItems = level2_module_year_month[module][parentLevel1_value][clickedBar_x_value]    
//             dataItems = level2Data[module][parentLevel1_value][clickedBar_x_value]    
//             //dataItems = level2Data[module][clickedBar_x_value][filterlevel]  
//             console.log(dataItems)
//             console.log(filterlevel)
//             var labels = dataItems.map(function(convArray){return convArray[0];});
//             var dd = dataItems.map(function(convArray){return convArray[1]})
//             labels.splice(0, 0, "x");
//             dd.splice(0, 0, "Sale");
//             console.log("---Labels---",labels)
//             console.log("---dd---",dd)
//             // filterlevel = filterlevel +1
//             chart.load({
//                 x : "x",
//                 unload: true,
//                 columns: [labels, dd]
//               });
//         }
//         else if(filterlevel == configurator.level2)
//         {
//             console.log("************Inside Level 2************",configurator.level2)
//             filterlevel = configurator.level3
//             console.log('-----FilterLevel----',filterlevel)
//             parentLevel2_value = configurator.level2
//             console.log(chartId)
//             console.log(configurator)
//             console.log('----d---',d)
//             console.log('--------Module-----',module)
//             console.log('--------parentLevel1_value-----',parentLevel1_value)
//             console.log('--------parentLevel2_value-----',parentLevel2_value)
//             console.log('--------clickedBar_x_value-----',clickedBar_x_value)
//             //dataItems = level3_module_year_month_days_data[module][parentLevel1_value][parentLevel2_value][clickedBar_x_value]
//             dataItems = level3Data[module][parentLevel1_value][parentLevel2_value][clickedBar_x_value][filterlevel]
//             var labels = dataItems.map(function(convArray){return convArray[0];});
//             var dd = dataItems.map(function(convArray){return convArray[1]})
//             labels.splice(0, 0, "x");
//             dd.splice(0, 0, "Sale");
//             console.log("---Labels---",labels)
//             console.log("---dd---",dd)
//             chart.load({
//               x : "x",
//               unload: true,
//               columns: [labels, dd]
//             });
//         }
//         else
//         {
//           console.log("**************Inside Level 3*************",configurator.level3)
//           console.log('----d---',d)
//         }
//       },
//     },
//     bar: {
//       width: {
//         ratio: 0.7,
//       },
//       space: 0.5,
//     },
//     point: {
//       show: true
//     },
//     selection: {
//       enabled: true,
//       multiple: true
//     },
//     legend: {
//       item: {
//         onmouseover: function (id) { focus(chart.id)}
//       }
//     },
//     tooltip: {
//       show: true,
//       grouped: false,
//       horizontal : false,
//       format:{
//         title: function (d) { return 'Data -' +module+ ' in Lakh'; },
//       },
//       horizontal: false,
//   },
//     axis: {
//       x: {
//         show : true,
//         type: 'category',
//       },
//       y: {
//         label: {
//           text: module + " in Lakh",
//           position: "outer-middle",
//         },
//       },
//     },
//   });
//   console.log("*******************************Ends**************************");
// }

function plotChart1(chartId, chartType, module, dataItems, filterlevel, configurator) {
  console.log('----Inside Plotchart1 Function------')
  console.log(dataItems)
  console.log(filterlevel)
  var module = module
  var parentLevel1_value = ''
  var parentLevel2_value = ''
  var labels = dataItems.map(function(convArray){return convArray[0];});
  var dd = dataItems.map(function(convArray){return convArray[1]})
  var colours = ['#3366cc','#dc3912','#ff9900','#109618','#990099','#0099c6','#dd4477','#66aa00','#b82e2e','#316395','#994499','#22aa99','#aaaa11','#6633cc','#e67300','#8b0707','#651067','#329262','#5574a6','#3b3eac','#b77322','#16d620','#b91383','#f4359e','#9c5935','#a9c413','#2a778d','#668d1c','#bea413','#0c5922','#743411'];

  labels.splice(0, 0, "x");
  dd.splice(0, 0, module);
  console.log('-----Labels----', labels)
  console.log('-----dd----', dd)
  var parentFilterValue = ''
  var drillData = ''
  var chart = c3.generate({
    bindto: "#" + chartId,
    data: {
      x : 'x',
      columns : [labels, dd],
      type: chartType,
      color: function (color, d) {
        return colours[d.index];
      },
      onclick: function (d, element) {
        console.log('----d---',d)
        module = d.id
        var clickedBar_x_value = this.internal.config.axis_x_categories[d.x]
        console.log('--------clickedBar_x_value---------',clickedBar_x_value);
        if(filterlevel == configurator.level1)
        {
            console.log("*******Inside Level 1*******",configurator.level1)
            console.log(chartId)
            console.log(configurator)
            console.log('--------clickedBar_x_value-----',clickedBar_x_value)
            parentLevel1_value = clickedBar_x_value
            filterlevel = configurator.level2
            console.log('--------Module-----',module)
            console.log('--------parentLevel1_value-----',parentLevel1_value)
            console.log('--------FilterLevel----',filterlevel)
            dataItems = level2Data[module][parentLevel1_value][filterlevel] 
            console.log('-----Level2Data-------',dataItems)
            console.log(filterlevel)
            var labels = dataItems.map(function(convArray){return convArray[0];});
            var dd = dataItems.map(function(convArray){return convArray[1]})
            labels.splice(0, 0, "x");
            dd.splice(0, 0, module);
            chart.load({
                x : "x",
                unload: true,
                columns: [labels, dd],
              });
        }
        else if(filterlevel == configurator.level2)
        {
            console.log("******Inside Level 2******",configurator.level2)
            console.log(chartId)
            console.log(configurator)
            filterlevel = configurator.level3            
            console.log('--------clickedBar_x_value-----',clickedBar_x_value)
            parentLevel2_value = clickedBar_x_value
            console.log('----d---',d)
            console.log('--------Module-----',module)
            console.log('--------parentLevel1_value-----',parentLevel1_value)
            console.log('--------parentLevel2_value-----',parentLevel2_value)
            console.log('--------FilterLevel----',filterlevel)
            dataItems = level3Data[module][parentLevel1_value][parentLevel2_value][filterlevel]
            console.log('-------Leve3Data-----',dataItems)
            var labels = dataItems.map(function(convArray){return convArray[0];});
            var dd = dataItems.map(function(convArray){return convArray[1]})
            labels.splice(0, 0, "x");
            dd.splice(0, 0, module);
            chart.load({
              x : "x",
              unload: true,
              columns: [labels, dd],
            });
            console.log("******Inside Level 3******",configurator.level3)
        }
        else
        {
          // console.log("**************Inside Level 3*************",configurator.level3)
          console.log('----d---',d)
        }
      },
    },
    bar: {
      width: {
        ratio: 0.7,
      },
      space: 0.5,
    },
    point: {
      show: true
    },
    selection: {
      enabled: true,
      multiple: true
    },
    legend: {
      item: {
        onmouseover: function (id) { focus(chart.id)}
      }
    },
    tooltip: {
      show: true,
      grouped: false,
      horizontal : false,
      format:{
        title: function (d) { return 'Data -' +module+ ' in Lakh'; },
      },
      horizontal: false,
  },
    axis: {
      x: {
        show : true,
        type: 'category',
      },
      y: {
        label: {
          text: module + " in Lakh",
          position: "outer-middle",
        },
      },
    },
  });
  console.log("*******************************Ends**************************");
}
