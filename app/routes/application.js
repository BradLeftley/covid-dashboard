import Route from '@ember/routing/route';
import fetch from "fetch";

export default class ApplicationRoute extends Route {
    async model() {
        const response = await fetch("https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=nation&structure=%7B%22date%22:%22date%22,%22areaName%22:%22areaName%22,%22newCasesByPublishDate%22:%22newCasesByPublishDate%22,%22cumPeopleReceivingFirstDose%22:%22cumPeopleReceivingFirstDose%22%7D");
        const data = await response.json();

        const today = moment().format('YYYY-MM-DD');
        const yesterday = moment().subtract(1, 'day').format('YYYY-MM-DD');
        const countryNames = ["England", "Scotland", "Northern Ireland", "Wales"]
        const vaccinatedData = {};
        try{
        const vaccinated = await fetch("https://api.coronavirus.data.gov.uk/v1/data?filters=areaName=United%2520Kingdom;areaType=overview&latestBy=cumPeopleReceivingFirstDose&structure=%7B%22date%22:%22date%22,%22value%22:%22cumPeopleReceivingFirstDose%22%7D");
         vaccinatedData = await vaccinated.json();
        }
          catch(err){

        }
        const todaysValues = data.data.filter(value => value.date === today);
        const yesterdaysValues = data.data.filter(value => value.date === yesterday);
        const theData = [];
        countryNames.forEach(country => {
            const x = {};

            x.countryName = country;

            todaysValues.forEach(tValue => {
                if (tValue.areaName === country && today === tValue.date) {
                    x.today = tValue;
                }
            })
            yesterdaysValues.forEach(yValue => {
                if (yValue.areaName === country && yesterday === yValue.date) {
                    x.yesterday = yValue;
                }
            })
            theData.addObject(x);
        })

        return {theData, vaccinatedData};
    }
}
