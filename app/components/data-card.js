import Component from '@glimmer/component';

export default class DataCardComponent extends Component {
    get casesIncreasing() {
        return this.args.todaysAmount > this.args.yesterdaysAmount;
    }
    get percentageIncrease() {
        let value = (this.args.todaysAmount - this.args.yesterdaysAmount) / this.args.todaysAmount * 100.0;

        let rounded = Math.round((value + Number.EPSILON) * 100) / 100;

        if (rounded > 0) {
            rounded = "+" + rounded;
        }
        return rounded + "%";
    }
}
