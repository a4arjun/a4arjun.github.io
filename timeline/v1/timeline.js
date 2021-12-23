class TimeLine{

  constructor(selector, config, timelineData){
    this.selector = selector;
    this.config = config;
    this.timelineData = timelineData;
  }


  draw(){
    let timelineContainer;
    let data;
    let style;

    style = document.head.appendChild(document.createElement("style"));

    style.innerHTML = `
    
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

    :root{
      --bg-primary: #0099ff;
      --bg-secondary: #1C2333;
      --bg-event: #2B3245;
      --event-text: #acc;
    }

    *{
      padding: 0;
      margin: 0;
      font-family: 'Roboto', sans-serif;
    }

    .timeline-container{
      max-width: 600px;
      padding: 10px;
      display: grid;
      grid-template-columns: auto 2px auto;
    }

    .timeline-date{
      font-weight: bold;
      color: #888;
      text-align: right;
      padding:0 4px;
      margin: 0 20px 20px 5px;
      position: relative;
      transform: translateY(-2px);
    }

    .timeline-event{
      padding: 12px;
      margin: 15px 5px 5px 25px;
      background-color: ${ this.config.eventBackground ? this.config.eventBackground : 'var(--bg-event)'};
      border-radius: 4px;
      line-height: 1.5;
      color: ${ this.config.eventText ? this.config.eventText : 'var(--event-text)' };
    }

    .timeline{
      background: ${this.config.lineColor ? this.config.lineColor : 'var(--bg-primary)'};
      position: relative;
    }
    
    .timeline::after{
      content: '';
      width: 12px;
      height: 12px;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      background: ${this.config.dotColor ? this.config.dotColor : 'white'};
      border-radius: 50%;
      border: 2px solid ${this.config.lineColor ? this.config.lineColor : 'var(--bg-primary)'};
    }

    .timeline::before{
      content: '';
      width: 12px;
      height: 12px;
      position: absolute;
      bottom: -16px;
      left: 50%;
      transform: translateX(-50%);
      background: ${this.config.dotColor ? this.config.dotColor : 'white'};
      border-radius: 50%;
      border: 2px solid ${this.config.lineColor ? this.config.lineColor : 'var(--bg-primary)'};
    }

    .timeline-event ul{
      margin-left: 16px;
      list-style-type: disc;
    }

    .timeline-event ul li:not(:last-child){
      margin-bottom: 10px;
    }
    
    `;

   

    timelineContainer = document.getElementById(this.selector);

    data = '<div class="timeline-container">';
    this.timelineData.forEach(
      (events) => {
        data += `<div class="timeline-date">${events.time}</div><div class="timeline" style="background:${this.config.lineColor}"></div><div class="timeline-event"><ul>`
        events.events.forEach(
          (e) => {
            data += `<li>${e}</li>`
          }
        )
        data += '</ul></div>'
      }
    )
    data += '</div>';
    timelineContainer.innerHTML = data;
  }
}
