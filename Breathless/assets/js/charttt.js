
var chart = c3.generate({
    size:{
      height:240,
      width:480
    },
    data: {
        columns: [
            ['赞', 886,],
            ['踩', 237],
        ],
        type: 'donut',
        colors: {
            踩: '#ff0000',
            赞: '#9AFB8B'
        },
        color: function (color, d) {
            // d will be 'id' when called for legends
            return d.id && d.id === 'data3' ? d3.rgb(color).darker(d.value / 150) : color;
        }
    },
    donut: {
        title: '踩 赞 比',
        label:{show:false}
    },
    legend:{show:false}
});
