import Route from '@ember/routing/route';
import fetch from "fetch";

export default class ApplicationRoute extends Route {
    async model() {
        let response = await fetch("https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=nation&structure=%7B%22date%22:%22date%22,%22areaName%22:%22areaName%22,%22newCasesByPublishDate%22:%22newCasesByPublishDate%22%7D");
        let data = await response.json();
        console.log(data)

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        // today = mm + '/' + dd + '/' + yyyy;
        today = yyyy +'-'+mm+'-'+dd;
        return data.data.filter(value => value.date === today);
      }
}
