import Route from '@ember/routing/route';
import fetch from "fetch";

export default class ApplicationRoute extends Route {
    async model() {
        let response = await fetch("https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=nation&structure=%7B%22date%22:%22date%22,%22areaName%22:%22areaName%22,%22newCasesByPublishDate%22:%22newCasesByPublishDate%22%7D");
        let data = await response.json();
        console.log(data)

        let today = moment().format('YYYY-MM-DD');
        let yesterday = moment().subtract(1, 'day').format('YYYY-MM-DD');
        console.log(today)
        console.log("YESTERDAY", yesterday)

        let countryNames = ["England", "Scotland", "Northern Ireland", "Wales"]

        let todaysValues = data.data.filter(value => value.date === today);
        let yesterdaysValues = data.data.filter(value => value.date === yesterday);
        let theData = [];
        countryNames.forEach(country => {
            let x = {};

            x.countryName = country;
            todaysValues.forEach(tValue => {
                if(tValue.areaName === country && today === tValue.date){
                    x.today = 
                        tValue;
                }
            })
            yesterdaysValues.forEach(yValue => {
                if(yValue.areaName === country && yesterday === yValue.date){
                    x.yesterday = 
                    yValue;
                }
            })

            
            theData.addObject(x);

        })

        return theData;
        
        ;
      }
}
