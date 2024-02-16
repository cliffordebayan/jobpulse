import { useEffect } from 'react';
import { Chart } from 'chart.js';
import { WordCloudController, WordElement } from 'chartjs-chart-wordcloud';
import * as d3 from 'd3';

Chart.register(WordCloudController, WordElement);

const WordCloudChart = ({ words, chartId }) => {
  useEffect(() => {
    const canvas = document.getElementById(`canvas-${chartId}`);
    const ctx = canvas.getContext('2d');

    // Create a color scale based on word counts
    const colorScale = d3
      .scaleSequential(d3.interpolateViridis)
      .domain([0, d3.max(words, (d) => d.value)]);

    const chart = new Chart(ctx, {
      type: 'wordCloud',
      data: {
        labels: words.map((d) => d.key),
        datasets: [
          {
            label: '',
            data: words.map((d) =>
              d.value !== null && d.value !== undefined
                ? Math.round(d.value * 1000)
                : 0
            ),
            color: (context) => {
              // Map word count to color using the color scale
              const wordCount = words[context.dataIndex].value;
              return colorScale(wordCount);
            },
          },
        ],
      },
      options: {
        title: {
          display: false,
          text: `Chart.js Word Cloud ${chartId}`,
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, [words, chartId]);

  return <canvas id={`canvas-${chartId}`}></canvas>;
};

export default WordCloudChart;
