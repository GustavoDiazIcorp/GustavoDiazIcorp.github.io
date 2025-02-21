(function() {
  // La API dscc ya está disponible en la variable global "dscc"
  // La librería WordCloud se cargó desde el CDN especificado en manifest.json

  function drawViz(data) {
    // "data.tables.DEFAULT" contiene la dimensión y la métrica
    const words = data.tables.DEFAULT.map(row => [row.dimID, row.metricID]);
    
    // Crea un <canvas> para dibujar la nube de palabras
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);

    // Genera la nube de palabras
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

  // Suscribirse a los datos y dibujar
  dscc.subscribeToData(drawViz, { transform: dscc.objectTransform });
})();
