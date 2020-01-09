larcs_json = "https://sheltered-lake-36010.herokuapp.com/api/v1.0/LARCs"
local_url = "http://127.0.0.1:5000/api/v1.0/LARCs"



d3.json(larcs_json).then((importedData) => {
   const data = JSON.parse(importedData).data;
init(data);
});

function buildCharts(_meta,data) {
    // var chartSamples = data.samples.filter(obj => obj.id == _meta)[0];
    
    const regions = []
    const sampleValues = []
    const regions_2 = []
    const sampleValues_2 = []
    for (let row of data){
      sampleValues.push(row['percent_iplarc_iudplace'])
      regions.push(row['Regions'])
      sampleValues_2.push(row['percent_iplarc_implant'])
      regions_2.push(row['Regions'])
    }
    
    // var chartSamples = data.filter(obj => obj.hospitalid == _meta)[0];
    
    // var bar_labels = chartSamples.percent_iplarc_implant.slice(0, 10);
    // var percent_iplarc_implant = bar_labels.reverse();
    // otu_ids = percent_iplarc_implant.map(hospitalid=>"OTU " + hospitalid);
  
    // var bar_values = chartSamples.hospitalid.slice(0, 10);
    // var sampleValues = bar_values.reverse();
  
    // var bar_hover = chartSamples.Regions.slice(0, 10);
    // var Regions = bar_hover.reverse();

// bar chart
    var trace1 = {
        x: regions,
        y: sampleValues,
        // text: otu_labels,
        type: "bar",
        name: "IUD"
        // orientation: "h",
    };

    var trace2 = {
      x: regions_2,
      y: sampleValues_2,
      // text: otu_labels,
      type: "bar",
      name: "Implant"
      // orientation: "h",
  };
    
    var data_bar = [trace1, trace2];

    const layout = {
      barmode: 'stack', 
      autosize: false,
      width: 1000,
      height: 700
    };

    Plotly.newPlot("bar", data_bar, layout);
}

// function buildMetadata(_meta) {

//     var demographicData = data.metadata.filter(obj => obj.id == _meta)[0];
//     console.log(demographicData);
 
//     var demographic = d3.select("#sample-metadata");
//     demographic.html("");
//     Object.entries(demographicData).forEach(([key, value]) => {
//       demographic.append("p").text(`${key}: ${value}`)
//     });
// };

// function buildCharts(_meta) {
    
//     var chartSamples = data.samples.filter(obj => obj.id == _meta)[0];
    
//     var bar_labels = chartSamples.otu_ids.slice(0, 10);
//     var otu_ids = bar_labels.reverse();
//     otu_ids = otu_ids.map(id=>"OTU " + id);
   
//     var bar_values = chartSamples.sample_values.slice(0, 10);
//     var sampleValues = bar_values.reverse();
    
//     var bar_hover = chartSamples.otu_labels.slice(0, 10);
//     var otu_labels = bar_hover.reverse();
    

// // bar chart
//     var trace1 = {
//         x: sampleValues,
//         y: otu_ids,
//         text: otu_labels,
//         type: "bar",
//         orientation: "h",
//     };
    
//     var data_bar = [trace1];

//     Plotly.newPlot("bar", data_bar, layout);

// // bubble chart
//     var trace2 = {
//         x: chartSamples.otu_ids,
//         y: chartSamples.sample_values,
//         text: chartSamples.otu_labels,
//         mode: "markers",
//         marker: {
//           color: chartSamples.otu_ids,
//           size: chartSamples.sample_values
//         }
//       };
    
//     var data_bubble = [trace2];
    
//     var layout = {
//       xaxis: { title: "OTU ID"},
//     };
    
//     Plotly.newPlot("bubble", data_bubble, layout);

// // gauge chart
//     var gaugeData = data.metadata.filter(sampleObj => sampleObj.id == _meta)[0];

//     // // part of data to input
//     // var traceGauge = {
//     //   type: 'pie',
//     //   showlegend: false,
//     //   hole: 0.4,
//     //   rotation: 90,
//     //   values: gaugeData.wfreq,
//     //   title: { text: "Belly Button Washing Frequency: Scrubs per week", font: { size: 12 } },
//     //   text: ['0-1','1-2','2-3','3-4','4-5','5-6','6-7','7-8','8-9'],
//     //   direction: 'clockwise',
//     //   textinfo: 'text',
//     //   textposition: 'inside',
//     //   marker: {
//     //     colors: ['','','','','','','','','','white'],
//     //     labels: ['0-1','1-2','2-3','3-4','4-5','5-6','6-7','7-8','8-9'],
//     //     hoverinfo: 'label'
//     //   }
//     // }

//     // // needle
//     // var degrees = 50, radius = .9
//     // var radians = degrees * Math.PI / 180
//     // var x = -1 * radius * Math.cos(radians) * wfreq
//     // var y = radius * Math.sin(radians)

//     // var gaugeLayout = {
//     //   shapes: [{
//     //     type: 'line',
//     //     x0: 0.5,
//     //     y0: 0.5,
//     //     x1: 0.6,
//     //     y1: 0.6,
//     //     line: {
//     //       color: 'black',
//     //       width: 3
//     //     }
//     //   }],
//     //   title: 'Chart',
//     //   xaxis: {visible: false, range: [-1, 1]},
//     //   yaxis: {visible: false, range: [-1, 1]}
//     // }

//     // // var dataGauge = [traceGauge]

//     // Plotly.newplot('gauge', traceGauge, gaugeLayout)

//     var gaugeChart = [
//       {
//         type: "indicator",
//         mode: "gauge+number+delta",
//         value: gaugeData.wfreq,
//         title: { text: "Belly Button Washing Frequency: Scrubs per week", font: { size: 15 } },
//         // delta: { reference: 400, increasing: { color: "Viridis" } },
//         text: ["0-1", "1-2", "2-3",
//           "3-4", "4-5", "5-6", "6-7",
//           "7-8", "8-9"
//         ],
//         textinfo: "text",
//         textposition: "inside",
//         gauge: {
//           axis: { range: [null, 9], tickwidth: 1, tickcolor: "red" },
//           bar: { color: "darkred" },
//           bgcolor: "white",
//           borderwidth: 2,
//           bordercolor: "lightgrey",
//           steps: [
//             // { range: [0, 1]},
//             // { range: [1, 2]},
//             // { range: [2, 3]},
//             // { range: [3, 4]},
//             // { range: [4, 5]},
//             // { range: [5, 6]},
//             // { range: [6, 7]},
//             // { range: [7, 8]},
//             // { range: [8, 9]}
//             { range: [0, 1], color: "beige" },
//             { range: [1, 2], color: "antiquewhite" },
//             { range: [2, 3], color: "blanchedalmond" },
//             { range: [3, 4], color: "palegoldenrod" },
//             { range: [4, 5], color: "darkseagreen" },
//             { range: [5, 6], color: "olivedrab" },
//             { range: [6, 7], color: "olive" },
//             { range: [7, 8], color: "darkolivegreen" },
//             { range: [8, 9], color: "seagreen" }
//           ]
//           // colorscale: "greens"
//           // threshold: {
//           //   line: { color: "red", width: 4 },
//           //   thickness: 0.75,
//           //   value: 10
//           // }
//         }
//       }
      
//     ];

//     var layout = {
//       width: 500,
//       height: 400,
//       margin: { t: 25, r: 25, l: 25, b: 25 },
//       paper_bgcolor: "white",
//       font: { color: "black", family: "Arial" }
//     };
    
//     Plotly.newPlot("gauge", gaugeChart, layout);

// };

function init(data) {
  var selector = d3.select("#selDataset");
  console.log(data)
  const names = new Set()
  for (let row of data){
    names.add(row['Regions'])
  }
  const sortedNams = [...names].sort((a,b)=>parseInt(a)>parseInt(b))
  sortedNams.forEach(_meta => {
    selector
        .append("option")
        .text(_meta)
        .property("value", _meta);
});
optionChanged(sortedNams,data);


console.log(sortedNams)
};

function optionChanged(newSample,data) {
    // buildMetadata(newSample);
    buildCharts(newSample,data);
};