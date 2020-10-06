import Route from '@ember/routing/route';
import fetch from "fetch";

export default class ApplicationRoute extends Route {
    async model() {
        let response = await fetch("https://api.coronavirus.data.gov.uk/v1/data?filters=areaName=United%2520Kingdom;areaType=overview&latestBy=newCasesByPublishDate&structure=%7B%22date%22:%22date%22,%22value%22:%22newCasesByPublishDate%22%7D");
        let data = await response.json();
        return data;
      }
}
