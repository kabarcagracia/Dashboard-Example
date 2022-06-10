import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @ViewChild(BaseChartDirective) coins: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        borderColor: '#2E5FDE',
        borderWidth: 3
      },
      point: {
          radius: 0
      }
    },
    scales: {
      x: {
        display: true
      },
      y: {
        display: false
      }
    },
    plugins: {
      legend: {
        display: false,
      }
    }
  };
  public barChartType: ChartType = 'line';
  public barChartData: ChartData<'line'> = {
      labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
          data: [435, 321, 532, 801, 1231, 1098, 732, 321, 451, 482, 513, 397]
      }]
  };


  public coins1ChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        borderColor: '#FBE591',
        borderWidth: 3
      },
      point: {
          radius: 0
      }
    },
    scales: {
      x: {
        display: false
      },
      y: {
        display: false
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false
      }
    }
  };
  public coins2ChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        borderColor: '#A9D2BD',
        borderWidth: 3
      },
      point: {
          radius: 0
      }
    },
    scales: {
      x: {
        display: false
      },
      y: {
        display: false
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false
      }
    }
  };
  public coins3ChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        borderColor: '#FFB6B6',
        borderWidth: 3
      },
      point: {
          radius: 0
      }
    },
    scales: {
      x: {
        display: false
      },
      y: {
        display: false
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false
      }
    }
  };
  public coinsChartType: ChartType = 'line';
  public coinsChartData: ChartData<'line'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
    {
        data: [435, 321, 532, 801, 1231, 1098, 732, 321, 451, 482, 513, 397]
    }
    ]
  };
}
