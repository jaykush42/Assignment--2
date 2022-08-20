fetch("data.json")
.then(function(response){
    return response.json();
})
.then(function(data){
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for(let i=0; i<data.length; i++){
        let dataArray = data[i];
        if(i==0){
            out += `<tr>`;
            for(let j=0; j<dataArray.length; j++){
                if(dataArray[j] == "ENERGY CONSUMED (kWh)" || dataArray[j] == "IDLE TIME"){
                    out += `<th><table style='width : 100%'><tr>`+dataArray[j]+`</tr><tr><td>Today</td><td>MTD</td><td>YTD</td></tr></table></th>`;
                }else{
                    out += `<th>`+dataArray[j]+`</th>`;
                }
            }
            out += `</tr>`;
        }else{
            out += `<tr>`;
            for(let j=0; j<dataArray.length; j++){
                if(j == 2 || j == 9){
                    out += `<td><table style='width : 100%'><td>0</td><td>0</td><td>0</td></table></td>`;
                }else{
                    out += `<td>`+dataArray[j]+`</td>`;
                }
            }
            out += `</tr>`;
        }
    }
    placeholder.innerHTML = out;
})