(function() {
    const dscc = require('@google/dscc');
    const WordCloud = require('wordcloud');
  
    function drawViz(data) {
      const words = data.tables.DEFAULT.map(row => [row.dimID, row.metricID]);
      const canvas = document.createElement('canvas');
      document.body.appendChild(canvas);
  
      WordCloud(canvas, {
        list: words,
        gridSize: Math.round(16 * window.innerWidth / 1024),
        weightFactor: function (size) {
          return Math.pow(size, 1.5) * 0.1;
        },
        rotateRatio: 0.5,
        backgroundColor: '#ffffff'
      });
    }
  
    dscc.subscribeToData(drawViz, { transform: dscc.objectTransform });
  })();
  