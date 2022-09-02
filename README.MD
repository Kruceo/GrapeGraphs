# **How to use GrapeGraphs** #
###### <br> #
## Basic use: ##
##### <br> #



>#### Default style ####
``` html 
<canvas id="graph1"></canvas>
<script onload="makeGraph('graph1',[1,2,3,5,8,13])" src="https://kruceo.github.io/GrapeGraphs/grapeGraph.js"></script>
```
###### <br> ###
## Changing style: ##
###### <br> ######
>#### From script ####

``` html 
<canvas id="graph1"></canvas>
<script onload=" 
    graphColor = 'rgb(255,0,0)'
    fillColor = 'rgb(255,0,0,0.5)'
    markColor = 'transparent'
    zeroColor = '#1212af'
    makeGraph([2,4,6,10,10,6,4,2,-5,-2])" src="https://kruceo.github.io/GrapeGraphs/grapeGraph.js"></script>
```
###### <br> ######
>#### From separate script ####

``` html 
<canvas id="graph1"></canvas>
<script>src="https://kruceo.github.io/GrapeGraphs/grapeGraph.js"></script>
<script>
    graphColor = 'rgb(255,0,0)'
    fillColor = 'rgb(255,0,0,0.5)'
    markColor = 'transparent'
    zeroColor = '#1212af'
    makeGraph([2,4,6,10,10,6,4,2,-5,-2])
</script>
```
###### <br> ######
>#### From attributes ####
``` html 
 <canvas id="graph1"
     graphColor="black" 
     fillColor="rgb(222,222,0,0.5)"
     markColor="#11ff11"
     zeroColor="rgb(255,0,0,1)" ></canvas>
<script>onload="makeGraph('graph1',[1,5,-2,0,4x])"src="https://kruceo.github.io/GrapeGraphs/grapeGraph.js"></script>

```
