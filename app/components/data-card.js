import Component from '@glimmer/component';

export default class DataCardComponent extends Component {   
    get casesIncreasing() {
        return this.args.todaysAmount > this.args.yesterdaysAmount;
      }
}
